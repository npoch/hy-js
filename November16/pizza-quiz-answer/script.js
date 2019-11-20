// Pizza Data Object
const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

// Random Result Function
const randomResult = arr => {
	const randomNumber = Math.floor(Math.random() * arr.length);
	return arr[randomNumber];
};

// Application Init Function
function pizzaProphetInit() {
	const form = document.querySelector('form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const userSizeSelection = document.querySelector('input[name=size]:checked').value;
		const userPriceSelection = document.querySelector('input[name=price]:checked').value;

		const sizeOptions = pizza[userSizeSelection];
		const filteredOptions = sizeOptions.filter(restaurant => restaurant.price === userPriceSelection);


		const theOne = randomResult(filteredOptions);
		const resultHTML = `<h2>You should go to <span class="restaurant">${theOne.title}</span></h2>`;

		document.querySelector('.results').innerHTML = resultHTML;
	});
};

// A Vanilla JavaScript Document Ready
if (document.readyState === "complete") {
	pizzaProphetInit();
} else {
	document.addEventListener("DOMContentLoaded", pizzaProphetInit);
}
