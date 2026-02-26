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

