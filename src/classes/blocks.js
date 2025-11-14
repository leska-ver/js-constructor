// 1:22:15
import {col, css, row} from '../utils'
// 1:12:32
// export class Block { 
class Block { //1:19:17 Стал локальным
  // constructor(type, value, options) { 1:18:28 Удалил type, 1:26:52
  constructor(value, options) {  
    // this.type = type Удалил 1:26:52
    this.value = value
    this.options = options
  }

  // 1:21:10
  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

// 1:17:36
export class TitleBlock extends Block {
  constructor(value, options) {
    // super('title', value, options) Удалил 1:26:52 'title',
    super(value, options)
  }
  // 1:21:10 Избавляемся от файла templates.js
  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

// 1:17:36
export class ImageBlock extends Block {
  constructor(value, options) {
    // super('image', value, options) Удалил 1:26:52 'image',
    super(value, options)
  }
  // 1:21:10 Избавляемся от файла templates.js
  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}

// 1:17:36
export class ColumnsBlock extends Block {
  constructor(value, options) {
    // super('columns', value, options) Удалил 1:26:52 'columns',
    super(value, options)
  }
  // 1:21:10 Избавляемся от файла templates.js
  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

// 1:17:36
export class TextBlock extends Block {
  constructor(value, options) {
    // super('text', value, options) Удалил 1:26:52 'text',
    super(value, options)
  }
  // 1:21:10 Избавляемся от файла templates.js
  toHTML() {
    // const {tag = 'h1', styles} = this.options
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}