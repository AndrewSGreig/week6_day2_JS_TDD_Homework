const Park = function (name, price, dinoList) {
  this.name = name;
  this.price = price;
  this.dinoList = dinoList;
}

Park.prototype.addDino = function (additionalDino) {
  this.dinoList.push(additionalDino);

};

Park.prototype.removeDino = function(){
  this.dinoList.pop();
}


Park.prototype.sortDinos = function(){
  let comparison = 0

  //     function compare(a, b) {
  //   // Use toUpperCase() to ignore character casing
  //   const bandA = a.band.toUpperCase();
  //   const bandB = b.band.toUpperCase();
  //
  //   let comparison = 0;
  //   if (bandA > bandB) {
  //     comparison = 1;
  //   } else if (bandA < bandB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }
  //
  // singers.sort(compare);

}

module.exports = Park;
