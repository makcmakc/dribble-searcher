import './style.css'
import './main.scss'

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


const settingOption = document.querySelector('.settings-option')