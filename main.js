//tabs

const tabs = document.getElementById('tabs');
const content = document.getElementById('content')
const tabsEl = Array.from(document.querySelectorAll('.tab__item'));

console.log(tabsEl);

const changeClass = el => {
	for(let i = 0; i < tabs.children.length; i++){
		tabs.children[i].classList.remove('active')
	}
	el.classList.add('active');
} 

for(let index = 0; index <tabsEl.length; index++){
	tabsEl[index].addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	changeClass(e.target);
	for(let i = 0; i < content.children.length; i++){
		content.children[i].classList.remove('active');
		if(content.children[i].dataset.content == currTab) {
			content.children[i].classList.add('active');
		}
	}
}) 
}

//Modal window


const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');


btnOpen.addEventListener('click',() =>{
	modal.classList.add('active');
})

const closeModel = () => {
	modal.classList.remove('active');
}

overlay.addEventListener('click', closeModel);


//slider

const prev = document.getElementById('btn-prev');
      next = document.getElementById('btn-next');
      slides = document.querySelectorAll('.slider');
      slidersWrapp = document.querySelectorAll('.slider-wrapper');
      dots = document.querySelectorAll('.dot');

let index = 0;



const activeSlide = n => {
	for(slide of slides){
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}  

const activeDot = n => {
	for(dot of dots){
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
} 

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item,indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

next.addEventListener('click', nextSlide);  
prev.addEventListener('click', prevSlide); 

const interval = setInterval(nextSlide, 5500);