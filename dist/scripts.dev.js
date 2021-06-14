"use strict";

//Llamada a base de datos ficticia
var main = document.getElementsByTagName('main');
console.log(main);
var fragmento = document.createDocumentFragment();

for (var index = 0; index < animals.length; index++) {
  var div = document.createElement('DIV');
  div.classList.add('card');
  div.append(document.createElement('DIV'));
  div.firstChild.classList.add('box-image');
  div.firstChild.append(document.createElement('IMG'));
  div.firstChild.firstChild.classList.add('card-image');
  div.firstChild.firstChild.setAttribute('src', "/images/animals/".concat(animals[index].name.replace(/ /g, "-").toLowerCase(), ".jpg"));
  var animal = document.createElement('H2');
  animal.textContent = animals[index].name;
  div.append(animal);
  var type = document.createElement('H3');
  type.textContent = 'Type:';
  div.append(type);
  var typeanimal = document.createElement('P');
  typeanimal.textContent = 'Mammals';
  div.append(typeanimal);
  var weightmale = document.createElement('H3');
  weightmale.textContent = 'Weight male:';
  div.append(weightmale);
  var weightmaleanimal = document.createElement('P');
  weightmaleanimal.textContent = "".concat(animals[index].weight_male_min, " lbs - ").concat(animals[index].weight_male_max, " lbs ");
  div.append(weightmaleanimal);
  var weightfemale = document.createElement('H3');
  weightfemale.textContent = 'Weigh female:';
  div.append(weightfemale);
  var weightfemaleanimal = document.createElement('P');
  weightfemaleanimal.textContent = "".concat(animals[index].weight_female_min, " lbs - ").concat(animals[index].weight_female_max, " lbs ");
  div.append(weightfemaleanimal);
  main[0].append(div);
}