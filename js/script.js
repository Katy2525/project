// Меню-бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Модалки
const modal = document.querySelector(".popup");

function openModalWindow() {
    document.body.classList.add('_lock')
    modal.classList.add('popup_open');
  }

  function closeModalWindow() {
    document.body.classList.remove('_lock')
    modal.classList.remove('popup_open');
  }

//Появление to-top при скроллинге

   var toTop = $(".to-top"); 
   var body = $("html, body");

   $(window).on("scroll", function () {
     var winScrollTopValue = $(window).scrollTop(); 

     if (winScrollTopValue > 1400) {
       toTop.fadeIn(500); 
     } else if (winScrollTopValue < 1400) {
       toTop.fadeOut(500); 
     }
   });

   toTop.on("click", toTopClicked); 

   function toTopClicked(event) {
     event.preventDefault(); 
     toTop.toggleClass("test");

     body.animate({
       scrollTop: 0,
     }, 1800);
   }

//Подключаем анимации при скроллинге
new WOW().init();

//Табы на стринице Портфолио

$(function() {
	var tab = $('#tabs-portfolio .portfolio__gallery'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs-portfolio .portfolio__list a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('#tabs-portfolio .portfolio__list a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.portfolio__link __subtitle').click(function(){
		$('#tabs-portfolio .portfolio__list a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('.portfolio__list a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});

//Слайдер на главной странице

$('.main-block__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  infinite: true,
  pauseOnHover: false
});

    //останавливаем автовопроизвидение при открытии модального окна
    $('.header__button').click(function(){
      $('.main-block__slider').slick('slickPause'); 
    });

    //воспроизведение возобновлено
    $('.popup__close').click(function(){
      $('.main-block__slider').slick('slickPlay'); 
    });

//Слайдер на странице Complex блок "Похожие проекты"

$('.similar-projects__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
  

//Главная страница-галереи

lightbox.option({
  'wrapAround': true,
 'showImageNumberLabel': true,
 'albumLabel': 'Фото %1 из %2',
});

