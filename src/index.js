/*перенесли в файл model.js 37:55
const model = [
  {type: 'title', value: 'Hello World from JS!!!!'},
  {type: 'text', value: 'here we go with some text'},
  {type: 'columns', value: ['111111111', '222222222', '333333333']},
  {type: 'image', value: './assets/image.png'} //27:50 
]*/
import {model} from './model'
//import {templates} from './templates'39:23 изменили 45:07 удалил 1:24:10
// import { Site } from './classes/site' 1:28:53 Удалил 1:52:22
// import { Sidebar } from './classes/sidebar' 1:31:50 Удалил 1:52:22
import {App} from './classes/app' // 1:52:27
import './styles/main.css'//40:15 

/* Перенёс в app.js 1:51:44
//const $site = document.querySelector('#site') 1:28:53 Изменил
const site = new Site('#site')

// 1:29:57 site.js
site.render(model)

//console.log('MODEL:', model)  ← добавьте эту строку ИИ

// 45:40 Удалили 47:30
// const key = 'title'
// console.log(templates[key])

/* Удалил 1:29:57 site.js
model.forEach(block => {
  //console.log('PROCESSING BLOCK:', block)  ← и эту ИИ
  // let html = '' Удалили 47:24

  // Удалили 45:15
  // if (block.type === 'title') {
  //   html = title(block)
  // } else if (block.type === 'text') {
  //   html = text(block)
  // } else if (block.type === 'columns') {
  //   html = columns(block)
  // } else if (block.type === 'image') {
  //   html = image(block)
  // }

  //46:46
  // const toHTML = templates[block.type] 1:24:18 Удалил
  // if (toHTML) {1:24:18 изменил. 1:25:33 Удалил.
  
  //$site.insertAdjacentHTML('beforeend', toHTML(block)) изменили 47:15 и 47:52 и 1:25:33
  $site.insertAdjacentHTML('beforeend', block.toHTML())
})*/

// 1:31:50 const sidebar = new Sidebar('#panel')
/*/ 1:44:20 колбек
new Sidebar('#panel', () newBlock => {
  model.push(newBlock)
  site.render(model)
})*/

/*// 1:45:05 улучшил колбек
const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback) // 1:45:05 улучшил колбек*/

// 1:52:27
new App(model).init()