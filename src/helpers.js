export const h = {
    newArr: length => Array(length).fill(null),
    find: el => document.querySelector(el),
    on: (el, ev, fb, bubble) => el.addEventListener(ev, fb, bubble),
    create: (elem, inner='') => {
      const el = document.createElement(elem);
      el.innerHTML = inner;
      return el;
    },
    remove: function(elem, delElem) {
      const el = h.find(elem);
      let onPageWrapper = h.find(delElem);
      while(onPageWrapper) {
        el.removeChild(onPageWrapper);
        onPageWrapper = h.find(delElem)
      }
      return el;
    },
    randClass: x => h.rand(1, 2)  === 1 ? 'js' : 'haskell',
    rand: (min, max) => Math.round(Math.random() * (max - min) + min)
}