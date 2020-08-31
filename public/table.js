let map;

export function table(users) {
  const newTable = document.createElement('div');
  newTable.classList.add('main-container');
  users.forEach( user => {
    newTable.append(row(user));
  });
  return newTable;
}

function row(user) {
  const { avatar = '', firstName = '', lastName = '', email = '', coordinate } = user || {};
  const { lat, lng } = coordinate || {};
  let elem = document.createElement('div');
  elem.classList.add('row-container');
  elem.innerHTML = `
    <span>${user.firstName}</span>
    <span>${user.lastName}</span>
  `;

  let detailsBtn = document.createElement('button');
  detailsBtn.onclick = function () {
    show(document.getElementById('modal'));
    let modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<img src="${avatar}"alt="avatar">${firstName} ${lastName} ${email}`;
    if(map) {
      map.setCenter(new google.maps.LatLng(lat, lng));
    } else {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: user.coordinate.lat, lng: user.coordinate.lng },
        zoom: 12
      });
    }
  };
  detailsBtn.innerHTML = "Details";
  elem.append(detailsBtn);
  return elem;
}
