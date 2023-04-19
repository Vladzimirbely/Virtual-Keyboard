const upperKeyboard = '<div class="keyboard upper"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>Tab</button> <button class="q">Q</button> <button class="w">W</button> <button class="e">E</button> <button class="r">R</button> <button class="t">T</button> <button class="y">Y</button> <button class="u">U</button> <button class="i">I</button> <button class="o">O</button> <button class="p">P</button> <button class="pp">[</button> <button class="oo">]</button> <button>&#92;</button> </div> <div class="keyboard-line"> <button>CapsLock</button> <button class="a">A</button> <button class="s">S</button> <button class="d">D</button> <button class="f">F</button> <button class="g">G</button> <button class="h">H</button> <button class="j">J</button> <button class="k">K</button> <button class="l">L</button> <button class="kk">;</button> <button class="ll">'` + '</button> <button>Enter</button> </div> <div class="keyboard-line"> <button class="shift">Shift</button> <button class="z">Z</button> <button class="x">X</button> <button class="c">C</button> <button class="v">V</button> <button class="b">B</button> <button class="n">N</button> <button class="m">M</button> <button class="mm">,</button> <button class="nn">.</button> <button class="mmm">/</button> <button class="arrow-up">&#11165;</button> <button class="shift">Shift</button> </div> <div class="keyboard-line"> <button>Control</button> <button class="win">Win</button> <button>Alt</button> <button class="key-space"></button> <button>Alt</button> <button class="arrow-left">&#11164;</button> <button class="arrow-down">&#11167;</button> <button class="arrow-right">&#11166;</button> <button>Control</button> </div> </div>'
const lowerKeyboard = '<div class="container"> <div class="header">Virtual Keyboard</div> <pre class="textarea"></pre> <div class="keyboard lower"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>Tab</button> <button class="q">q</button> <button class="w">w</button> <button class="e">e</button> <button class="r">r</button> <button class="t">t</button> <button class="y">y</button> <button class="u">u</button> <button class="i">i</button> <button class="o">o</button> <button class="p">p</button> <button class="pp">[</button> <button class="oo">]</button> <button>&#92;</button> </div> <div class="keyboard-line"> <button>CapsLock</button> <button class="a">a</button> <button class="s">s</button> <button class="d">d</button> <button class="f">f</button> <button class="g">g</button> <button class="h">h</button> <button class="j">j</button> <button class="k">k</button> <button class="l">l</button> <button class="kk">;</button> <button class="ll">'</button> <button>Enter</button> </div> <div class="keyboard-line"> <button class="shift">Shift</button> <button class="z">z</button> <button class="x">x</button> <button class="c">c</button> <button class="v">v</button> <button class="b">b</button> <button class="n">n</button> <button class="m">m</button> <button class="mm">,</button> <button class="nn">.</button> <button class="mmm">/</button> <button class="arrow-up">&#11165;</button> <button class="shift">Shift</button> </div> <div class="keyboard-line"> <button>Control</button> <button class="win">Win</button> <button>Alt</button> <button class="key-space"></button> <button>Alt</button> <button class="arrow-left">&#11164;</button> <button class="arrow-down">&#11167;</button> <button class="arrow-right">&#11166;</button> <button>Control</button> </div> </div>` + upperKeyboard + '<div class="info">Keyboard created in Windows system</div><div class="info">For switch language: left ctrl + alt</div></div>';
document.body.innerHTML = lowerKeyboard;

const keyQ = document.querySelector('.q');
const keyW = document.querySelector('.w');
const keyE = document.querySelector('.e');
const keyR = document.querySelector('.r');
const keyT = document.querySelector('.t');
const keyY = document.querySelector('.y');
const keyU = document.querySelector('.u');
const keyI = document.querySelector('.i');
const keyO = document.querySelector('.o');
const keyP = document.querySelector('.p');
const keyPP = document.querySelector('.pp');
const keyOO = document.querySelector('.oo');
const keyA = document.querySelector('.a');
const keyS = document.querySelector('.s');
const keyD = document.querySelector('.d');
const keyF = document.querySelector('.f');
const keyG = document.querySelector('.g');
const keyH = document.querySelector('.h');
const keyJ = document.querySelector('.j');
const keyK = document.querySelector('.k');
const keyL = document.querySelector('.l');
const keyLL = document.querySelector('.kk');
const keyKK = document.querySelector('.ll');
const keyZ = document.querySelector('.z');
const keyX = document.querySelector('.x');
const keyC = document.querySelector('.c');
const keyV = document.querySelector('.v');
const keyB = document.querySelector('.b');
const keyN = document.querySelector('.n');
const keyM = document.querySelector('.m');
const keyMM = document.querySelector('.mm');
const keyNN = document.querySelector('.nn');
const keyMMM = document.querySelector('.mmm');

const arr = [keyQ, keyW, keyE, keyR, keyT, keyY, keyU, keyI, keyO, keyP, keyPP, keyOO, keyA, keyS, keyD, keyF, keyG, keyH, keyJ, keyK, keyL, keyLL, keyKK, keyZ, keyX, keyC, keyV, keyB, keyN, keyM, keyMM, keyNN, keyMMM];
const rusLetter = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const enLetter = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

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
                    textArea.textContent = textArea.textContent.replace(/backspace/, '').replace(/.$/, '');
                    break;
                case '': 
                    textArea.textContent += ' ';
                    break;
                case 'Tab':
                    textArea.textContent = textArea.textContent.replace(/Tab$/, '') + '   ';
                    break;
                case 'Control': 
                    textArea.textContent = textArea.textContent.replace(/Control$/, '') + '';
                    break;
                case 'Win': 
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '';
                    break;
                case 'Alt': 
                    textArea.textContent = textArea.textContent.replace(/Alt$/, '') + '';
                    break;
                case 'Enter':
                    textArea.textContent = textArea.textContent.replace(/Enter$/, '') + '\n';
                    break;
                case 'CapsLock':
                    if (!(lowKeyboard.classList.contains('active'))) {
                        lowKeyboard.classList.add('active');
                        upKeyboard.classList.add('active');
                        textArea.textContent = textArea.textContent.replace(/CapsLock$/, '');
                    } else {
                        lowKeyboard.classList.remove('active');
                        upKeyboard.classList.remove('active');
                        textArea.textContent = textArea.textContent.replace(/CapsLock$/, '');
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
                textArea.textContent = textArea.textContent.replace(/Shift$/, '');
            }
        })

        e.addEventListener('mouseup', () => {
            if (e.textContent === 'Shift') {
                lowKeyboard.classList.remove('active');
                upKeyboard.classList.remove('active');
                textArea.textContent = textArea.textContent.replace(/Shift$/, '');
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
        specialKeys.forEach(elem => {
            if (e.key === 'Shift') {
                lowKeyboard.classList.remove('active');
                upKeyboard.classList.remove('active');
                textArea.textContent = textArea.textContent.replace(/Shift$/, '');
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
    if (e.key === 'Tab' || e.key === 'CapsLock' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Meta' || e.key === 'Alt' || e.key === 'Backspace' || e.key === 'Enter') {
        textArea.textContent += '';
    } else if (e.key === 'ArrowUp') {
        textArea.textContent += '⮝';
    } else if (e.key === 'ArrowLeft') {
        textArea.textContent += '⮜';
    } else if (e.key === 'ArrowRight') {
        textArea.textContent += '⮞';
    } else if (e.key === 'ArrowDown') {
        textArea.textContent += '⮟';
    } else {
        textArea.textContent += e.key;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'CapsLock') {
        if (!(lowKeyboard.classList.contains('active'))) {
            lowKeyboard.classList.add('active');
            upKeyboard.classList.add('active');
            textArea.textContent = textArea.textContent.replace(/CapsLock$/, '');
        } else {
            lowKeyboard.classList.remove('active');
            upKeyboard.classList.remove('active');
            textArea.textContent = textArea.textContent.replace(/CapsLock$/, '');
        }
    }

    if (e.key === 'Shift') {
        lowKeyboard.classList.add('active');
        upKeyboard.classList.add('active');
        textArea.textContent = textArea.textContent.replace(/Shift$/, '');
    }

    if (e.key === 'Backspace') {
        textArea.textContent = textArea.textContent.replace(/backspace/, '').replace(/.$/, '')
    }
                    
    if (e.key === '') {
        textArea.textContent += ' ';
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
    for (let i = 0; i < 33; i++) {
        if (keyMMM.textContent === '/') {
            arr[i].textContent = rusLetter[i];
            keyboard.classList.remove('en');
            keyboard.classList.add('rus');
        } else {
            arr[i].textContent = enLetter[i];
            keyboard.classList.remove('rus');
            keyboard.classList.add('en');
        }
    }
}

runOnKeys(
    () => getRussianKeyboard(),
    "ShiftLeft",
    "AltLeft"
);

const upper = document.querySelector('.upper');

document.addEventListener('keydown', e => {
    if (e.key === 'CapsLock') {
        for (let i = 0; i < 33; i++) {
            if (keyNN.textContent === 'ю') {   
                keyboard.classList.remove('active');
                upper.classList.remove('active');
                arr[i].textContent = rusLetter[i].toUpperCase();
            } else if (keyNN.textContent === 'Ю') {
                keyboard.classList.remove('active');
                upper.classList.remove('active');
                arr[i].textContent = rusLetter[i];
            }
        } 
    }

    if (e.key === 'Shift' && keyNN.textContent === 'ю') {
        for (let i = 0; i < 33; i++) {
            keyboard.classList.remove('active');
            upper.classList.remove('active');
            arr[i].textContent = rusLetter[i].toUpperCase();
        } 
    }

    if (e.key === 'Shift' && keyNN.textContent === 'Ю') {
        for (let i = 0; i < 33; i++) {
            keyboard.classList.remove('active');
            upper.classList.remove('active');
            arr[i].textContent = rusLetter[i].toUpperCase();
        } 
    }

    if (e.key === 'Tab') {
        textArea.textContent = textArea.textContent.replace(/Tab$/, '') + '   ';
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift' && keyNN.textContent === 'Ю') {
        for (let i = 0; i < 33; i++) {
            arr[i].textContent = rusLetter[i];
        } 
    }
})

function clickShiftRu() {
    specialKeys.forEach((e) => {
        e.addEventListener('mousedown', () => {
            if (e.textContent === 'Shift' && keyNN.textContent === 'ю') {
                for (let i = 0; i < 33; i++) {
                    keyboard.classList.remove('active');
                    upper.classList.remove('active');
                    arr[i].textContent = rusLetter[i].toUpperCase();
                }
            }
        })

        e.addEventListener('mouseup', () => {
            if (e.textContent === 'Shift' && keyNN.textContent === 'Ю') {
                for (let i = 0; i < 33; i++) {
                    arr[i].textContent = rusLetter[i];
                } 
            }
        })
    })
}

clickShiftRu();

function clickSpecialKeysRU() {
    specialKeys.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.textContent === 'CapsLock') {
                for (let i = 0; i < 33; i++) {
                    if (keyNN.textContent === 'ю') {   
                        keyboard.classList.remove('active');
                        upper.classList.remove('active');
                        arr[i].textContent = rusLetter[i].toUpperCase();
                    } else if (keyNN.textContent === 'Ю') {
                        keyboard.classList.remove('active');
                        upper.classList.remove('active');
                        arr[i].textContent = rusLetter[i];
                    }
                } 
            }

            if (e.textContent === 'Control') {
                if (keyNN.textContent === 'ю' || keyNN.textContent === 'Ю') {   
                    textArea.textContent = textArea.textContent.replace(/Control/, '');
                }
            }

            if (e.textContent === 'Shift') {
                if (keyNN.textContent === 'ю' || keyNN.textContent === 'Ю') {   
                    textArea.textContent = textArea.textContent.replace(/Shift/, '');
                }
            }
        })
    })
}

clickSpecialKeysRU();
