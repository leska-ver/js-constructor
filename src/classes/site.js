// 1:28:14
export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  // 1:30:25 index.js
  render(model) {
    this.$el.innerHTML = '' // 1:47:57 чистим форму sidebar.js
    model.forEach(block => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}