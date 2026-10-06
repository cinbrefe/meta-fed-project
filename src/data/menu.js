import greekSalad from '../assets/images/dishes/greek-salad.jpg';
import bruschetta from '../assets/images/dishes/bruschetta.jpg';
import lemonDessert from '../assets/images/dishes/lemon-dessert.jpg';

export const menuItems = [
	{
		id: 'greek-salad',
		title: 'Greek Salad',
		price: '$12.99',
		description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.',
		image: greekSalad,
	},
	{
		id: 'bruschetta',
		title: 'Bruschetta',
		price: '$5.99',
		description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
		image: bruschetta,
	},
	{
		id: 'lemon-dessert',
		title: 'Lemon Dessert',
		price: '$5.00',
		description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		image: lemonDessert,
	},
];
