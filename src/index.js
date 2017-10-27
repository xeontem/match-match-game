import Menu from './components/menu/menu.component';
import Wrapper from './components/wrapper/wrapper.component';
import Card from './components/card/card.component';
import config from './config';
import h from './helpers';
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
//----------------------- create and append the main board ----------------------
const start = h.find('.menu > button');
start.addEventListener('click', e => {
  let onPageWrapper = h.find('section.wrapper');
  const rows = h.newArr(config.rows).map(x => new Wrapper());
  rows.map(row => {
    if(onPageWrapper) while(onPageWrapper) {
      h.find('body').removeChild(onPageWrapper);
      onPageWrapper = h.find('section.wrapper')
    }
    h.newArr(config.cards).map(x => new Card()).map(card => {
      row.append(card.elem);
    });
    row.makeFragment().appendToBody();
  });
});
//-------------------------------------------------------------------------------