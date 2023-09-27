import { AbstractComponent } from './abstract-component.js'
import { ElementType } from '../utils.js'

export class ChooseElementComponent extends AbstractComponent {
  constructor(addElementCallback) {
    super()
    
    this._addElementCallback = addElementCallback
    this._chooseElemBtnClickHandler = this._chooseElemBtnClickHandler.bind(this)
  }

  _getTemplate() {
    return `<div class="choose-elem hidden-block">
              <button class="choose-elem__btn" type="button" data-element="h1">Heading H1</button>
              <button class="choose-elem__btn" type="button" data-element="h2">Heading H2</button>
              <button class="choose-elem__btn" type="button" data-element="h3">Heading H3</button>
              <button class="choose-elem__btn" type="button" data-element="p">Text paragraph</button>
              <button class="choose-elem__btn" type="button" data-element="img">Image</button>
            </div>`
  }

  toggleVisibility(force) {
    this.getElement().classList.toggle('hidden-block', force)
  }

  _afterCreateElement() {
    this.getElement()
      .querySelectorAll('button.choose-elem__btn')
      .forEach((el) => el.addEventListener('click', this._chooseElemBtnClickHandler))
  }

  _chooseElemBtnClickHandler(e) {
    const newElementType = e.target.dataset.element
    const newElementText = newElementType === ElementType.IMG ? '' : e.target.innerText

    this._addElementCallback(newElementType, newElementText)
  }
}
