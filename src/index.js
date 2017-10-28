import Menu from './components/menu/menu.component';
import Wrapper from './components/wrapper/wrapper.component';
import Card from './components/card/card.component';
import config from './config';
import { h } from './helpers';
import './scss/main.scss';

const selector = h.find('select');
selector.addEventListener('change', e => {
  config.cards = +e.target.value;
  console.log(config);
});
//----------------------- create menus and buttons ------------------------------
// const menu = new Menu();
// menu
//   .append(complexity)
//   .append(rules)
//   .append(rules)
//   .makeFragment()
//   .appendToBody();
//----------------------- add event to rotate cards -----------------------------
h.on(h.find('body'), 'click', e => {
  if(e.target.classList.contains('card')) {
    e.target.classList.add('rotate');
    setTimeout(x => e.target.classList.toggle(e.target.randClass), 400);
    setTimeout(x => e.target.classList.remove('rotate'), 1000);
  }
});

// h.on(h.find('body'), 'click', function(e) {
//   console.log(this);
//   console.log('------------------------------------');
//   e.path.map(el => console.log(el.tagName));
//   alert(this.tagName);
// }, false);
// h.on(h.find('body p'), 'click', function(e) { e.stopPropagation(); alert(this.tagName)}, false);
//----------------------- create and append the main board ----------------------
const start = h.find('.menu > button');
start.addEventListener('click', e => (h.remove('body', 'section.wrapper'),
  h.newArr(config.rows).map(x => new Wrapper())
    .map(row => (h.newArr(config.cards).map(x => new Card())
      .map(card => row.append(card.append(h.create('p', '#')).elem)), row.makeFragment().appendToBody()))));
//-------------------------------------------------------------------------------