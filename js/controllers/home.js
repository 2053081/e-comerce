const collections = document.querySelectorAll(".collection");

const fetchData = async () => {
  const data = {};
  for (let i = 1; i <= 2; i++) {
    const response = await axios.get(
      `https://localhost:7154/api/products/${i}`
    );
    const responseData = response.data.data;
    const { name, products } = responseData;
    data[name] = products;
  }

  localStorage.setItem("data", JSON.stringify(data));
};

const displayData = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  collections.forEach((collection) => {
    let renderedCollectionItems = "";
    const collectionType = collection.classList[1];

    data[collectionType].forEach((item) => {
      const collectionItem = `
			<div class="collection-item">
					<img src="${item.image}" alt="" class="item-img">
					<div class="item-desc">
						<div class="item-upper">
							<p class="item-name">
								${item.name}
							</p>
							<button class="heart-btn">
								<i class="fa-regular fa-heart item-heart"></i>
							</button>
						</div>

						<p class="item-price">$${item.price}</p>
					</div>
				</div>
			`;

      renderedCollectionItems += collectionItem;
    });

    collection.innerHTML = `
		<div class="collection-upper">
				<h3 class="upper-header">${collectionType}</h3>
				<a href="" class="btn-seemore">
					<div class="btn-seemore">See more &#8811</div>
				</a>
			</div>
			<div class="collection-items">
				${renderedCollectionItems}
			</div>`;
  });
};

fetchData();

displayData();
