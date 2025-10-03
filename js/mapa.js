const speechBubble = document.getElementById('speechBubble');
const bubbleTitle = document.getElementById('bubbleTitle');
const levels = document.querySelectorAll('.level');
const currentPage = window.location.pathname.split('/').pop();

const pageConfig = {
    'tiposdedatos.html': {
            currentLevel: 5,
            levelNames: {
                1: 'Introducción a tipos de datos',
                2: 'Números enteros y decimales',
                3: 'Cadenas de texto',
                4: 'Booleanos y operadores lógicos',
                5: 'Conversión de tipos'
            }
        },
    'estructurasdecontrol.html': {
            currentLevel: 8,
            levelNames: {
                1: 'Introducción a tipos de datos y operadores',
                2: 'Sentencias condicionales: if y else',
                3: 'Operadores de comparación y lógicos',
                4: 'Sentencia switch',
                5: 'Bucles: for',
                6: 'Bucles: while y do-while',
                7: 'Break y continue en bucles',
                8: 'Anidamiento de condicionales y bucles'
            }
        },
    'funciones.html': {
        currentLevel: 12,
        levelNames: {
            1: 'Introducción a funciones',
            2: 'Declaración y llamada de funciones',
            3: 'Funciones con retorno de valores',
            4: 'Funciones sin retorno (void)',
            5: 'Alcance de variables: local y global',
            6: 'Parámetros y argumentos',
            7: 'Valores por defecto en parámetros',
            8: 'Funciones anidadas',
            9: 'Funciones como expresiones',
            10: 'Funciones flecha',
            11: 'Callbacks básicos',
            12: 'Funciones básicas'
        }
    },
    'algoritmos.html': {
        currentLevel: 4,
        levelNames: {
            1: 'Introduccion a Algoritmos',
            2: 'Variables y operaciones en algoritmos',
            3: 'Estructuras de control en algoritmos',
            4: 'Bubble Sort'
        }
    },
    'arreglos.html': {
        currentLevel: 6,
        levelNames: {
            1: 'Introducción a arreglos',
            2: 'Creación de arreglos',
            3: 'Acceso a elementos por índice',
            4: 'Recorrer arreglos con bucles',
            5: 'Agregar y eliminar elementos',
            6: 'Métodos básicos: push, pop, shift, unshift'
        }
    }    
};

const config = pageConfig[currentPage] || { currentLevel: 5, levelNames: {} };
let currentLevel = config.currentLevel;

function getLessonName(levelNum) {
    return config.levelNames[levelNum] || `Lección ${levelNum}`;
}

const levelData = {
    1:  { name: getLessonName(1),  x: 50,  y: 90 },
    2:  { name: getLessonName(2),  x: 140, y: 150 },
    3:  { name: getLessonName(3),  x: 230, y: 210 },
    4:  { name: getLessonName(4),  x: 190, y: 300 },
    5:  { name: getLessonName(5),  x: 230, y: 390 },
    6:  { name: getLessonName(6),  x: 140, y: 450 },
    7:  { name: getLessonName(7),  x: 50,  y: 510 },
    8:  { name: getLessonName(8),  x: 90,  y: 600 },
    9:  { name: getLessonName(9),  x: 50,  y: 690 },
    10: { name: getLessonName(10), x: 140, y: 750 },
    11: { name: getLessonName(11), x: 230, y: 810 },
    12: { name: getLessonName(12), x: 190, y: 900 },
    13: { name: getLessonName(13), x: 230, y: 990 },
    14: { name: getLessonName(14), x: 140, y: 1050 },
    15: { name: getLessonName(15), x: 50,  y: 1110 },
    16: { name: getLessonName(16), x: 90,  y: 1200 },
    17: { name: getLessonName(17), x: 50,  y: 1290 },
    18: { name: getLessonName(18), x: 140, y: 1350 },
    19: { name: getLessonName(19), x: 230, y: 1410 },
    20: { name: getLessonName(20), x: 190, y: 1500 },
    21: { name: getLessonName(21), x: 230, y: 1590 },
    22: { name: getLessonName(22), x: 140, y: 1650 },
    23: { name: getLessonName(23), x: 50,  y: 1710 },
    24: { name: getLessonName(24), x: 90,  y: 1800 },
    25: { name: getLessonName(25), x: 50,  y: 1890 }
};



function showSpeechBubble(level) {
    const data = levelData[level];
    bubbleTitle.textContent = data.name;
    speechBubble.style.left = (data.x - 20) + 'px';
    speechBubble.style.top = (data.y - 90) + 'px';
    speechBubble.classList.add('active');
}

levels.forEach(level => {
    level.addEventListener('click', function() {
        if (this.classList.contains('locked')) {
            return;
        }
        
        const levelNum = parseInt(this.dataset.level);
        currentLevel = levelNum;
        
        levels.forEach(l => {
            if (l.classList.contains('unlocked') || l.classList.contains('current')) {
                l.classList.remove('current');
                l.classList.add('unlocked');
            }
        });
        
        this.classList.remove('unlocked');
        this.classList.add('current');

        showSpeechBubble(levelNum);
    });
});

function startLevel() {
    alert(`¡Iniciando leccion: ${currentLevel}!`);
    // Aquí puedes redirigir a la página del nivel
    // window.location.href = `nivel${currentLevel}.html`;
}

showSpeechBubble(currentLevel);