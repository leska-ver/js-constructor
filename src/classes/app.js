// 1:51:17
import {Site} from './site'
import {Sidebar} from './sidebar'

export class App {
  constructor(model) {
    this.model = model
  }

  init() {
    //Пришли с index.js 1:51:44
    const site = new Site('#site')

    site.render(this.model)

    const updateCallback = newBlock => {
      this.model.push(newBlock)
      site.render(this.model)
    }

    new Sidebar('#panel', updateCallback)
  }
}