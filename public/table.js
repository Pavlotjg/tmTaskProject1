export function table(users) {
  const newTable = document.createElement('table');
  users.forEach( user => {
    let elem = document.createElement('tr');
    elem.innerHTML = row(user);
    newTable.append(elem);
  });
  return newTable;
}

function row(user) {
  return `
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
  `;
}
