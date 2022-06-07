let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    navigation: {
        nextEl: '.furniture__item_right',
        prevEl: '.furniture__item_left',
      },
    breakpoints: {
      1201: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      572: {
        slidesPerView: 1.5
      },
      100: {
        slidesPerView: 1
      }
    }
})


let tab = document.querySelectorAll(".furniture__tabs_tab")
let tabs = document.querySelectorAll(".furniture__content")

tab.forEach(function(e){
  e.addEventListener("click", function(){
    let id = e.getAttribute("data-tab")
    let content = document.querySelector(id)
    console.log(content)
    tab.forEach(function(e){
      e.classList.remove("furniture__tabs_tab_active")
    })
    tabs.forEach(function(e){
      e.classList.remove("furniture__content_active")
    })
    e.classList.add('furniture__tabs_tab_active')
    content.classList.add("furniture__content_active")
  })
})

let burger = document.querySelector(".header__item_burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__item_burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
  document.querySelector("body").classList.toggle("lock")
})


let target = document.querySelectorAll(".furniture__content_item_blocks_block")

target.forEach(function(e){
  e.addEventListener("click", function(){
    target.forEach(function(e){
      e.classList.remove("furniture__content_item_blocks_block_active")
    })
    e.classList.add("furniture__content_item_blocks_block_active")
  })
})

window.addEventListener("scroll", function(){
  if(scrollY >= 100) {
    document.querySelector(".header").classList.add("header__active")
  } else {
    document.querySelector(".header").classList.remove("header__active")
  }
})

let logo = document.querySelector(".header__item_logo")

logo.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


let link = document.querySelector(".header__item_menu")

link.addEventListener("click", function(e){
  if(e.target.dataset.id) {
    let target = document.querySelector(e.target.hash)
    let pos = target.offsetTop-130
    e.preventDefault()
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
})

let search = document.querySelector(".header__item_search")

search.addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".search").classList.toggle("search_active")
})