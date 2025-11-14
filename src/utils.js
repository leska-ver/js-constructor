// export function row(content) { 57:48 добавили styles
export function row(content, styles = '') {
  // return `<div class="row">${content}</div>` 58:02
  return `<div class="row" style="${styles}">${content}</div>`
}

// 49:58
export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

// 1:01:54 подключаем model.js
export function css(styles = {}) {
  // const keys = Object.keys(styles)
  // console.log(keys)
  // keys.map(key => { 1:03:52 Дописали array(;)
  /*const array = keys.map(key => {
    return `${key}: ${styles[key]}`
  })
  return array.join(';')*/
  
  // 1:50:10
  if (typeof styles === 'string') return styles
  // 1:04:25 Улучшили код
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

// 1:36:16 перенёс из sidebar.js
export function block(type) {
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
}