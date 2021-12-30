const squareBody = document.querySelector('.square-body');
const btnReset = document.querySelector('.btn-reset');
let array = [];

const fillArray = () => {
	for (let i = 0; i < 25; i++) {
		array[i] = i + 1;
	}
};

const swapBlocks = (number, direction) => {
	const currentIndex = array.findIndex((item) => {
		return item === +number;
	});

	if (currentIndex + +direction >= 0 && currentIndex + +direction <= 24) {
		const currentItem = array[currentIndex];
		array[currentIndex] = array[currentIndex + +direction];
		array[currentIndex + +direction] = currentItem;
		renderItems();
	}
};

const renderItems = () => {
	squareBody.innerHTML = '';
	array.forEach((item) => {
		const newDiv = document.createElement('div');
		newDiv.classList.add('block');

		newDiv.innerHTML = `	
    <div class="block">
    <div class="block-number">${item}</div>
    <div class="block-btn">
        <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
        <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
        <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
        <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
    </div>
    };`;
		squareBody.append(newDiv);
	});
};

squareBody.addEventListener('click', (e) => {
	if (e.target.closest('.arrow.left')) {
		swapBlocks(e.target.closest('.block').querySelector('.block-number').textContent, -1);
	}
	if (e.target.closest('.arrow.right')) {
		swapBlocks(e.target.closest('.block').querySelector('.block-number').textContent, 1);
	}
	if (e.target.closest('.arrow.top')) {
		swapBlocks(e.target.closest('.block').querySelector('.block-number').textContent, -5);
	}
	if (e.target.closest('.arrow.bottom')) {
		swapBlocks(e.target.closest('.block').querySelector('.block-number').textContent, 5);
	}
});

btnReset.addEventListener('click', () => {
	fillArray();
	renderItems();
});

fillArray();
renderItems();
