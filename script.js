const catalogData = [
	{ id:'comb2', name: 'Blue Pendant Combo Set', price: '$55', category: 'combo', imageUrl: './pics/comb2.png', sold: false },
	{ id:'comb1', name: 'Pink Pendant Combo Set', price: '$55', category: 'combo', imageUrl: './pics/comb1.png', sold: false },
	{ id:'n7', name: 'AD Brass Necklace with Cute Earrings', price: '$65', category: 'necklace sets', imageUrl: './pics/n7.jpg', sold: false },
	{ id:'n6', name: 'Emerald Green AD set with earrings', price: '$65', category: 'necklace sets', imageUrl: './pics/n6.jpg', sold: false },
	{ id:'n5', name: 'Pink AD Necklace Set', price: '$60', category: 'necklace sets', imageUrl: './pics/n5.png', sold: false },
	{ id:'n4', name: 'Korean Style Sleek Rose Gold Set', price: '$28', category: 'necklace sets', imageUrl: './pics/n4.png', sold: true },
	{ id:'n3', name: 'AD CZ Sleek Necklace Set', price: '$48', category: 'necklace sets', imageUrl: './pics/n3.png', sold: false },
	{ id:'n1-1', name: 'Brass Polki Set with full Pearl settings', price: '$55', category: 'necklace sets', imageUrl: './pics/n1-1.png', sold: false },
	{ id:'n2-2', name: 'Multicolour Double Layer Brass Polki Set', price: '$80', category: 'necklace sets', imageUrl: './pics/n2-2.png', sold: false },
	{ id:'p25', name: 'Navratan Pendant Set (Full AD dub-let stones)', price: '$50', category: 'pendant sets', imageUrl: './pics/p25.jpg', sold: false },
	{ id:'p24', name: 'Navratan Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p24.jpg', sold: false },
	{ id:'p29', name: 'AD Green Stone Swan Pendant', price: '$30', category: 'pendant sets', imageUrl: './pics/p29.PNG', sold: false },
	{ id:'p28', name: 'AD Swan Pendant', price: '$30', category: 'pendant sets', imageUrl: './pics/p28-1.PNG', sold: false },
	{ id:'p26', name: 'Full AD Deep Pink Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p26.jpg', sold: false },
	{ id:'p27', name: 'Full AD Blue Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p27.jpg', sold: false },
	{ id:'p23', name: 'Navratan Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p23.png', sold: false },
	{ id:'p22', name: 'Pink Kundan Pendant with Pearl & Meenakari Back', price: '$20', category: 'pendant sets', imageUrl: './pics/p22.png', sold: false },
	{ id:'p21-1', name: 'AD Blue Pendant Set - Premium Quality', price: '$45', category: 'pendant sets', imageUrl: './pics/p21-1.png', sold: false },
	{ id:'p21-2', name: 'AD Red Pendant Set - Premium Quality', price: '$45', category: 'pendant sets', imageUrl: './pics/p21-2.png', sold: false },
	{ id:'p21-3', name: 'Green Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p21-3.png', sold: false },
	{ id:'p1-1', name: 'Diamond-shaped Clear Pendant Set', price: '$25', category: 'pendant sets', imageUrl: './pics/p1-1.png', sold: false },
	{ id:'p2-1', name: 'Pink Pendant Set (Chain Available)', price: '$25', category: 'pendant sets', imageUrl: './pics/p2-1.png', sold: true },
	{ id:'p3-1', name: 'Golden Base with Nano settings & Center Pearl', price: '$35', category: 'pendant sets', imageUrl: './pics/p3-1.png', sold: false },
	{ id:'p4-1', name: 'Oval AD Clear Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p4-1.png', sold: false },
	{ id:'p13-1', name: 'Oval AD Pink Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p13-1.png', sold: false },
	{ id:'p14-1', name: 'Oval AD Blue Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p14-1.png', sold: false },
	{ id:'p18-1', name: 'Oval AD Green Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p18-1.png', sold: false },
	{ id:'p5-1', name: 'AD Pendant Set (Chain Available)', price: '$25', category: 'pendant sets', imageUrl: './pics/p5-1.png', sold: false },
	{ id:'p6-1', name: 'AD Golden Pearl Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p6-1.png', sold: false },
	{ id:'p7-1', name: 'Droplet AD Clear Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p7-1.png', sold: false },
	{ id:'p7-2', name: 'Droplet AD Pink Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p7-2.png', sold: false },
	{ id:'p16-1', name: 'Droplet AD Blue Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p16-1.png', sold: false },
	{ id:'p9-1', name: 'Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p9-1.png', sold: false },
	{ id:'p8-1', name: 'AD Dangling Pendant Set', price: '$30', category: 'pendant sets', imageUrl: './pics/p8-1.png', sold: false },
//	{ id:'p20', name: 'Necklace with Earrings', price: '$45', category: 'pendant sets', imageUrl: './pics/p20.jpg', sold: false },
	{ id:'p10-1', name: 'Necklace with Earrings', price: '$30', category: 'pendant sets', imageUrl: './pics/p10-1.png', sold: false },
	{ id:'p12-1', name: 'AD Big Size Pendant Set', price: '$45', category: 'pendant sets', imageUrl: './pics/p12-1.png', sold: false },
	{ id:'p15-1', name: 'Dangling AD Pendant Set', price: '$25', category: 'pendant sets', imageUrl: './pics/p15-1.png', sold: false },
	//{ id:'p17', name: 'Necklace with Earrings', price: '$35', category: 'pendant sets', imageUrl: './pics/p17.png', sold: false },
	{ id:'p19-1', name: 'Yellow Pearl Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p19-1.png', sold: true },
	{ id:'p19-2', name: 'Pink Pearl Pendant Set', price: '$40', category: 'pendant sets', imageUrl: './pics/p19-2.png', sold: false },
	{ id:'e11', name: 'Bollywood Style Pink Kundan Drops', price: '$25', category: 'earrings', imageUrl: './pics/e11.png', sold: false },
	{ id:'e10', name: 'Bollywood Style Green Kundan Drops', price: '$25', category: 'earrings', imageUrl: './pics/e10.png', sold: false },
	{ id:'e17', name: 'AD Swan Earrings', price: '$25', category: 'earrings', imageUrl: './pics/e17.png', sold: false },
	{ id:'e16', name: 'Gold Plated Hoop Danglers', price: '$12', category: 'earrings', imageUrl: './pics/e16.png', sold: false },
	{ id:'e15', name: 'Gold Plated AD Bali Earrings', price: '$15', category: 'earrings', imageUrl: './pics/e15.png', sold: false },
	{ id:'e14', name: 'Deep Pink Droplet Earrings', price: '$35', category: 'earrings', imageUrl: './pics/e14.png', sold: false },
	{ id:'e13', name: 'Green Droplet Earrings', price: '$35', category: 'earrings', imageUrl: './pics/e13.png', sold: false },
	{ id:'e9', name: 'Blue Droplet Earrings', price: '$35', category: 'earrings', imageUrl: './pics/e9.png', sold: false },
	{ id:'e12', name: 'Pink Big Light Weight Studs', price: '$35', category: 'earrings', imageUrl: './pics/e12.png', sold: false },
	{ id:'e8', name: 'Black Big Light Weight Studs', price: '$35', category: 'earrings', imageUrl: './pics/e8.png', sold: false },
	{ id:'e7', name: 'AD CZ Light Weight Jhumki', price: '$45', category: 'earrings', imageUrl: './pics/e7.png', sold: true },
	{ id:'e6', name: 'Gold Base Studs with AD setting', price: '$15', category: 'earrings', imageUrl: './pics/e6.png', sold: true },
	{ id:'e5-3', name: 'Clear Long Droplet with AD Setting', price: '$45', category: 'earrings', imageUrl: './pics/e5-3.png', sold: false },
	{ id:'e5-2', name: 'Blush Pink Long Droplet with AD Setting', price: '$45', category: 'earrings', imageUrl: './pics/e5-2.png', sold: true },
	{ id:'e5-1', name: 'Teal Long Droplet with AD Setting', price: '$45', category: 'earrings', imageUrl: './pics/e5-1.png', sold: true },
	{ id:'e4-1', name: 'Long Droplets with AD Setting', price: '$35', category: 'earrings', imageUrl: './pics/e4-1.png', sold: false },
	{ id:'e2-1', name: 'Green and Red Beautiful earrings', price: '$15 ea.', category: 'earrings', imageUrl: './pics/e2-1.png', sold: true },
	{ id:'e1-1', name: 'Clear Long Droplet with Full AD Setting', price: '$30', category: 'earrings', imageUrl: './pics/e1-1.png', sold: false },
	{ id:'b1', name: 'Beautiful Bracelet', price: '$30', category: 'bracelet', imageUrl: './pics/b1.png', sold: false },
	//{ id:'r1', name: 'Flower Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r1.jpg', sold: false },
	{ id:'r2-1', name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r2-1.png', sold: false },
	//{ id:'r2-2', name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r2-2.png', sold: false },
	//{ id:'r2-3', name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r2-3.png', sold: false },
	//{ id:'r3', name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r3.jpg', sold: false },
	//{ id:'r4', name: 'Adjustable Ring', price: '$15', category: 'ring', imageUrl: './pics/r4.jpg', sold: false },
	{ id:'r5-1', name: 'Blue and Pink Adjustable Rings', price: '$15 ea.', category: 'ring', imageUrl: './pics/r5-1.png', sold: false }
];


//display Jewlery care
function jewelryCare() {
	const container = document.getElementById('catalog-container');
	container.innerHTML = '';
	const catalogItem = document.createElement('div');
	catalogItem.innerHTML = `
			<h1 class="neuton-bold">Jewelry Care</h1>
			<ul class="neuton-regular">
				<li>Store your jewelry dry and clean.</li>
				<li>Use a soft dry cloth to clean your jewelry.</li>
				<li>Keep away from skincare, water, perfume and hairspray.</li>
				<li>Please ensure the piece is to your liking before purchasing it as we offer <b>no returns and no refunds</b>.</li>
			</ul>
			<h3 class="neuton-regular">Jewelry life depends on your extensive care :) </h3>
			`;
	container.appendChild(catalogItem);
}

//display shipping care
function shippingInfo() {
	const container = document.getElementById('catalog-container');
	container.innerHTML = '';
	const catalogItem = document.createElement('div');
	catalogItem.innerHTML = `
			<h1 class="neuton-bold">Shipping Info</h1>
			<div class="neuton-regular">
				<p class="neuton-bold">Payment must be made before shipment</p> 
				<p>Pick up available in Brampton and Downtown Toronto free of charge</p>
				<p>Shipping available within Canada with additional charges</p>
				<p>Charges vary from $5 to $10 based on the weight and location</p>
				<p>Must make an opening video of the parcel you recieve to claim any refunds or returns on defective pieces of jewelry</p>
			</div>
			<h3 class="neuton-bold">**Policy: No returns nor refunds**</h3>
			`;
	container.appendChild(catalogItem);
}

function contactInfo() {
	const container = document.getElementById('catalog-container');
	container.innerHTML = '';
	const catalogItem = document.createElement('div');
	catalogItem.innerHTML = `
		<h1 class="neuton-bold">Contact Info</h1>
		<h2 class="neuton-regular"><b>Phone:</b> +1 647-627-6545</h2>
		<h2 class="neuton-regular"><b>Email:</b> mgfashionjewels@gmail.com </h2>
		<h2 class="neuton-regular"><b>Facebook page:</b> <a href="https://www.facebook.com/profile.php?id=61556808190840" target="_blank"> Visit Page</a> </h2>
		<h2 class="neuton-regular"><b>Instagram page:</b> <a href="https://www.instagram.com/mgfashionjewels/" target="_blank"> Visit Page</a> </h2>
		<h2 class="neuton-regular"><b>Headquaters:</b> Brampton, Ontario, Canada</h2>
		<br>
		<h3 class="neuton-regular">
			Feel free to contact us anywhere for queries and to place an order! 
		</h3>
		`;
	container.appendChild(catalogItem);
}
