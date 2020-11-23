const { showElementTag, setBackground } = require('../index');

test('Properly Change Content', () => {
   let h = document.createElement('h1');
   h.innerHTML = 'Something H1';
   h.style.backgroundColor = 'tomato';
   h.style.width = 'fit-content'; //filled h1 element

   let h1 = document.createElement('h1'); 
   h1.innerHTML = 'Something'; //Empty h1 element with content: Something
   expect(showElementTag(h1)).toEqual(h);
});

test('Properly Change Content', () => {
   let elem = document.createElement('body');
   elem.style.backgroundColor = 'cyan';
   elem.style.backgroundImage = 'linear-gradient(to bottom, white 25%, cyan)';
   elem.style.backgroundRepeat = 'no-repeat';

   let parElem = document.createElement('body'); //Empty body element without styles
   expect(setBackground(parElem)).toEqual(elem);
});