let body = document.querySelector('body');
let input = document.querySelector('#inp');

let arr = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'q',
  'w',
  'e',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'TAB',
  'Caps',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  ' ',
  'v',
  'b',
  'n',
  'm',
];

for (let i = 0; i < 1; i++) {
  let tr = document.createElement('tr');
  body.appendChild(tr);
}

let tr = document.querySelector('tr');

const registr = () => {
  tr.innerHTML = '';
  for (let i = 0; i < 40; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = arr[i].toUpperCase();
    btn.addEventListener('click', () => {
      if (btn.innerHTML !== 'CAPS') {
        input.value += btn.innerHTML;
      } else mini();
    });
    tr.appendChild(btn);
  }
};
const mini = () => {
  tr.innerHTML = '';
  for (let j = 0; j < 40; j++) {
    let btn = document.createElement('button');
    btn.innerHTML = arr[j];
    btn.addEventListener('click', () => {
      if (btn.innerHTML !== 'Caps') {
        input.value += btn.innerHTML;
      } else registr();
    });
    tr.appendChild(btn);
  }
};
mini();
