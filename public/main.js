import {table} from './table.js';

function appRender(container, content) {
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
      appRender(root, table(result));
    }
  )
}

renderUsers();
