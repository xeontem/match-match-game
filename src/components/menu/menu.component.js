import Element from '../element/element.component';
import './menu.style.scss';

export default class Menu extends Element {
  constructor() {
    super('section');
    this.elem.classList.add('menu');
  }
}