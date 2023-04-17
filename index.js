document.body.innerHTML = '<div class="container"> <textarea class="textarea"></textarea> <div class="keyboard"> <div class="keyboard-line"> <button>`' + `</button> <button>1</button> <button>2</button> <button>3</button> <button>4</button> <button>5</button> <button>6</button> <button>7</button> <button>8</button> <button>9</button> <button>0</button> <button>-</button> <button>=</button> <button>backspace</button> </div> <div class="keyboard-line"> <button>tab</button> <button>q</button> <button>w</button> <button>e</button> <button>r</button> <button>t</button> <button>y</button> <button>u</button> <button>i</button> <button>o</button> <button>p</button> <button>[</button> <button>]</button> <button>&#92;</button> <button>del</button> </div> <div class="keyboard-line"> <button>capslock</button> <button>a</button> <button>s</button> <button>d</button> <button>f</button> <button>g</button> <button>h</button> <button>j</button> <button>k</button> <button>l</button> <button>;</button> <button>'</button> <button>enter</button> </div> <div class="keyboard-line"> <button>shift</button> <button>z</button> <button>x</button> <button>c</button> <button>v</button> <button>b</button> <button>n</button> <button>m</button> <button>,</button> <button>.</button> <button>/</button> <button>&#11165;</button> <button>shift</button> </div> <div class="keyboard-line"> <button>ctrl</button> <button>win</button> <button>alt</button> <button class="key-space"></button> <button>alt</button> <button>&#11164;</button> <button>&#11167;</button> <button>&#11166;</button> <button>ctrl</button> </div> </div> </div>`;

let key = document.querySelectorAll('.keyboard-line button');
let textArea = document.querySelector('.textarea');
let clear = document.querySelector('.clear');

function clickKey() {
    for (let i of key) {
        i.addEventListener('click', () => {
            textArea.innerHTML += i.innerHTML;
        })
    }
} 

clickKey();

function getSpecialKey() {
    let specialKeys = document.querySelectorAll('.keyboard-line button');

    specialKeys.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.textContent === 'backspace') {
                textArea.innerHTML = textArea.textContent.replace(/..........$/, '');
            }
        })
    })
}

getSpecialKey();
