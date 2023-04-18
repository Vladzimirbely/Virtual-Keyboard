const upperKeyboard = '<div class="keyboard upper"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>tab</button> <button>Q</button> <button>W</button> <button>E</button> <button>R</button> <button>T</button> <button>Y</button> <button>U</button> <button>I</button> <button>O</button> <button>P</button> <button>[</button> <button>]</button> <button>&#92;</button> <button>del</button> </div> <div class="keyboard-line"> <button>capslock</button> <button>A</button> <button>S</button> <button>D</button> <button>F</button> <button>G</button> <button>H</button> <button>J</button> <button>K</button> <button>L</button> <button>;</button> <button>'` + '</button> <button>enter</button> </div> <div class="keyboard-line"> <button class="shift">shift</button> <button>Z</button> <button>X</button> <button>C</button> <button>V</button> <button>B</button> <button>N</button> <button>M</button> <button>,</button> <button>.</button> <button>/</button> <button>&#11165;</button> <button class="shift">shift</button> </div> <div class="keyboard-line"> <button>ctrl</button> <button>win</button> <button>alt</button> <button class="key-space"></button> <button>alt</button> <button>&#11164;</button> <button>&#11167;</button> <button>&#11166;</button> <button>ctrl</button> </div> </div>'
const lowerKeyboard = '<div class="container"> <textarea class="textarea"></textarea> <div class="keyboard lower"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>tab</button> <button>q</button> <button>w</button> <button>e</button> <button>r</button> <button>t</button> <button>y</button> <button>u</button> <button>i</button> <button>o</button> <button>p</button> <button>[</button> <button>]</button> <button>&#92;</button> <button>del</button> </div> <div class="keyboard-line"> <button>capslock</button> <button>a</button> <button>s</button> <button>d</button> <button>f</button> <button>g</button> <button>h</button> <button>j</button> <button>k</button> <button>l</button> <button>;</button> <button>'</button> <button>enter</button> </div> <div class="keyboard-line"> <button>shift</button> <button>z</button> <button>x</button> <button>c</button> <button>v</button> <button>b</button> <button>n</button> <button>m</button> <button>,</button> <button>.</button> <button>/</button> <button>&#11165;</button> <button>shift</button> </div> <div class="keyboard-line"> <button>ctrl</button> <button>win</button> <button>alt</button> <button class="key-space"></button> <button>alt</button> <button>&#11164;</button> <button>&#11167;</button> <button>&#11166;</button> <button>ctrl</button> </div> </div>` + upperKeyboard + '</div>';
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

function getSpecialKey() {
    let specialKeys = document.querySelectorAll('.keyboard-line button');

    specialKeys.forEach((e) => {
        e.addEventListener('click', () => {
            switch (e.textContent) {
                case 'backspace':
                    textArea.textContent = textArea.textContent.replace(/..........$/, '');
                    break;
                case '': 
                    textArea.textContent += ' ';
                    break;
                case 'tab':
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '    ';
                    break;
                case 'ctrl': 
                    textArea.textContent = textArea.textContent.replace(/....$/, '') + '';
                    break;
                case 'win': 
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '';
                    break;
                case 'alt': 
                    textArea.textContent = textArea.textContent.replace(/...$/, '') + '';
                    break;
                case 'enter':
                    textArea.textContent = textArea.textContent.replace(/.....$/, '') + '\n';
                case 'capslock':
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

getSpecialKey();

window.addEventListener('keydown', (e) => {
    textArea.textContent += e.key;
});
