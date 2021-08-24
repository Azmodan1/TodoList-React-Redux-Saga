// const url = 'https://jsonplaceholder.typicode.com/todos/';

// const delay = (ms) => {
//   return new Promise((resolve, reject) => setTimeout(() => resolve(), ms));
// };

// const fetchTodos = () => {
//   console.log('poshel kal');
//   return delay(2500)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// };

// fetchTodos().then((data) => console.log(data));

// const asyncFetchTodso = async () => {
//   console.log('poshel kal');
//   await delay(2000);
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

// asyncFetchTodso();

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('kal'), 1000);
// });

// promise.then((sa) => alert(sa));

function httpGet(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.send();
  });
}

// сделать запрос
httpGet('/article/promise/user.json')
  .then(response => {
    console.log(response);
    let user = JSON.parse(response);
    return user;
  })
  .then(user => {
    console.log(user);
    return httpGet(`https://api.github.com/users/${user.name}`);
  })
  .then(githubUser => {
    console.log(githubUser);
    githubUser = JSON.parse(githubUser);
    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.appendChild(img);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        img.remove();
        // после таймаута — вызов resolve,
        // можно без результата, чтобы управление перешло в следующий then
        // (или можно передать данные пользователя дальше по цепочке)
        resolve();
      }, 3000);
    });
  });
