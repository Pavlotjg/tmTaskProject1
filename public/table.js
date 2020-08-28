export function table(users) {
  const newTable = document.createElement('table');
  for (let i = 0; i < users.length; i++) {
    let elem = document.createElement('tr');
    elem.innerHTML = row(users[i]);
    newTable.append(elem);
  }
  return newTable;
}

function row(user) {
  return `
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
  `;
}
