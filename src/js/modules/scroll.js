
export class EventScroll {
	constructor() {
		this.scrollBlock = document.querySelector(".page");
		this.navMenu = document.querySelector(".menu");
		this.indexActiveMenuItem = 0;
	}

	menuActive() {
		this.scrollBlock.addEventListener("scroll", () => {
			let scrollDistance = this.scrollBlock.scrollTop;

			this.scrollBlock.querySelectorAll(".page__section").forEach((el, i) => {
				if (i == 0) this.indexActiveMenuItem = 0;
				if (scrollDistance - el.offsetTop + 5 >= 0 && i != 0) {
					this.indexActiveMenuItem = i;
				}
			});

			let itemActive = this.navMenu.querySelectorAll(".menu__item")[this.indexActiveMenuItem].querySelector("a");
			if (!itemActive.classList.contains("active")) {
				this.navMenu.querySelector("a.active").classList.remove("active");
				itemActive.classList.add("active");
			}
		});
	}
}
