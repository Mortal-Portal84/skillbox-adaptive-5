// header search
const searchBtn = document.querySelector('.header__search')
const headerSearchForm = document.querySelector('.search-form--headed')
const searchInput = document.getElementById('header-search')

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('header__search--active')
  headerSearchForm.classList.toggle('search-form--closed')
  searchInput.focus()
})

// custom input reset
const resetBtn = document.querySelector('.custom-input__reset-btn')
const customSearchInput = document.querySelector('.custom-input__field')
const searchResultsForm = document.querySelector('.search-form')

customSearchInput.addEventListener('input', () => {
  resetBtn.classList.toggle('active', !!customSearchInput.value);
})

searchResultsForm?.addEventListener('reset', () => {
  resetBtn.classList.remove('active');
})

resetBtn.addEventListener('click', () => {
  customSearchInput.value = ''
  resetBtn.classList.remove('active')
  customSearchInput.focus()
})

//pagination
const paginationList = document.querySelectorAll('.pagination__item')

paginationList.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()

    const counterLink = item.querySelector('a.pagination__link')

    if (counterLink) {
      paginationList.forEach((el) => {
        el.classList.remove('pagination__item--active')
      })

      item.classList.add('pagination__item--active')
    }
  })
})

//cookie
const cookiesModal = document.querySelector('.cookies')
const cookiesBtn = document.querySelector('.cookies__message-button')

if (cookiesModal && cookiesBtn) {
  cookiesBtn.addEventListener('click', () => {
    cookiesModal.classList.remove('cookies--active')
  })
}
