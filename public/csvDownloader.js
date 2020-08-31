import {fetchUsers} from "./api.js";

function formattedUsers(users) {
  return users.map((elem) => Object.values(elem));
}

export function downloadCSV() {
  const usersJson = fetchUsers();
  usersJson.then(result => {
    const titles = Object.keys(result[0]);
    const rows = [titles, ...formattedUsers(result)];
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function (userValues) {
      const formattedUserValues = userValues.map((elem) => {
        if (typeof elem === 'object') {
          return JSON.stringify(elem)
        } else {
          return elem;
        }
      });
      const row = formattedUserValues.join(",");
      csvContent += row + "\r\n";
    });
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  });
}
