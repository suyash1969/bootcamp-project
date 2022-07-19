let searchform = document.querySelector('.searchform');
document.querySelector('.fa-search').onclick = () =>
{
    searchform.classList.toggle('activate');
    card.classList.remove('activate');
    menu.classList.remove('activate');

}
let card = document.querySelector('.shoping-card');
document.querySelector('.fa-shopping-cart').onclick = () =>
{
    card.classList.toggle('activate');
    searchform.classList.remove('activate');
    menu.classList.remove('activate');
}
let menu = document.querySelector('.navbar');
document.querySelector('.fa-bars').onclick = () =>
{
    menu.classList.toggle('activate');
    searchform.classList.remove('activate');
    card.classList.remove('activate');
}
window.onscroll = () =>{
    searchform.classList.remove('activate');
    card.classList.remove('activate');
    menu.classList.remove('activate');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
