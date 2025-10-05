import { ProductCard } from './productCard.js'

// burger-menu open/close
function burgerMenuOpen() {
	const burgerBtn = document.getElementById('burgerBtn')
	const mainNav = document.querySelector('.main-nav--mobile')
	const headerEL = document.querySelector('.header')

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('burger-btn--active')
		mainNav.classList.toggle('main-nav--active')
		headerEL.classList.toggle('header--opened')
	})
}

// productsArray

const productsArray = [
	{
		id: 1,
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		imgSrc: './images/product-card/card-1.png',
		imgSrc2x: './images/product-card/card-1@2x.png',
		stock: 'В наличии 50 м.',
	},
	{
		id: 2,
		title: 'Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)',
		imgSrc: './images/product-card/card-2.png',
		imgSrc2x: './images/product-card/card-2@2x.png',
		stock: 'Под заказ',
	},
	{
		id: 3,
		title: 'Стальной канат для лифта GRS 8X19S-NFC 1570',
		imgSrc: './images/product-card/card-3.png',
		imgSrc2x: './images/product-card/card-3@2x.png',
		stock: 'В наличии 50 м.',
	},
	{
		id: 4,
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		imgSrc: './images/product-card/card-4.png',
		imgSrc2x: './images/product-card/card-4@2x.png',
		stock: 'В наличии 50 м.',
	},
	{
		id: 5,
		title: 'Стальной канат для лифта GRS 8X19W-CWC 1570',
		imgSrc: './images/product-card/card-5.png',
		imgSrc2x: './images/product-card/card-5@2x.png',
		stock: 'В наличии 50 м.',
	},
	{
		id: 6,
		title: 'Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)',
		imgSrc: './images/product-card/card-6.png',
		imgSrc2x: './images/product-card/card-6@2x.png',
		stock: 'В наличии 50 м.',
	},
]

// render products
function renderProducts() {
	const productsContainer = document.getElementById('productsList')
	productsArray.forEach(item => {
		const liEl = document.createElement('li')
		liEl.className = 'hero__products-item'
		const card = new ProductCard(item)
		liEl.appendChild(card.getElement())
		productsContainer.appendChild(liEl)
	})
}

function blockScrollAppearance() {
	const blocksArray = [
		document.querySelector('.hero'),
		document.querySelector('.advantages'),
	]

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = '1'
					entry.target.style.transform = 'translateY(-1.25rem)'
					entry.target.style.transition = '0.3s ease-in'

					observer.unobserve(entry.target)
				}
			})
		},
		{ threshold: 0.2 }
	)

	blocksArray.forEach(block => {
		observer.observe(block)
	})
}

export { burgerMenuOpen, renderProducts, blockScrollAppearance }
