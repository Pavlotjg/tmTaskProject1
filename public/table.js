let map;

 /**
  * inner scope: {
  *   newTable: HTMLDivElement;
  *   users: Array;
  * }
  * outer scope: {
  *   map: google.maps.LatLng;
  * }
  * global scope: {
  *   show: Function;
  *   document: Object;
  * }
 */
export function table(users) {
  const newTable = document.createElement('div');
  newTable.classList.add('main-container');
  users.forEach( user => {
    newTable.append(row(user));
  });
  return newTable;
}

 /**
  * inner scope: {
  *   avatar,firstName,lastName,email: String;
  *   user,coordinate: Object;
  *   lat,lng: Number;
  *   elem: HTMLDivElement;
  *   detailsBtn: HTMLButtonElement;
  * }
  * outer scope: {
  *   map: google.maps.LatLng;
  * }
  * global scope: {
  *   show: Function;
  *   document: Object;
  * }
 */
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
  detailsBtn.onclick = showDetails;
  detailsBtn.innerHTML = "Details";
  elem.append(detailsBtn);
  return elem;

  /**
   * inner scope: {
   *   modalContent: HTMLDivElement
   * }
   * outer scope: {
   *   avatar,firstName,lastName,email: String;
   *   user,coordinate: Object;
   *   lat,lng: Number;
   *   elem: HTMLDivElement;
   *   detailsBtn: HTMLButtonElement;
   *   map: google.maps.LatLng;
   * }
   * global scope: {
   *   show: Function;
   *   document: Object;
   * }
   */
  function showDetails() {
    _getElement('#modal').show();
    let modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<img src="${avatar}"alt="avatar">${firstName} ${lastName} ${email}`;
    if(map) {
      map.setCenter(new google.maps.LatLng(lat, lng));
    } else {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 12
      });
    }
  }
}
