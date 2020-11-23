const myMath = {
   multiply : function multiply(a, b) {
      if((a == 0 && b == Infinity) || (b == 0 && a == Infinity))
         return undefined;
      else return a * b;
   },
   power : function power(a, b) {
      if(a == 0 && b == 0) return undefined;
      else if (a == Infinity && b == 0) return undefined;
      else if (a == 1 && b == Infinity) return undefined;
      return a ** b;
   },
   divide : function divide(a, b) {
      if(a == 0 && b == 0) 
         return undefined;
      else if (a == Infinity && b == Infinity)
         return undefined;
      else return a / b;
   },
   accounting : function accounting(number) {
      if(number == null) return;
      if(number < 0) return `(${Math.abs(number)})`;
      else return number.toString();
   }
}

module.exports = myMath; //jest
