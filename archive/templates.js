// 50:15
import {row, col, css} from './utils'

function title(block) {
  // return ` Удалили 50:50
  //   <div class="row">
  //     <div class="col-sm">
        
  //     </div>
  //   </div>
  // `
  
  //const tag = block.options.tag ?? 'h1'  55:00 model.js 
  //const styles = block.options.styles  57:00 model.js
  const {tag = 'h1', styles} = block.options //59:36 Объединили две const
  //return row(col(`<h1>${block.value}</h1>`)); 50:41
  //return row(col(`<${tag}>${block.value}</${tag}>`)); 55:15 Изменили tag: 'h2' model.js
  // return row(col(`<${tag} style="${styles}">${block.value}</${tag}>`)); 57:12 добавили styles
  // return row(col(`<${tag}>${block.value}</${tag}>`), styles); 57:23 Перенес styles
  //return row(col(`<${tag}>${block.value}</${tag}>`), styles); 1:02:50 дописал css
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
  // return ` Удалили 50:50
  //   <div class="row">
  //     <div class="col-sm">
  //       <p>${block.value}</p>
  //     </div>
  //   </div>
  // `
  // 50:41 return row(col(`<p>${block.value}</p>`));   
  return row(col(`<p>${block.value}</p>`), css(block.options.styles));// 1:07:54
}

// 23:48 убрали 26:48
function columns(block) {
  // const html = block.value.map(item => `<div class="col-sm">${item}</div>`) Изменили 51:25
  // const html = block.value.map(item => col(item)) Изменили 52:53
  const html = block.value.map(col).join('') // 53:20 Перенесли .join('') из return в const
  // return ` Изменили 51:36
  //   <div class="row">
  //     ${html.join('')}
  //   </div>
  // `
  // 51:36
  // return row(html.join('')) 
  //return row(html) 53:20
  return row(html, css(block.options.styles))// 1:07:54
}

// 28:30
function image(block) {
  // return ` Удалили 50:50
  //   <div class="row">
  //     <img src="${block.value}" />
  //   </div>
  // `
  // 50:41 return row(`<img src="${block.value}" />`)
  //return row(`<img src="${block.value}" />`, css(block.options.styles)) 1:07:54
  const {imageStyles: is, alt = '', styles} = block.options// 1:09:30
  return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(styles))// 1:10:27
}

// 42:42
export const templates = {
  title,
  text,
  image,
  columns
} 