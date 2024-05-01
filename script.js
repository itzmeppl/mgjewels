const catalogData = [
	{ name: 'Small lightweight Polki Diamond', price: '$55', category: 'necklace sets', imageUrl: './pics/n1-1.png' },
	{ name: 'Double Layer Brass Polki Set', price: '$80', category: 'necklace sets', imageUrl: './pics/n2-2.png' },
	{ name: 'Small Dainty Pendant Set (Chain Available)', price: '$25', category: 'pendant sets', imageUrl: './pics/p1-1.png' },
	{ name: 'Pink Pendant Set (Chain Available)', price: '$25', category: 'pendant sets', imageUrl: './pics/p2.png' },
	{ name: 'Golden Pearl Pendant Set (Chain Available)', price: '$35', category: 'pendant sets', imageUrl: './pics/p3.png' },
	{ name: 'White Premium Oval Pendant Set (Chain Available)', price: '$30', category: 'pendant sets', imageUrl: './pics/p4-1.png' },
	{ name: 'AD Pendant Set (Chain Available)', price: '$25', category: 'pendant sets', imageUrl: './pics/p5.png' },
	{ name: 'AD Golden Pearl Pendant Set (Chain Available)', price: '$35', category: 'pendant sets', imageUrl: './pics/p6.png' },
	{ name: 'AD CZ Droplet Pendant Set (Chain Available)', price: '$35', category: 'pendant sets', imageUrl: './pics/p7-1.png' },
	{ name: 'AD CZ Droplet Pendant Set (Chain Available)', price: '$35', category: 'pendant sets', imageUrl: './pics/p7-2.png' },
	{ name: 'AD Dangaling Pendant Set (Chain Available)', price: '$30', category: 'pendant sets', imageUrl: './pics/p8-1.png' },
	{ name: 'Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p9.png' },
	{ name: 'Necklace with Earrings', price: '$30', category: 'pendant sets', imageUrl: './pics/p10.png' },
	{ name: 'Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p12.png' },
	{ name: 'Necklace with Earrings', price: '$30', category: 'pendant sets', imageUrl: './pics/p13-1.png' },
	{ name: 'Necklace with Earrings', price: '$30', category: 'pendant sets', imageUrl: './pics/p14.png' },
	{ name: 'Necklace with Earrings', price: '$25', category: 'pendant sets', imageUrl: './pics/p15.png' },
	{ name: 'Necklace with Earrings', price: '$35', category: 'pendant sets', imageUrl: './pics/p16.png' },
	{ name: 'Necklace with Earrings', price: '$35', category: 'pendant sets', imageUrl: './pics/p17.png' },
	{ name: 'Green Necklace with Earrings', price: '$30', category: 'pendant sets', imageUrl: './pics/p18-1.png' },
	{ name: 'Yellow Necklace with Earrings', price: '$40', category: 'pendant sets', imageUrl: './pics/p19-1.png' },
	{ name: 'Pink Necklace with Earrings', price: '$40', category: 'pendant sets', imageUrl: './pics/p19-2.png' },
	{ name: 'Gold Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p20.jpg' },
	{ name: 'Red and Blue Necklace with Earrings', price: '$45 ea.', category: 'pendant sets', imageUrl: './pics/p21.jpg' },
	{ name: 'Beautiful earrings', price: '$30', category: 'earrings', imageUrl: './pics/e1.png' },
	{ name: 'Beautiful earrings', price: '$15', category: 'earrings', imageUrl: './pics/e2.png' },
	{ name: 'Beautiful earrings', price: '$15', category: 'earrings', imageUrl: './pics/e3.png' },
	{ name: 'Beautiful earrings', price: '$35', category: 'earrings', imageUrl: './pics/e4-1.png' },
	{ name: 'Beautiful earrings', price: '$45 each', category: 'earrings', imageUrl: './pics/e5.jpg' },
	{ name: 'Beautiful earrings', price: '$45', category: 'earrings', imageUrl: './pics/e5-1.png' },
	{ name: 'Beautiful Bracelet', price: '$50', category: 'bracelet', imageUrl: './pics/b1.png' },
	{ name: 'Flower Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r1.jpg' },
	{ name: 'Adjustable Rings', price: '$15 each', category: 'ring', imageUrl: './pics/r2.jpg' },
	{ name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r3.jpg' },
	{ name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r4.jpg' },
	{ name: 'Blue and Pink Adjustable Rings', price: '$15 each', category: 'ring', imageUrl: './pics/r5.jpg' }
];

document.addEventListener('DOMContentLoaded', () => {
		// JavaScript to toggle the menu
		const menuButton = document.getElementById('menu-btn');
		const infoMenu = document.getElementById('info-menu');

		menuButton.addEventListener('click', () => {
				infoMenu.classList.toggle('show-menu');
		});
});
