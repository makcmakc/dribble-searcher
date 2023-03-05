import './styles/index.scss'


const searchResultList = document.querySelector('.search-result__list')
const searchResultChildrten = [...searchResultList.children]

let itemsQuantityInList = 5
let resultListHeight = []
searchResultChildrten.slice(0, itemsQuantityInList).forEach(el => resultListHeight.push(el.clientHeight))
searchResultList.style.height = resultListHeight.reduce((a, b) => a + b)  + 'px'

const search = document.querySelector('.search')
const searchInput = document.querySelector('.search-field__input')
const searchDrop = document.querySelector('.search-drop')

searchInput.addEventListener('focus', () => {
  searchDrop.classList.add('is-focus')
  search.classList.add('is-active')
})

searchInput.addEventListener('blur', () => {
  searchDrop.classList.remove('is-focus')
  search.classList.remove('is-active')
})


const mock = [
  { id: 0, firstName: 'Yo', lastName: 'Asakura', img: '', status: 'Active' }
]