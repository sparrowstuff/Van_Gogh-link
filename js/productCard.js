export class ProductCard {
	constructor(data) {
		this.data = data
	}

	getElement() {
		const cardEl = document.createElement('article')
		cardEl.className = 'product-card'

		// card wrapper
		const cardWrapperEl = document.createElement('div')
		cardWrapperEl.className = 'product-card__wrapper'

		// text wrapper
		const cardTextWrapperEl = document.createElement('div')
		cardTextWrapperEl.className = 'product-card__text-wrapper'

		// picture element
		const pictureEl = document.createElement('picture')
		pictureEl.innerHTML = `source srcset="${this.data.imageSrcWebP}" type="image/webp">`

		// image
		const imgEl = document.createElement('img')
		imgEl.setAttribute('width', '220')
		imgEl.setAttribute('height', '220')
		imgEl.src = this.data.imageSrc
		imgEl.alt = this.data.title
		imgEl.srcset = this.data.imgSrc2x + ' 2x'
		imgEl.className = 'product-card__img'

		// title
		const titleEl = document.createElement('h2')
		titleEl.textContent = this.data.title
		titleEl.className = 'product-card__title'

		// stock info
		const stockEl = document.createElement('p')
		stockEl.className = 'product-card__stock-info'
		const spanEl = document.createElement('span')
		spanEl.className = 'product-card__stock-info-text'
		spanEl.textContent = this.data.stock

		// check icon element
		const checkIconWrapper = document.createElement('span')
		checkIconWrapper.className = 'product-card__check-icon-wrapper'

		const svgCheckIcon = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg'
		)
		svgCheckIcon.classList.add('product-card__check-icon')
		svgCheckIcon.setAttribute('width', '8')
		svgCheckIcon.setAttribute('height', '6')
		svgCheckIcon.setAttribute('aria-hidden', 'true')
		svgCheckIcon.setAttribute('viewBox', '0 0 8 6')

		const useElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'use'
		)
		useElement.setAttributeNS(
			'http://www.w3.org/1999/xlink',
			'href',
			'images/sprite.svg#checkMark'
		)
		svgCheckIcon.appendChild(useElement)

		checkIconWrapper.appendChild(svgCheckIcon)
		stockEl.append(checkIconWrapper, spanEl)

		// button
		const buttonEl = document.createElement('button')
		buttonEl.textContent = 'Подробнее'
		buttonEl.classList.add('product-card__btn')
		buttonEl.classList.add('btn')

		// append elements
		cardTextWrapperEl.append(titleEl, stockEl, buttonEl)
		cardWrapperEl.append(imgEl, cardTextWrapperEl)
		cardEl.append(cardWrapperEl)

		return cardEl
	}
}
