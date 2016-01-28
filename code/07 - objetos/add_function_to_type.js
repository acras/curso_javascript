if (!Number.prototype.trunc) {
  Number.prototype.trunc =
    function trunc() {
      return Math[
        this >= 0 ?
          'floor' : 'ceil'
      ](this);
    }
}

a=-123
console.log(a.trunc());
