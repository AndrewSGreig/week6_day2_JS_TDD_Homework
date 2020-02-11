const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('triceratops', 'herbivore', 40);
    dino2 = new Dinosaur('t-rex', 'carnivore', 50);
    dino3 = new Dinosaur('dino', 'herbivore', 60);
    dino4 = new Dinosaur('Brachiosaurus', 'herbivore', 20);
    dino5 = new Dinosaur('t-rex', 'carnivore', 50)
    park = new Park('Jurassic Park', 10, [dino1, dino2 ]);


    dinos = [dino1, dino2, dino3, dino4];
  })

  it('should have a name', function(){
    const actual = park.name;
    const expected = 'Jurassic Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    const expected = 10;
    assert.strictEqual(actual, expected)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoList.length;
    const expected = 2
    assert.strictEqual(actual, expected)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino3)
    const actual = park.dinoList.length;
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino('Brachiosaurus');
    park.removeDino();
    const actual = park.dinoList.length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    // dino.guestsAttractedPerDay

    park.addDino(dino3);
    park.addDino(dino4);

    // console.log(dinos.sort(dinos.guestsAttractedPerDay));
    // dinos.sort(guestsAttractedPerDay);
    // park.dinoList.sort()
    // console.log(park.dinoList.sort());
    // console.log(dinos);
    // console.log(dino1.guestsAttractedPerDay)
    // console.log(dino2.guestsAttractedPerDay)
    // park.sortDinos(dinos);
    // for (dino of dinos){
    //   dino.guestsAttractedPerDay
    //
    // }
    park.sortDinos();

  });


  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino5);
    console.log(park.dinoList);
    const actual = park.countSpecies('t-rex');

  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
