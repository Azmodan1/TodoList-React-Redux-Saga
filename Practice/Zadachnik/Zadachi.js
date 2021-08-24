1. Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

assert.strictEqual(getCount("abracadabra"), 5)


2.Description:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})

 Решение:
function printerError(s) {
    
    const count = 0;
    for( i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

3. 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

 Решение:
 const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map(() => n--);
};

4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
Выведите на экран только те числа из массива,
которые начинаются на цифру 1, 2 или 5.

Решение: 
let result = [];
let chrs = ['1', '2', '3'];
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  chrs.includes(arr[i].toString()[0]) ? result.push(arr[i]) : undefined;
}
console.log(result);
 
или

let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);
  if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
    console.log(+num);
  }
}


5. Дан массив с числами. Выведите элементы этого массива в обратном порядке.

Решение:
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

6. 
С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33

Решение: 
let result = '';
let result2 = '';
let result3 = '';

for (let i = 11; i <= 13; i++) {
  for (let j = 0; j <= 0; j++) {
    const index = j + 10;
    const x = j + 20;

    result += i;
    result2 += i + index;
    result3 += i + x;

    result += ' ';
    result2 += ' ';
    result3 += ' ';
  }
}

console.log(result, result2, result3);

7. let arr = ['a', 'b', 'c', 'a', 'a', 'b', ];
let count = {};

for (let elem of arr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}

console.log(count); // выведет {a: 3, b: 2, c: 1}

8. СРОЧНО РЕШИТЬ! Жопа сгорела!
Реализуйте функцию alternate, которая первым параметром будет принимать массив, а вторым и третьим - коллбэки.

Функция должна по очереди применять коллбэки к элементам массива. То есть: для первого элемента - первый коллбэк, для второго элемента - второй коллбэк, для третьего - опять первый коллбэк и так далее пока элементы массива не закончатся.

9.  РАЗОБРАТЬСЯ ОКОНЧАТЕЛЬНО!
let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function func(arr) {
  let result = [];
  let temp = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) temp.push(elem);
  }

  if (temp.length) {
    for (let elem of temp) {
      result.push(...func(elem));
    }
  } else result.push(arr);

  return result;
}
console.log(func(arr));
