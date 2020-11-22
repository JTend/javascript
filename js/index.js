const indy = {
   setBackground : function setBackground(body) {
      body.style.backgroundColor = 'cyan';
      body.style.backgroundImage = 'linear-gradient(to bottom, white 25%, cyan)';
      body.style.backgroundRepeat = 'no-repeat';
      return body;
   },
   showElementTag : function showElementTag(elem) {
      elem.innerHTML += ' ' + elem.tagName;
      elem.style.backgroundColor = 'tomato';
      elem.style.width = 'fit-content';
      return elem;
   }
}

module.exports = indy; //jest