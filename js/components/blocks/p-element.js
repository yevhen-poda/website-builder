import { AbstractElementComponent } from '../abstract-element-component.js'

export class PElement extends AbstractElementComponent {
  _getTemplate() {
    const { content } = this._data

    return `<div class="element text" tabindex="0">
              <p class="content-element" contenteditable="true" data-placeholder="${content}">${content}</p>
              <button class="delete-btn" type="button">
                <span class="visually-hidden">Delete item</span>
              </button>
            </div>`
  }
}
