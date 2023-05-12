const btnCart = document.getElementById("cart-btn");
const logo = document.getElementById("logo");
const collectionItem = document.querySelectorAll(".collection-item");

btnCart?.addEventListener('click', () => {
	window.location.href = '/views/cart.html';
});

logo?.addEventListener('click', () => {
	window.location.href = '/index.html';
});

collectionItem.forEach((item) => {
	item.addEventListener('click', () => {
		window.location.href = "/views/productDetail.html";
	});
});