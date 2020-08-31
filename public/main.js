import {table} from './table.js';
import {downloadCSV} from './csvDownloader.js';
import {fetchUsers} from "./api.js";

window.exportAsCSV = downloadCSV;
window._getElement = function (selector) {
  return new GetElement(selector);
};

renderUsers().then(() => {
    const guestName = prompt('Greetings!! Tell us Your Name ...');
    const greetings = new Greeting(guestName);
    const htmlElem = document.querySelector('header');
    htmlElem.innerText = greetings.message;
  }
);

function renderComponent(container, content) {
  container.innerHTML = '';
  container.append(content);
}

function renderUsers() {
  return fetchUsers().then(
    result => {
      const root = document.getElementById('root');
      renderComponent(root, table(result));
    }
  ).catch(() => {
    console.error('Failed fetching of users');
    const error = document.getElementById('error-container');
    renderComponent(error, 'Server Error');
  })
}

class SelectorHelper {
  show() {
    this.context.classList.remove("hide");
  }

  hide() {
    this.context.classList.add("hide");
  }
}

class GetElement extends SelectorHelper {
  constructor(selector) {
    super();
    this.context = document.querySelector(selector);
  }
}

function Greeting(name) {
  const greetingSuffix = 'Welcome to the MetalWiki Guide';
  this.message = name ? `${name}, ${greetingSuffix}`: greetingSuffix;
}
