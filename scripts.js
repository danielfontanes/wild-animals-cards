//Llamada a base de datos ficticia


let main = document.getElementsByTagName('main')
console.log(main);

let fragmento = document.createDocumentFragment()

for (let index = 0; index < animals.length; index++) {

let div = document.createElement('DIV')
div.classList.add('card')
div.append(document.createElement('DIV'))
div.firstChild.classList.add('box-image')
div.firstChild.append(document.createElement('IMG'))
div.firstChild.firstChild.classList.add('card-image')
div.firstChild.firstChild.setAttribute('src',`/images/animals/${animals[index].name.replace(/ /g, "-").toLowerCase()}.jpg`)

let animal = document.createElement('H2')
animal.textContent= animals[index].name
div.append(animal)

let type = document.createElement('H3')
type.textContent='Type:'
div.append(type)

let typeanimal = document.createElement('P')
typeanimal.textContent='Mammals'
div.append(typeanimal)

let weightmale = document.createElement('H3')
weightmale.textContent='Weight male:'
div.append(weightmale)

let weightmaleanimal = document.createElement('P')
weightmaleanimal.textContent=`${animals[index].weight_male_min} lbs - ${animals[index].weight_male_max} lbs `;
div.append(weightmaleanimal)

let weightfemale = document.createElement('H3')
weightfemale.textContent='Weigh female:'
div.append(weightfemale)

let weightfemaleanimal = document.createElement('P')
weightfemaleanimal.textContent=`${animals[index].weight_female_min} lbs - ${animals[index].weight_female_max} lbs `;
div.append(weightfemaleanimal)

main[0].append(div)
}