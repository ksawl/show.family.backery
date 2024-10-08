/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'

// Slider
// import Swiper, { Navigation, Pagination } from 'swiper';
import Swiper from 'swiper';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import { BaseHelpers } from './helpers/base-helpers';
import { PopupManager } from './modules/popup-manager';
import { BurgerMenu } from './modules/burger-menu';
import { Tabs } from './modules/tabs';
import { Accordion } from './modules/accordion';
import { EventScroll } from './modules/scroll';

BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

// Прилипание хедера при прокрутке
// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

/* Активное меню при скроле */
new EventScroll().menuActive();

// Slider
const swiper = new Swiper('.swiper', {
	modules: [Pagination, Autoplay, EffectCoverflow],

  // Optional parameters
  direction: 'horizontal',
	speed: 400,
  spaceBetween: -35,
  loop: true,
	// centeredSlides: true,
	watchSlidesProgress: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},

	autoplay: {
		pauseOnMouseEnter: true,
	},
	
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		slideShadows: false,
		modifier: 3,
		depth: 50,
	},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
  },

});
