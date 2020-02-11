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
   console.log(this.dinoList);
  //
  // for (var i =0; i < Park.dinoList.length; i++){
  // // // //   //do something
  //   if (Park.dinoList[i].guestsAttractedPerDay > Park.dinoList[i - 1].guestsAttractedPerDay){
  //     console.log(`(Park.dinoList[i].guestsAttractedPerDay ${Park.dinoList[i].guestsAttractedPerDay} > Park.dinoList[i - 1].guestsAttractedPerDay ${Park.dinoList[i - 1].guestsAttractedPerDay})`)
  //   } else {
  //     console.log(`!(Park.dinoList[i].guestsAttractedPerDay ${Park.dinoList[i].guestsAttractedPerDay} > Park.dinoList[i - 1].guestsAttractedPerDay ${Park.dinoList[i - 1].guestsAttractedPerDay})`)
  //   }
  // // for (let i; in this.dinoList){
  // //   if din
  // }


  // for (const paintCan of this.paintStock) {
  //   if (paintCan.litresOfPaint >= areaToBePainted) {
  //     paintCan.decreasePaint(areaToBePainted);
  //     areaToBePainted = 0;
  //     return;
  //   } else {
  //     areaToBePainted -= paintCan.litresOfPaint;
  //     paintCan.empty();
  //   }
  // }
}

Park.prototype.countSpecies = function(species){
  let speciesCount = 0;
  console.log(this.dinoList.length)
   for (let i = 0; i<this.dinoList.length; i++){
     console.log(this.dinoList[i].Dinosaur);
     // if (this.dinoList[i].species ===species){
    //   speciesCount ++;
    // }
   }
  console.log(`species name searched for: ${species} Species count: ${speciesCount}`);
}

module.exports = Park;
