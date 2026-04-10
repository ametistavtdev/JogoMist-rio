// ===== ESTADO DO JOGO =====
let progresso = carregarProgresso();
let faseAtual = progresso.faseAtual || 1;
let fasesResolvidas = progresso.resolvidas || [];
let pistasEncontradas = [];

// ===== ELEMENTOS DOM =====
const elements = {
    currentPhase: document.getElementById('currentPhase'),
    solvedCount: document.getElementById('solvedCount'),
    newspaperDate: document.getElementById('newspaperDate'),
    newsHeadline: document.getElementById('newsHeadline'),
    newsBody: document.getElementById('newsBody'),
    evidenceNumber: document.getElementById('evidenceNumber'),
    cluesList: document.getElementById('cluesList'),
    passwordInput: document.getElementById('passwordInput'),
    passwordHint: document.getElementById('passwordHint'),
    submitBtn: document.getElementById('submitPassword'),
    prevBtn: document.getElementById('prevPhase'),
    nextBtn: document.getElementById('nextPhase'),
    resetBtn: document.getElementById('resetGame'),
    progressBar: document.getElementById('progressBar'),
    progressPercent: document.getElementById('progressPercent'),
    victoryModal: document.getElementById('victoryModal')
};

// ===== CARREGAR FASE =====
function carregarFase(id) {
    const fase = fases.find(f => f.id === id);
    if (!fase) return;
    
    // Atualizar interface
    elements.currentPhase.textContent = id;
    elements.newspaperDate.textContent = fase.date;
    elements.newsHeadline.textContent = fase.headline;
    elements.newsBody.textContent = fase.content;
    elements.evidenceNumber.textContent = id.toString().padStart(3, '0');
    
    // Carregar pistas
    elements.cluesList.innerHTML = '';
    fase.clues.forEach((clue, index) => {
        const clueDiv = document.createElement('div');
        clueDiv.className = `clue-item ${fasesResolvidas.includes(id) ? 'found' : ''}`;
        clueDiv.textContent = clue;
        elements.cluesList.appendChild(clueDiv);
    });
    
    // Mostrar dica se a fase já foi resolvida
    if (fasesResolvidas.includes(id)) {
        elements.passwordHint.textContent = `✅ Fase resolvida! Senha era: ${fase.password}`;
        elements.passwordInput.disabled = true;
        elements.submitBtn.disabled = true;
    } else {
        elements.passwordHint.textContent = fase.hint;
        elements.passwordInput.disabled = false;
        elements.submitBtn.disabled = false;
        elements.passwordInput.value = '';
    }
    
    // Atualizar navegação
    elements.prevBtn.disabled = (id <= 1);
    elements.nextBtn.disabled = (id >= 50 || !fasesResolvidas.includes(id));
    
    // Atualizar progresso
    atualizarProgresso();
}

// ===== ATUALIZAR PROGRESSO =====
function atualizarProgresso() {
    const resolvidas = fasesResolvidas.length;
    const percentual = (resolvidas / 50) * 100;
    
    elements.solvedCount.textContent = resolvidas;
    elements.progressBar.style.width = percentual + '%';
    elements.progressPercent.textContent = Math.round(percentual);
    
    // Salvar progresso
    salvarProgresso(faseAtual, fasesResolvidas);
    
    // Verificar vitória
    if (resolvidas === 50) {
        elements.victoryModal.style.display = 'flex';
    }
}

// ===== VERIFICAR SENHA =====
function verificarSenha() {
    const fase = fases.find(f => f.id === faseAtual);
    const senhaDigitada = elements.passwordInput.value.trim().toUpperCase();
    
    if (senhaDigitada === fase.password) {
        // Fase resolvida!
        if (!fasesResolvidas.includes(faseAtual)) {
            fasesResolvidas.push(faseAtual);
            fasesResolvidas.sort((a, b) => a - b);
        }
        
        elements.passwordHint.textContent = `✅ Parabéns! Senha correta: ${fase.password}`;
        elements.passwordInput.disabled = true;
        elements.submitBtn.disabled = true;
        elements.nextBtn.disabled = false;
        
        // Atualizar visual das pistas
        document.querySelectorAll('.clue-item').forEach(item => {
            item.classList.add('found');
        });
        
        atualizarProgresso();
        
        // Efeito de sucesso
        elements.passwordInput.style.borderColor = '#2e7d32';
        setTimeout(() => {
            elements.passwordInput.style.borderColor = '#d4a017';
        }, 1000);
        
        // Se não for a última fase, sugerir próxima
        if (faseAtual < 50) {
            setTimeout(() => {
                if (confirm(`Fase ${faseAtual} resolvida! Deseja ir para a próxima fase?`)) {
                    proximaFase();
                }
            }, 500);
        }
    } else {
        // Senha errada
        elements.passwordHint.textContent = `❌ Senha incorreta! ${fase.hint}`;
        elements.passwordInput.style.borderColor = '#8b0000';
        elements.passwordInput.value = '';
        elements.passwordInput.focus();
        
        setTimeout(() => {
            elements.passwordInput.style.borderColor = '#d4a017';
        }, 1000);
    }
}

// ===== NAVEGAÇÃO =====
function faseAnterior() {
    if (faseAtual > 1) {
        faseAtual--;
        carregarFase(faseAtual);
    }
}

function proximaFase() {
    if (faseAtual < 50 && fasesResolvidas.includes(faseAtual)) {
        faseAtual++;
        carregarFase(faseAtual);
    }
}

function resetarJogo() {
    if (confirm('Tem certeza que deseja resetar TODO o progresso? Esta ação não pode ser desfeita!')) {
        fasesResolvidas = [];
        faseAtual = 1;
        localStorage.removeItem('misterio50fases');
        carregarFase(1);
        atualizarProgresso();
        elements.victoryModal.style.display = 'none';
    }
}

// ===== EVENT LISTENERS =====
elements.submitBtn.addEventListener('click', verificarSenha);
elements.prevBtn.addEventListener('click', faseAnterior);
elements.nextBtn.addEventListener('click', proximaFase);
elements.resetBtn.addEventListener('click', resetarJogo);
document.getElementById('closeVictory').addEventListener('click', () => {
    elements.victoryModal.style.display = 'none';
});

elements.passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarSenha();
    }
});

// ===== ATALHOS DE TECLADO =====
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'ArrowRight') {
        e.preventDefault();
        proximaFase();
    } else if (e.ctrlKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        faseAnterior();
    }
});

// ===== INICIALIZAR =====
carregarFase(faseAtual);
