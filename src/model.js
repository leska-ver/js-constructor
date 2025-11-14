// 52:08
import image from './assets/image.png'
// 1:13:32 import {Block} from './classes/blocks'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks' //1:19:38

// 1:06:50
const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`

export const model = [
  // {type: 'title', value: 'Hello World from JS!!!!'}, 53:50 Добавили свойство объекта options: {}
  
  // 1:13:40
  // new Block('title', 'Конструктор сайтов на чистом JavaScript', {
  new TitleBlock('Конструктор сайтов на чистом JavaScript', { //1:19:44
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'green',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  /*// 1:13:40 Удалил блок
  {
    type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
    tag: 'h2',
    //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;`  56:52 У Владлена здесь ошибка, я исправила! Он заметит 58:30
    //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem;` Дописали стилти 59:08
    styles: {//1:00:38 подключаем utils.js
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',// от ИИ
      padding: '1.5rem'
      }  
    }
  },*/

  // 1:13:40
  // new Block('image', image, {
  new ImageBlock(image, { //1:19:44
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  
  /*// 1:06:50 в 1:13:40 Удалил блок
  {
    type: 'image', value: image, options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      // 1:09:30
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Это картинка'
    }
  },*/

  // 1:13:40
  // new Block('columns', [
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),

  /*// 1:06:50 в 1:13:40 Удалил блок
  {
    type: 'columns', value: [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], options: {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }
  },*/

  // 1:13:40 
  // new Block('text', text, {
  new TextBlock(text, {//1:19:44
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
  
  /* //1:06:50 в 1:13:40 Удалил блок
    {
      type: 'text', value: text, options: {
        styles: {
          background: 'linear-gradient(to left, #f2994a, #f2c94c)',
          padding: '1rem',
          'font-weight': 'bold'
        }
      }
    },
    {type: 'text', value: 'here we go with some text'}, //Изменил 1:06:50
    {type: 'columns', value: ['111111111', '222222222', '333333333']}, //Изменил 1:06:50
    {type: 'image', value: './assets/image.png'}, //27:50 жил в файле index.js до 37:55
    {type: 'image', value: image} //52:26 Изменил 1:06:50
  */
]


