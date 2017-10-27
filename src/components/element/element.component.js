import './element.style.scss';

export default class Element {
  constructor(elem) {
    this.elem = document.createElement(elem);
    Element.fragment = document.createDocumentFragment();// temp
    Element.fragmented = false;
  }

  append(elem) {
    this.elem.appendChild(elem);
    return this;
  }

  makeFragment() {
    Element.fragmented = true;
    Element.fragment.appendChild(this.elem);
    return this;
  }
  appendToBody() {
    if(Element.fragmented) document.body.appendChild(Element.fragment);
    else throw new Error('You need create fragment before appending to DOM.');
  }

  clear() {
    while(this.elem.children.length) this.elem.removeChild();
  }
}