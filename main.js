// custom input reset
const resetBtn = document.querySelector('.custom-input__reset-btn')
const customSearchInput = document.querySelector('.custom-input__field')
const searchResultsForm = document.querySelector('.search-results__form')

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

    const counterLink = item.querySelector('a.pagination__link.pagination__link--counter')

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

cookiesBtn.addEventListener('click', () => {
  cookiesModal.classList.remove('cookies--active')
})
