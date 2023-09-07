import { AbstractComponent } from './abstract-component.js'

export class AbstractBlockComponent extends AbstractComponent {
  constructor(service) {
    super()

    this.service = service

    this._blockName = 'abstract'
    this._elements = []
  }
}
