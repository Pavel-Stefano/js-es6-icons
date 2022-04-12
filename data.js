arrayIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box 
// per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà 
// per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai 
// vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona
//  un tipo dalla select, visualizzare solamente le icone corrispondenti.

const container = document.querySelector('.icons-container');

function stampaIcons(filteredIcons){
	filteredIcons.forEach((icona)=> {
		const box = document.createElement("div");
		box.setAttribute("class", "box");
		box.innerHTML = `
			<i class="${icona.family} ${icona.prefix}${icona.name}" style="color:${icona.color}"></i>
			<div class="title">${icona.name.toUpperCase()}</div>
		`
		// console.log(box);
		container.append(box);
	});
}
stampaIcons(arrayIcone);

const selectValue = document.getElementById('select');
// console.log(selectValue);
selectValue.addEventListener("change", function(){
	container.innerHTML = '';
	const selectValueOption = this.value;
	const filteredIcons = arrayIcone.filter((icona)=> {			//valore di ritorno :true o false
		return icona.type === selectValueOption || selectValueOption === '';  // se vero lo mette nel nuovo array
	});
	const typeArray = (selectValueOption === '') ? arrayIcone : filteredIcons;  
	// se viene scelta l'opzione All equivale alla stringa vuota ci metto l'array originale altrimenti il nuovo array filtrato
	stampaIcons(typeArray);
});







