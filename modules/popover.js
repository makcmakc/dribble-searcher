


const tabs = [
  { title: 'Files', visible: true },
  { title: 'People', visible: true },
  { title: 'Chats', visible: false },
  { title: 'Lists', visible: false }
]

const setStylesOnElement = (styles, element) => Object.assign(element.style, styles)

const trigger = document.getElementById('settings-trigger')
const triggerCoords = trigger.getBoundingClientRect()
const popover = document.getElementById('settings-popover')

setStylesOnElement({left: (triggerCoords.left - 135) + 'px', top: (triggerCoords.top + 75) + 'px'}, popover)

const togglePopover = () => popover.classList.contains('is-visible')
  ? popover.classList.remove('is-visible')
  : popover.classList.add('is-visible')


trigger.addEventListener('click', togglePopover)


const toggleHandler = (el) => {
  console.log(el.checked)
  if (el.checked) {

  }
}


const toggles = [...document.querySelectorAll('.settings-option input')]

toggles.forEach(el => {
  el.addEventListener('change', toggleHandler(el))
  // console.log(el.hasAttribute('checked'))
})

const tabsTemplate = (el) => {

  const tabs = items.map(el => {
    return `
      <li class="search-tabs__item">
        <div class="settings-tab">
          <div class="settings-tab__icon">
            <i class="material-symbols-outlined is-custom">attach_file</i>
          </div>
          <span class="settings-tab__title">Files</span>
          <div class="settings-tab__quantity">3</div>
        </div>
      </li>
    `
  })

  return `
    <ul class="search-tabs__list">
      ${tabs.join('')}
    </ul>
  `
}


const resultItemTemplate = (items) => {

  const result = items.map(el => {
    return `
      <li class="search-result__item">
        <div class="search-item">
          <div class="search-item__img">
            <img src="${el.img}" alt="">
            <div class="search-item__indicator search-item__indicator--unactive"></div>
          </div>
          <div class="search-item__content">
            <div class="search-item__title">${el.name}</div>
            <div class="search-item__status">${el.status}</div>
          </div>
        </div>
      </li>  
    `
  })
  return `
    <ul class="search-result__list">
      ${result.join('')}
    </ul>
  `
}
