import Element from '../element/element.component';
import { h } from '../../helpers';
import './card.style.scss';

export default class Card extends Element{
  constructor() {
    super('figure');
    this.elem.classList.add('card');
    this.elem.randClass = h.randClass();
    // this.elem.addEventListener('click', e => {
    //   this.elem.classList.add('rotate');
    //   setTimeout(e => this.elem.classList.toggle('image'), 300);
    //   setTimeout(e => this.elem.classList.remove('rotate'), 1000);
    // });
  }
}