window.addEventListener('DOMContentLoaded', (event) => {
	faqs = document.querySelectorAll('.faq');

	faqs.forEach((faq) => {
		faq.addEventListener('click', (event) => {
			event.preventDefault();
			faq.querySelector('.answer').classList.toggle('hidden');
			faq.querySelector('.lucide').classList.toggle('flip');
		});
	});
});
