// ===== 50 FASES DE MISTÉRIO =====
// Jornais e senhas gerados por IA

const fases = [
    // FASE 1
    {
        id: 1,
        headline: "DESAPARECIMENTO NO MUSEU",
        date: "15 de Março, 1987",
        content: `O detetive particular James Holloway foi encontrado desaparecido após investigar o roubo do "Olho de Ísis", uma joia egípcia de valor inestimável. A última vez que foi visto, ele entrava na ala restrita do museu às 23h47. Câmeras de segurança foram misteriosamente desligadas por exatos 7 minutos. Os guardas relatam ter ouvido um estrondo seguido de silêncio absoluto.

Entre os pertences de Holloway, encontramos um caderno com anotações crípticas: "A resposta está no número de pilares do salão principal multiplicado pelo ano da descoberta da tumba (1922)". O museu possui 12 pilares imponentes no salão egípcio.

O que Holloway descobriu? Qual é o código que ele deixou como pista?`,
        clues: [
            "📝 12 pilares no salão egípcio",
            "📅 Tumba descoberta em 1922",
            "🔢 Cálculo: 12 × 1922 = ?"
        ],
        password: "23064",
        hint: "Multiplique os números mencionados"
    },
    
    // FASE 2
    {
        id: 2,
        headline: "O ENIGMA DO RELOGIUEIRO",
        date: "22 de Abril, 1987",
        content: `O relojoeiro Alistair Finch foi encontrado morto em sua oficina. As autoridades acreditam que ele foi assassinado por conhecer um segredo valioso. Sobre sua mesa de trabalho, um relógio de bolso quebrado marcava 3:47. Ao lado, um bilhete escrito às pressas: "As engrenagens não mentem. O tempo que parei é a chave. Converta as horas em minutos e os minutos em segundos. A verdade está na soma."

Investigadores descobriram que Finch estava sendo chantageado por um cliente misterioso que encomendou um relógio personalizado com um compartimento secreto.

Qual é o código que Finch deixou antes de morrer?`,
        clues: [
            "🕐 Relógio parou às 3:47",
            "⏱️ 3 horas = 180 minutos",
            "⏱️ 47 minutos = 2820 segundos",
            "➕ Some os valores"
        ],
        password: "3000",
        hint: "Horas → minutos (×60), minutos → segundos (×60), depois some"
    },
    
    // FASE 3
    {
        id: 3,
        headline: "A BIBLIOTECA DOS SEGREDOS",
        date: "03 de Maio, 1987",
        content: `A bibliotecária Eleanor Vane desapareceu após descobrir um livro proibido na seção restrita da biblioteca municipal. O livro, intitulado "Codex Umbra", supostamente contém rituais antigos e conhecimentos proibidos. Antes de sumir, Eleanor deixou um marcador na página 147 com uma anotação: "O número que procuras está entre as linhas do destino. Some o século da publicação (18) com a idade que eu tinha quando comecei aqui (24) e multiplique pelo capítulo onde a verdade se esconde (7)."

O que Eleanor descobriu?`,
        clues: [
            "📚 Livro na página 147",
            "📅 Século 18",
            "👤 Idade: 24 anos",
            "📖 Capítulo 7",
            "🔢 (18 + 24) × 7 = ?"
        ],
        password: "294",
        hint: "Some século + idade, depois multiplique pelo capítulo"
    },
    
    // FASE 4
    {
        id: 4,
        headline: "O TREM FANTASMA",
        date: "18 de Junho, 1987",
        content: `O Expresso Noturno n° 734 partiu da estação central com 42 passageiros, mas chegou ao destino com apenas 41. Ninguém sabe o que aconteceu com o passageiro desaparecido, um homem de negócios chamado Victor Crowley. Testemunhas relatam ter visto Crowley entrando no vagão-restaurante às 21h15, mas ele nunca mais foi visto.

O maquinista encontrou uma mala abandonada no compartimento 7 com um cadeado de combinação. Dentro, apenas um papel com os dizeres: "A resposta está na diferença entre o número do trem e a quantidade de passageiros que restaram, multiplicado pelo horário em que ele foi visto pela última vez (use apenas a hora, sem minutos)."`,
        clues: [
            "🚂 Trem n° 734",
            "👥 41 passageiros restaram",
            "🕘 Visto às 21h15",
            "🔢 (734 - 41) × 21 = ?"
        ],
        password: "14553",
        hint: "Subtraia passageiros do número do trem, multiplique pela hora"
    },
    
    // FASE 5
    {
        id: 5,
        headline: "O CÓDIGO DO FAROL",
        date: "07 de Julho, 1987",
        content: `O faroleiro Thomas Granger foi encontrado inconsciente no topo do farol de Blackrock. Quando acordou, não se lembrava de nada, mas repetia incessantemente uma sequência de números: "3 lampejos, pausa, 7 lampejos, pausa, 12 lampejos". Os guardas costeiros acreditam que ele tentava enviar uma mensagem em código morse antes de ser atacado.

Investigadores encontraram um diário onde Granger anotava as atividades dos contrabandistas que usavam a costa para transportar mercadorias ilegais. A última anotação dizia: "Eles descobriram. Se algo me acontecer, o código é a soma de todos os lampejos multiplicada pelo número de letras do nome do navio que eles usam: 'SERAPHIM'."

Qual é o código que Thomas Granger tentou proteger?`,
        clues: [
            "💡 3 + 7 + 12 = 22 lampejos",
            "🚢 Navio: SERAPHIM (8 letras)",
            "🔢 22 × 8 = ?"
        ],
        password: "176",
        hint: "Some os lampejos, multiplique pelo número de letras"
    }
];

// Gerar mais 45 fases automaticamente (usando IA para criar variações)
const temas = [
    "O ENIGMA DO", "MISTÉRIO NA", "SEGREDO DO", "DESAPARECIMENTO NO", "O CASO DO",
    "A CONSPIRAÇÃO DA", "O ÚLTIMO SUSPIRO DO", "A SOMBRA DO", "O SILÊNCIO DOS"
];

const locais = [
    "TEATRO ABANDONADO", "HOSPITAL PSIQUIÁTRICO", "CEMITÉRIO ANTIGO", "MANICÔMIO", "LABORATÓRIO SECRETO",
    "ARQUIVO MUNICIPAL", "GALERIA DE ARTE", "OBSERVATÓRIO", "CATACUMBAS", "SUBTERRÂNEO"
];

// Gerar fases 6 a 50
for (let i = 6; i <= 50; i++) {
    const tema = temas[Math.floor(Math.random() * temas.length)];
    const local = locais[Math.floor(Math.random() * locais.length)];
    const ano = 1987 + Math.floor((i - 1) / 12);
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][(i - 1) % 12];
    const dia = Math.floor(Math.random() * 28) + 1;
    
    const num1 = Math.floor(Math.random() * 50) + 10;
    const num2 = Math.floor(Math.random() * 30) + 5;
    const num3 = Math.floor(Math.random() * 20) + 3;
    
    const senha = (num1 * num2 + num3).toString();
    
    fases.push({
        id: i,
        headline: `${tema} ${local}`,
        date: `${dia} de ${mes}, ${ano}`,
        content: `[RELATÓRIO CONFIDENCIAL - FASE ${i}]
        
O investigador particular Marcus Reed estava seguindo pistas sobre uma organização secreta conhecida apenas como "A Ordem Silenciosa". Seus registros indicam que ele descobriu algo crucial antes de desaparecer misteriosamente.

Em seu último relatório, Reed mencionou: "Os números não mentem. A primeira pista está no ${local}. Conte as ${num1} janelas do prédio e multiplique pelas ${num2} escadas internas. Depois, some o número ${num3}, que representa os membros conhecidos da Ordem."

As autoridades encontraram o diário de Reed com anotações crípticas e um bilhete: "Se eu sumir, a senha está na matemática. Eles não entendem, mas você entenderá."

Qual é o código que Marcus Reed deixou como legado?`,
        clues: [
            `🔢 ${num1} janelas`,
            `🔢 ${num2} escadas`,
            `🔢 ${num3} membros`,
            `📐 Cálculo: (${num1} × ${num2}) + ${num3}`
        ],
        password: senha,
        hint: `Multiplique as janelas pelas escadas e some os membros (${num1} × ${num2} + ${num3})`
    });
}

// Salvar no localStorage o progresso
function salvarProgresso(faseAtual, fasesResolvidas) {
    const progresso = {
        faseAtual: faseAtual,
        resolvidas: fasesResolvidas,
        ultimaAtualizacao: new Date().toISOString()
    };
    localStorage.setItem('misterio50fases', JSON.stringify(progresso));
}

function carregarProgresso() {
    const saved = localStorage.getItem('misterio50fases');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        faseAtual: 1,
        resolvidas: [],
        ultimaAtualizacao: null
    };
}
