const speechBubble = document.getElementById('speechBubble');
const bubbleTitle = document.getElementById('bubbleTitle');
const levels = document.querySelectorAll('.level');

let currentLevel = 5;

const levelData = {
    1:  { name: 'Lección 1',  x: 50,  y: 90 },
    2:  { name: 'Lección 2',  x: 140, y: 150 },
    3:  { name: 'Lección 3',  x: 230, y: 210 },
    4:  { name: 'Lección 4',  x: 190, y: 300 },
    5:  { name: 'Lección 5',  x: 230, y: 390 },
    6:  { name: 'Lección 6',  x: 140, y: 450 },
    7:  { name: 'Lección 7',  x: 50,  y: 510 },
    8:  { name: 'Lección 8',  x: 90,  y: 600 },
    9:  { name: 'Lección 9',  x: 50,  y: 690 },
    10: { name: 'Lección 10', x: 140, y: 750 },
    11: { name: 'Lección 11', x: 230, y: 810 },
    12: { name: 'Lección 12', x: 190, y: 900 },
    13: { name: 'Lección 13', x: 230, y: 990 },
    14: { name: 'Lección 14', x: 140, y: 1050 },
    15: { name: 'Lección 15', x: 50,  y: 1110 },
    16: { name: 'Lección 16', x: 90,  y: 1200 },
    17: { name: 'Lección 17', x: 50,  y: 1290 },
    18: { name: 'Lección 18', x: 140, y: 1350 },
    19: { name: 'Lección 19', x: 230, y: 1410 },
    20: { name: 'Lección 20', x: 190, y: 1500 },
    21: { name: 'Lección 21', x: 230, y: 1590 },
    22: { name: 'Lección 22', x: 140, y: 1650 },
    23: { name: 'Lección 23', x: 50,  y: 1710 },
    24: { name: 'Lección 24', x: 90,  y: 1800 },
    25: { name: 'Lección 25', x: 50,  y: 1890 }
};


// Mostrar globo de texto
function showSpeechBubble(level) {
    const data = levelData[level];
    bubbleTitle.textContent = data.name;
    speechBubble.style.left = (data.x - 20) + 'px';
    speechBubble.style.top = (data.y - 90) + 'px';
    speechBubble.classList.add('active');
}

// Click en niveles
levels.forEach(level => {
    level.addEventListener('click', function() {
        if (this.classList.contains('locked')) {
            return;
        }
        
        const levelNum = parseInt(this.dataset.level);
        currentLevel = levelNum;
        
        // Actualizar clases
        levels.forEach(l => l.classList.remove('current'));
        this.classList.add('current');
        
        // Mostrar globo
        showSpeechBubble(levelNum);
    });
});

function startLevel() {
    alert(`¡Iniciando nivel ${currentLevel}!`);
    // Aquí puedes redirigir a la página del nivel
    // window.location.href = `nivel${currentLevel}.html`;
}

showSpeechBubble(currentLevel);