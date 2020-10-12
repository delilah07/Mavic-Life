$(function(){

    // Slick Sliser
    $('.product__slider').slick({
        prevArrow:'<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="white"/></svg></svg></button>',
        nextArrow:'<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" stroke="white"/></svg></button>',
        infinite: false,
    });

    // Accordion in the Question Section
    $('.questions__accordion-title').first().addClass('active').next().slideDown();
    $('.questions__accordion-title').on('click', function(){
        $(this).toggleClass('active').next().slideToggle();
        $('.questions__accordion-title').not(this).removeClass('active').next().slideUp();
    });

    // Fullpage Scrolling
    $('#fullpage').fullpage({
		//options here
		autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        menu: '#header__nav',
        anchors: ['intro', 'product', 'benefits', 'specification', 'questions', 'contacts'],
        normalScrollElements: '.menu'
    });
    
    //  Nav 
    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn-active');
        $('.menu__list').toggleClass('menu__list-active');
    });
    $('.menu__list-item').on('click', function(){
        $('.menu__btn').removeClass('menu__btn-active');
        $('.menu__list').removeClass('menu__list-active');
    });

    // Accordion in the Benefits Section on Mobile
    $('.benefits__info-title').on('click', function(){
        $(this).toggleClass('active').next().slideToggle();
        $('.benefits__info-title').not(this).removeClass('active').next().slideUp();
    });
});