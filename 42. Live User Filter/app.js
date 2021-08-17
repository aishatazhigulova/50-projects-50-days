let search = document.querySelector('.user__search')

let userEls = document.querySelectorAll('.user')

search.addEventListener('input', () => {
  searchFilter()
})



function searchFilter() {
    const text = search.value.toLowerCase();
    
    
    userEls.forEach(userEl => {

      let nameFound = userEl
        .querySelector('.user__name')
        .textContent
        .toLowerCase()
        .indexOf(text) != -1
      let locationFound = userEl
        .querySelector('.user__location')
        .textContent
        .toLocaleLowerCase()
        .indexOf(text) != -1

      if(nameFound || locationFound){
        userEl.style.display = 'flex'
      } else {
        userEl.style.display = 'none'
      }
    });
}


