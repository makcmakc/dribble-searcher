import './styles/index.scss'

// const search = document.querySelector('.search')
// const searchInput = document.querySelector('.search-field__input')
// const searchDrop = document.querySelector('.search-drop')

// searchInput.addEventListener('focus', () => {
//   searchDrop.classList.add('is-focus')
//   search.classList.add('is-active')
// })

// searchInput.addEventListener('blur', () => {
//   searchDrop.classList.remove('is-focus')
//   search.classList.remove('is-active')
// })


// const settingOption = document.querySelector('.settings-option')

const searchResultList = document.querySelector('.search-result__list')
const searchResultChildrten = Array.from(searchResultList.children)

let itemsQuantityInList = 5
let resultListHeight = []
searchResultChildrten.slice(0, itemsQuantityInList).forEach(el => resultListHeight.push(el.clientHeight))
searchResultList.style.height = resultListHeight.reduce((a, b) => a + b)  + 'px'

// console.log('HEIGHT OF RESULT List', listHeight.reduce((a, b) => a + b))
// console.log(el.getBoundingClientRect().height, el.offsetHeight, el.clientHeight)