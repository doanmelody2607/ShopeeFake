const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const registerBtn = $('.js-register-btn')
// const loginBtn = $('.js-login-btn')
// const modal = $('.modal')
// const modalBody = $('.modal__body')
// const registerForm = $('.auth-form:first-child')
// const loginForm = $('.auth-form:nth-child(2)')
// const switchFormBtns = $$('.auth-form__switch-btn')

// registerBtn.onclick = () => {
//     registerForm.classList.add('open')
//     modal.classList.add('open')
// }

// loginBtn.onclick = () => {
//     loginForm.classList.add('open')
//     modal.classList.add('open')
// }

// modal.onclick = () => {
//     modal.classList.remove('open')
//     registerForm.classList.remove('open')
//     loginForm.classList.remove('open')
// }

// document.onkeydown = (e) => {
//     if (e.which === 27) {
//         modal.classList.remove('open')
//         registerForm.classList.remove('open')
//         loginForm.classList.remove('open')
//     }
// }

// modalBody.onclick = (e) => {
//     if (!e.target.closest('.auth-form__control-back')) {
//         e.stopPropagation()
//     }
//     switchFormBtns.forEach(switchFormBtn => {
//         switchFormBtn.onclick = () => {
//             registerForm.classList.toggle('open')
//             loginForm.classList.toggle('open')
//         }
//     })
// }


/* Handle Search Suggest When Click On Input */
const inputSearch = $('.navbar__search-input')
const historySearch = $('.navbar__search-history')

historySearch.onmousedown = (e) => {
    e.preventDefault()
}

/* Handle Category */
const categoryItems = $$('.category-list .category-item')
const categoryLinks = $$('.category-item .category-item__link')

categoryItems.forEach(categoryItem => {
    categoryItem.onclick = function () {
        $('.category-item.category-item--active').classList.remove('category-item--active')
        this.classList.add('category-item--active')
    }
})


/* Handle Sort & Filter */
const filterBtns = $$('.home-filter__btn')

filterBtns.forEach(filterBtn => {
    filterBtn.onclick = function () {
        $('.home-filter__btn.btn--primary').classList.remove('btn--primary')
        this.classList.add('btn--primary')
    }
})

/* Handle Like Actions */
const likeActions = $$('.home-product-item__like')
const unlikeHearts = $$('.home-product-item__unlike-icon')
const likeHearts = $$('.home-product-item__liked-icon')

/* Handle Navbar Search On Mobie */
const navbarSearch = $('.navbar__search')
const searchMobileBtn = $('.navbar__mobile-search')
console.log(navbarSearch)

searchMobileBtn.onclick = () => {
    navbarSearch.classList.toggle('navbar__search--open')
}