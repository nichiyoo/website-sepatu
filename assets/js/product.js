window.addEventListener('DOMContentLoaded', function () {
	const id = new URL(window.location.href).searchParams.get('id');
	if (!id) window.location.href = '/';

	const products = [
		{
			id: 1,
			image: 'assets/img/products/nike-vaporfly-3.jpg',
			title: 'Nike Vaporfly 3 Electric',
			excerpt:
				"Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers and the elevated pacers who can't turn down the thrill of the pursuit.",
			price: 3559000,
			category: 'Men Shoes',
			brand: 'Nike',
		},
		{
			id: 2,
			image: 'assets/img/products/nike-infinity-rn-4.jpg',
			title: 'Nike InfinityRN 4 Electric',
			excerpt:
				'Maximum cushioning provides elevated comfort for everyday runs. Experience a soft, rocker-shaped platform made with new ReactX foam underfoot, and an ultra-comfortable collar and tongue for a snug feel.',
			price: 2649000,
			category: 'Men Shoes',
			brand: 'Nike',
		},
		{
			id: 3,
			image: 'assets/img/products/nike-precision-7-easyon-electric.jpg',
			title: 'Nike Precision 7 EasyOn Electric',
			excerpt:
				'Step onto the floor with full confidence and take your best shot in the Nike Precision 7—a game-ready basketball shoe for everyone. Made with Nike EasyOn technology, it has a collapsible heel and large midfoot strap to help you tighten the laces and secure the fit using one hand.',
			price: 1069000,
			category: 'Women Shoes',
			brand: 'Nike',
		},
		{
			id: 4,
			image: 'assets/img/products/nike-v2k-run.jpg',
			title: 'Nike V2K Run',
			excerpt:
				"The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic.",
			price: 1909000,
			category: 'Women Shoes',
			brand: 'Nike',
		},
		{
			id: 5,
			image: 'assets/img/products/nike-zoom-vomero-5.jpg',
			title: 'Nike Zoom Vomero 5',
			excerpt:
				'The Vomero 5 takes early-2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigours of your day, while Zoom Air cushioning delivers a smooth ride. ',
			price: 2669000,
			category: 'Women Shoes',
			brand: 'Nike',
		},
		{
			id: 6,
			image: 'assets/img/products/nike-air-flight-89.jpg',
			title: 'Nike Air Flight 89',
			excerpt:
				'From the playground to the city streets, the Nike Air Flight 89 takes you back to late-80s basketball with a mid-top design, retro details and crisp leather overlays.',
			price: 1249000,
			category: 'Kids Shoes',
			brand: 'Nike',
		},
		{
			id: 7,
			image: 'assets/img/products/nike-court-borough-low-recraft.jpg',
			title: 'Nike Court Borough Low Recraft',
			excerpt:
				'Run (don\'t walk) to your new favourite Borough. Made for the long haul, this "recrafted" legend uses a combination of durable materials on the upper and outsole to achieve a classic look made in a whole new way.',
			price: 799000,
			category: 'Kids Shoes',
			brand: 'Nike',
		},
		{
			id: 8,
			image: 'assets/img/products/nike-dunk-low-se.jpg',
			title: 'Nike Dunk Low SE',
			excerpt:
				"This '80s icon returns with a special design inspired by the ways we move. Reflective design details and waves of bright colours help your moves pop on and off the dance floor while lightweight cushioning and a grippy outsole offer comfort that lasts.",
			price: 1449000,
			category: 'Kids Shoes',
			brand: 'Nike',
		},
		{
			id: 9,
			image: 'assets/img/products/nike-vista.jpg',
			title: 'Nike Vista',
			excerpt:
				"With all the elements you need for a day outdoors, these sandals deliver big—without weighing you down. They're light and airy, with a tough tread and responsive cushioning. And thanks to the adjustable strap, you can personalise the fit when you're on the go.",
			price: 759000,
			category: 'Women Slippers',
			brand: 'Nike',
		},
	];

	if (products.length === 0) window.location.href = '/';

	const product = products.find((product) => product.id === Number(id));
	if (!product) window.location.href = '/';

	document.querySelector('#title').innerHTML = product.title;
	document.querySelector('#excerpt').innerHTML = product.excerpt;
	document.querySelector('#image').src = product.image;
	document.querySelector('#category').innerHTML = product.category;
	document.querySelector('#brand').innerHTML = product.brand;
	document.querySelector('#price').innerHTML = formatCurrency(product.price);
});
