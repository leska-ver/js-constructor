import {block} from '../utils'// 1:36:32
import {TextBlock, TitleBlock} from './blocks' // 1:41:20

//1:31:11
export class Sidebar {
  // constructor(selector) { Добавил обработку колбек из файла index.js 1:45:15
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback // 1:45:15
    
    // 1:32:32 this.$el.insertAdjacentHTML('afterbegin', '<h1>test</h1>')
    // 1:33:36 Шаблон. Перенёс в 1:34:00 init{}
    // this.$el.insertAdjacentHTML('afterbegin', this.template)
    // 1:34:14
    this.init()
  }

  // 1:34:00 Вспомогательный элемент
  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    //this.$el.addEventListener('submit', this.add) 1:37:12 добавил bind 1:47:00
    //this.$el.addEventListener('submit', (event) => this.add(event))от ИИ 1:37:12
    this.$el.addEventListener('submit', this.add.bind(this)) //1:47:00 добавил bind
  }

  // 1:33:12 Шаблон
  get template() {
    //return '<h1>template</h1>' 1:35:32 Удалиль
    // return block('text') 1:35:53
    return [
      block('text'),
      block('title')
    ].join('')
  }

  // 1:37:12
  add(event) {
    event.preventDefault()
    // console.log(event.target)
    /*Владлена код не работает
    const type = event.target.name // 1:38:35      
    const value = event.target.value.value //1:39:18
    const styles = event.target.styles.value //1:39:18*/

    // ИИ
    const type = event.target.name     
    const value = event.target.value.value
    const stylesString = event.target.styles.value

    // 1:40:00 debugger удалил 1:41:00

    //let newBlock 1:41:20 Улучшаем через const
    
    /*/ 1:43:16 тернарное выражение. Владлена код не работает 
    const newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles})*/

    // Вручную создаём объект стилей как в model.js ИИ
    const styles = {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }

    // Убери лишний объект! ИИ
    const newBlock = type === 'text'
    ? new TextBlock(value, {styles})
    : new TitleBlock(value, {styles})
   
    /*/ 1:41:20 перенёс в const 1:43:40
    if (type === 'text') {
      newBlock = new TextBlock(value, {styles})
    } else {
      newBlock = new TitleBlock(value, {styles})
    }*/
    // console.log(newBlock) Изменил 1:45:40
    this.update(newBlock)

    event.target.value.value = '' // 1:47:40 чистим форму
    event.target.styles.value = '' // 1:47:40 чистим форму
  }
}

// 1:34:36 Структура шаблона. 1:36:16 перенёс в utils.js
/*export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
    `
    }*/
   
   
   
 
   