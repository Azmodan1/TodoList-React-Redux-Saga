let textarea = document.getElementById('txar');
let transArea = document.getElementById('trans');
let p = document.getElementById('abs');

let ru = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ь: '',
  ы: 'y',
  ъ: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  ' ': ' ',
};

textarea.addEventListener('input', () => {
  let str = '';
  let text = textarea.value;
  for (let i = 0; i < text.length; i++) {
    let k = text[i];
    if (ru[k] != undefined) {
      str += ru[k];
    } else if (ru[k.toLowerCase()]) {
      let s = ru[k.toLowerCase()];
      str += s.toUpperCase();
    }
  }
  trans.innerHTML = str;
});

trans.addEventListener('input', () => {
  let str = '';
  let text = trans.value;
  let obj = {};
  for (const key in ru) {
    obj[ru[key]] = key;
  }
  for (let i = 0; i < text.length; i++) {
    let k = text[i];
    if (obj[k] != undefined) {
      str += obj[k];
    }
  }
  textarea.innerHTML = str;
});
