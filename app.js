const users = document.getElementById('result');
const filter = document.getElementById('filter');
const listElements = [];

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const data = await res.json();
  const results = data.results;

  users.innerHTML = '';
  results.forEach(user => {
    const liElement = document.createElement('li');

    liElement.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    listElements.push(liElement);
    users.appendChild(liElement);
  });
  console.log(listElements);
}

getData();

filter.addEventListener('input', e => filterData(e.target.value));

const filterData = searchTerm => {
  listElements.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};