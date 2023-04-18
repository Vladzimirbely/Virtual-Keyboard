const upperKeyboard = '<div class="keyboard upper"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>Tab</button> <button>Q</button> <button>W</button> <button>E</button> <button>R</button> <button>T</button> <button>Y</button> <button>U</button> <button>I</button> <button>O</button> <button>P</button> <button>[</button> <button>]</button> <button>&#92;</button> <button>Delete</button> </div> <div class="keyboard-line"> <button>CapsLock</button> <button>A</button> <button>S</button> <button>D</button> <button>F</button> <button>G</button> <button>H</button> <button>J</button> <button>K</button> <button>L</button> <button>;</button> <button>'` + '</button> <button>Enter</button> </div> <div class="keyboard-line"> <button class="shift">Shift</button> <button>Z</button> <button>X</button> <button>C</button> <button>V</button> <button>B</button> <button>N</button> <button>M</button> <button>,</button> <button>.</button> <button>/</button> <button class="arrow-up">&#11165;</button> <button class="shift">Shift</button> </div> <div class="keyboard-line"> <button>Control</button> <button class="win">Win</button> <button>Alt</button> <button class="key-space"></button> <button>Alt</button> <button class="arrow-left">&#11164;</button> <button class="arrow-down">&#11167;</button> <button class="arrow-right">&#11166;</button> <button>Control</button> </div> </div>'
const lowerKeyboard = '<div class="container"> <textarea class="textarea"></textarea> <div class="keyboard lower"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>Tab</button> <button>q</button> <button>w</button> <button class="e">e</button> <button>r</button> <button>t</button> <button>y</button> <button>u</button> <button>i</button> <button>o</button> <button>p</button> <button>[</button> <button>]</button> <button>&#92;</button> <button>Delete</button> </div> <div class="keyboard-line"> <button>CapsLock</button> <button>a</button> <button>s</button> <button>d</button> <button>f</button> <button>g</button> <button>h</button> <button>j</button> <button>k</button> <button>l</button> <button>;</button> <button>'</button> <button>Enter</button> </div> <div class="keyboard-line"> <button class="shift">Shift</button> <button>z</button> <button>x</button> <button>c</button> <button>v</button> <button>b</button> <button>n</button> <button>m</button> <button>,</button> <button>.</button> <button>/</button> <button class="arrow-up">&#11165;</button> <button class="shift">Shift</button> </div> <div class="keyboard-line"> <button>Control</button> <button class="win">Win</button> <button>Alt</button> <button class="key-space"></button> <button>Alt</button> <button class="arrow-left">&#11164;</button> <button class="arrow-down">&#11167;</button> <button class="arrow-right">&#11166;</button> <button>Control</button> </div> </div>` + upperKeyboard + '</div>';
document.body.innerHTML = lowerKeyboard;

const key = document.querySelectorAll('.keyboard-line button');
const textArea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

function clickKey() {
    for (let i of key) {
        i.addEventListener('click', () => {
            textArea.textContent += i.textContent;
        })
    }
} 

clickKey();

const lowKeyboard = document.querySelector('.keyboard.lower');
const upKeyboard = document.querySelector('.keyboard.upper');
const specialKeys = document.querySelectorAll('.keyboard-line button');

function getSpecialKey() {
    specialKeys.forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.textContent) {
                case 'backspace':
                    textArea.textContent = textArea.textContent.replace(/..........$/, '');
                    break;
                case '': 
                    textArea.textContent += ' ';
                    break;
                case 'Tab':
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '    ';
                    break;
                case 'Control': 
                    textArea.textContent = textArea.textContent.replace(/....$/, '') + '';
                    break;
                case 'Win': 
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '';
                    break;
                case 'Alt': 
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '';
                    break;
                case 'Enter':
                    textArea.textContent = textArea.textContent.replace(/.....$/, '') + '\n';
                    break;
                case 'CapsLock':
                    if (!(lowKeyboard.classList.contains('active'))) {
                        lowKeyboard.classList.add('active');
                        upKeyboard.classList.add('active');
                        textArea.textContent = textArea.textContent.replace(/........$/, '');
                    } else {
                        lowKeyboard.classList.remove('active');
                        upKeyboard.classList.remove('active');
                        textArea.textContent = textArea.textContent.replace(/........$/, '');
                    }
                    break;
            }
        })
    })
}

function clickShift() {
    specialKeys.forEach((e) => {
        e.addEventListener('mousedown', () => {
            if (e.textContent === 'Shift') {
                lowKeyboard.classList.add('active');
                upKeyboard.classList.add('active');
                textArea.textContent = textArea.textContent.replace(/.....$/, '');
            }
        })

        e.addEventListener('mouseup', () => {
            if (e.textContent === 'Shift') {
                lowKeyboard.classList.remove('active');
                upKeyboard.classList.remove('active');
                textArea.textContent = textArea.textContent.replace(/.....$/, '');
            }
        })
    })
}

clickShift();
getSpecialKey();

const spaceKey = document.querySelector('.key-space');
const upKey = document.querySelector('.arrow-up');
const downKey = document.querySelector('.arrow-down');
const leftKey = document.querySelector('.arrow-left');
const rightKey = document.querySelector('.arrow-right');

function pressOnKey() {
    document.addEventListener('keydown', function(e) {
        specialKeys.forEach(elem => {
            if (e.key.toUpperCase() === elem.textContent.toUpperCase()) {
                elem.classList.add('active');
            }

            if (e.code === 'Space') {
                spaceKey.classList.add('active');
            }

            if (e.code.toUpperCase() === 'ArrowUp'.toUpperCase()) {
                upKey.classList.add('active');
            }

            if (e.code.toUpperCase() === 'ArrowDown'.toUpperCase()) {
                downKey.classList.add('active');
            }

            if (e.code.toUpperCase() === 'ArrowLeft'.toUpperCase()) {
                leftKey.classList.add('active');
            }

            if (e.code.toUpperCase() === 'ArrowRight'.toUpperCase()) {
                rightKey.classList.add('active');
            }
        })
    });
    
    document.addEventListener('keyup', function(e) {
        console.log(e.code)
        specialKeys.forEach(elem => {
            if (e.key === 'Shift') {
                lowKeyboard.classList.remove('active');
                upKeyboard.classList.remove('active');
                textArea.textContent = textArea.textContent.replace(/........$/, '');
            }

            if (e.key.toUpperCase() === elem.textContent.toUpperCase()) {
                elem.classList.remove('active');
            }

            if (e.code === 'Space') {
                spaceKey.classList.remove('active');
            }

            if (e.code.toUpperCase() === 'ArrowUp'.toUpperCase()) {
                upKey.classList.remove('active');
            }

            if (e.code.toUpperCase() === 'ArrowDown'.toUpperCase()) {
                downKey.classList.remove('active');
            }

            if (e.code.toUpperCase() === 'ArrowLeft'.toUpperCase()) {
                leftKey.classList.remove('active');
            }

            if (e.code.toUpperCase() === 'ArrowRight'.toUpperCase()) {
                rightKey.classList.remove('active');
            }
        })
    })
}

pressOnKey();

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'CapsLock' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Meta' || e.key === 'Alt' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        textArea.textContent += '';
    } else {
        textArea.textContent += e.key;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'CapsLock') {
        if (!(lowKeyboard.classList.contains('active'))) {
            lowKeyboard.classList.add('active');
            upKeyboard.classList.add('active');
            textArea.textContent = textArea.textContent.replace(/........$/, '');
        } else {
            lowKeyboard.classList.remove('active');
            upKeyboard.classList.remove('active');
            textArea.textContent = textArea.textContent.replace(/........$/, '');
        }
    }

    if (e.key === 'Shift') {
        lowKeyboard.classList.add('active');
        upKeyboard.classList.add('active');
        textArea.textContent = textArea.textContent.replace(/........$/, '');
    }

    if (e.key === 'Backspace') {
        textArea.textContent = textArea.textContent.replace(/.$/, '');
    }
                    
    if (e.key === '') {
        textArea.textContent += ' ';
    }
                    
    if (e.key === 'Tab') {
        textArea.textContent = textArea.textContent + '    ';
    }

    if (e.key === 'Enter') {
        textArea.textContent = textArea.textContent + '\n';
    }
})

function runOnKeys(func, ...list) {
    let pressKey = new Set();

    document.addEventListener('keydown', e => {
        pressKey.add(e.code);
      
        for (let code of list) {
            if (!pressKey.has(code)) {
                return;
            }
        }

        pressKey.clear();

        func();
    });

    document.addEventListener('keyup', function(e) {
        pressKey.delete(e.code);
    });

}

function getRussianKeyboard() {
    
}

runOnKeys(
    () => getRussianKeyboard(),
    "ShiftLeft",
    "AltLeft"
);

