import {table} from './table.js';

function renderComponent(container, content) {
  // TODO: get rid of innerHTML
  container.innerHTML = '';
  container.append(content);
}

function renderUsers() {
  //TODO: implement pagination
  fetch('http://localhost:3100/users').then(
    res => res.json()
  ).then(
    result => {
      const root = document.getElementById('root');
      renderComponent(root, table(result));
    }
  )
}

renderUsers();

function toggle(elem) {
  elem.classList.toggle("hide");
}

window.toggle = toggle;
