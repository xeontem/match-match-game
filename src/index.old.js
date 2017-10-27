import cardStyle from './styles/cardStyle';
import './scss/main.scss';

// class Element {
//   constructor(elem) {
//     this.elem = document.createElement(elem);
//   }
//   addStyle(styles) {
//     for(const style in styles) {
//         this.elem.style[style] = styles[style];
//     }
//     return this;
//   }
//   append(parent) {
//     parent.appendChild(this.elem);
//     return this;
//   }
//   addClass(className) {
//     this.elem.classList.add(className);
//     return this;
//   }
//   addEvent(event, fb) {
//     this.elem.addEventListener(event, fb);
//     return this;
//   }
// }
// figure = document.createElement('figure');

let arr = [document.createElement('figure'),document.createElement('figure'),document.createElement('figure'),document.createElement('figure'),document.createElement('figure')];
const section = document.querySelector('#table');

// arr.map(elem => {
//   elem
//     .addStyle(cardStyle)
//     .addClass('wrapper')
//     .addEvent('click', e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue')
//     .append(section);
// });
// const promise = new Promise((resolve, reject) => {
//   resolve(new Element('figure'));
// });

// promise
//   .then(figure => figure.addStyle(cardStyle))
//   .then(figure => figure.addClass('wrapper'))
//   .then(figure => figure.addEvent('click', e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue'))
//   .then(figure => figure.append(section))
//   .catch(err => console.log(err));
const addEventFull = event => fb => elem => { elem.addEventListener(event, fb); return elem};
const addClassFull = className => elem => { elem.classList.add(className); return elem};
const appendFull = parent => elem => { parent.appendChild(elem); return elem};

const addEvent = addEventFull('click')(e => e.target.style.background = e.target.style.background === 'blue' ? 'red' : 'blue');
const addClass = addClassFull('card');
const append = appendFull(section);

const compose = f => g => x => f(g(x));

// arr.map(figure => append(addClass(addEvent(figure))));
// arr.map(figure => compose(compose(append)(addClass))(addEvent)(figure));
arr.map(compose(compose(append)(addClass))(addEvent));
