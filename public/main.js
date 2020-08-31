import {table} from './table.js';
import {formatedUsers} from './smth.js';


// csv start

//TODO: improve code style
function downloadCSV() {
  let usersJson = fetchUsers();
  usersJson.then(result => {
    const rows = formatedUsers(result);
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray) {
      let row = rowArray.join(",");
      csvContent += row + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  });
}
 window.ff = downloadCSV;

// scv end



function renderComponent(container, content) {
  // TODO: get rid of innerHTML
  container.innerHTML = '';
  container.append(content);
}

function fetchUsers() {
 return fetch('http://localhost:3100/users').then(
   res => res.json()
 )
}

function renderUsers() {
  //TODO: implement pagination
  fetchUsers().then(
    result => {
      const root = document.getElementById('root');
      renderComponent(root, table(result));
    }
  )
}

renderUsers();

function show(elem) {
  elem.classList.remove("hide");
}

function hide(elem) {
  elem.classList.add("hide");
}
window.show = show;
window.hide = hide;
