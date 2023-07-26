function getUserName(name) {
  const user = document.querySelector('#user-list');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    const json = xhr.response;
    for (let i = 0; i < json.length; i++) {
      const li = document.createElement('li');
      li.textContent = name;
      user.append = li;
    }
  });
  xhr.send();
}
getUserName();
