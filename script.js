const catalogData = [
	{ name: 'Beautiful Gold Necklace with Earrings', category: 'necklace sets', imageUrl: './pics/n1.png' },
	{ name: 'Necklace with Earrings', category: 'necklace sets', imageUrl: './pics/n2.jpg' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p1.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p2.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p3.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p4.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p5.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p6.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p7.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p8.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p9.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p10.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p11.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p12.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p13.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p14.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p15.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p16.png' },
	{ name: 'Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p17.png' },
	{ name: 'Green Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p18.jpg' },
	{ name: 'Pink and Yellow Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p19.jpg' },
	{ name: 'Gold Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p20.jpg' },
	{ name: 'Red and Blue Necklace with Earrings', category: 'pendant sets', imageUrl: './pics/p21.jpg' },
	{ name: 'Beautiful earrings', category: 'earrings', imageUrl: './pics/e1.png' },
	{ name: 'Beautiful earrings', category: 'earrings', imageUrl: './pics/e2.png' },
	{ name: 'Beautiful earrings', category: 'earrings', imageUrl: './pics/e3.png' },
	{ name: 'Beautiful earrings', category: 'earrings', imageUrl: './pics/e4.png' },
	{ name: 'Beautiful earrings', category: 'earrings', imageUrl: './pics/e5.jpg' },
	{ name: 'Beautiful Bracelet', category: 'bracelet', imageUrl: './pics/b1.png' },
	{ name: 'Flower ring', category: 'ring', imageUrl: './pics/r1.jpg' },
	{ name: 'Rings', category: 'ring', imageUrl: './pics/r2.jpg' },
	{ name: 'Ring', category: 'ring', imageUrl: './pics/r3.jpg' },
	{ name: 'Rings', category: 'ring', imageUrl: './pics/r4.jpg' },
	{ name: 'Blue and Pink rings', category: 'ring', imageUrl: './pics/r5.jpg' }

];

document.addEventListener('DOMContentLoaded', () => {
	// JavaScript to toggle the menu
	const menuButton = document.getElementById('menu-btn');
	const infoMenu = document.getElementById('info-menu');
	
	menuButton.addEventListener('click', () => {
			infoMenu.classList.toggle('show-menu');
	});
});
