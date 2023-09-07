import { LayoutType } from '../utils.js'
import { AbstractComponent } from './abstract-component.js'

export class GridSelectorComponent extends AbstractComponent {
  constructor(service) {
    super()
    this.service = service
  }

  _getTemplate() {
    return `
      <form class="grid-select">
        <h2 class="grid-select__header">Select site grid</h2>

        <input class="grid-select__radio visually-hidden" id="grid-landing" name="grid" type="radio" value="${LayoutType.LANDING}">
        <label for="grid-landing" class="grid-select__btn">
          <span class="grid-select__text">Landing</span>
          <svg class="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="26.3" width="239.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
          </svg>
        </label>

        <input class="grid-select__radio visually-hidden" id="grid-blog" name="grid" type="radio" value="${LayoutType.BLOG}">
        <label for="grid-blog" class="grid-select__btn">
          <span class="grid-select__text">Blog</span>
          <svg class="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="26.394" width="89.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="100.3" y="26.3" width="139.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
          </svg>
        </label>

        <input class="grid-select__radio visually-hidden" id="grid-shop" name="grid" type="radio" value="${LayoutType.SHOP}">
        <label for="grid-shop" class="grid-select__btn">
          <span class="grid-select__text">Shop</span>
          <svg class="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="0.3" y="26.3" width="73.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="83.3" y="26.3" width="73.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
            <rect x="166.3" y="26.3" width="73.4" height="79.4" stroke-width="0.6" stroke-dasharray="5 5"/>
          </svg>
        </label>
      </form>`
  }

  _afterCreateElement() {
    this.getElement()
      .addEventListener('change', this._gridTypeChangedHandler.bind(this))
    
    this.getElement()
      .querySelector(`#grid-${this.service.getLayoutType()}`)
      .toggleAttribute('checked', true)
  }

  _gridTypeChangedHandler(evt) {
    this.service.setLayoutType(evt.target.value)
  }
}
