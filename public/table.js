let map;

export function table(users) {
  const newTable = document.createElement('table');
  users.forEach( user => {
    newTable.append(row(user));
  });
  return newTable;
}

function row(user) {
  let elem = document.createElement('tr');
  elem.innerHTML = `
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
  `;
  let actionTd = document.createElement('td');
  let detailsBtn = document.createElement('button');
  detailsBtn.onclick = function () {
    toggle(document.getElementById('modal'));
    let modalContent = document.getElementById('modal-content');
    modalContent.innerText = user.firstName +' '+ user.lastName;
    if(map) {
      map.setCenter(new google.maps.LatLng(user.coordinate.lat, user.coordinate.lng));
    } else {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: user.coordinate.lat, lng: user.coordinate.lng },
        zoom: 8
      });
    }
  };
  detailsBtn.innerHTML = "Details";
  actionTd.append(detailsBtn);
  elem.append(actionTd);
  return elem;
}
