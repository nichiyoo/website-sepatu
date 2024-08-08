window.addEventListener('DOMContentLoaded', function () {
	const params = new URLSearchParams(window.location.search);
	const type = params.get('type');
	if (!type) return;

	const valid = [
		'Lifestyle',
		'Running',
		'Heels',
		'Sandals',
		'Boots',
		'Socks',
		'Women Shoes',
		'Men Shoes',
		'Kids Shoes',
	];

	if (!valid.includes(type)) window.location.href = '/products.html';
	else document.getElementById('title').innerHTML = `${type} Products`;
});
