class Product {
  constructor(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

const products = [];

fetch("https://6784c66a1ec630ca33a59128.mockapi.io/prodect")
  .then((response) => response.json())
  .then((data) => {
    data.slice(0, 20).forEach((item) => {
      const product = new Product(
        item.title,
        item.price,
        item.description,
        item.image
      );
      products.push(product);
    });

    renderProducts();
  })
  .catch((error) => console.error("Error fetching data:", error));

function renderProducts() {
  const productContainer = document.getElementById("container");

  products.map((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.className = "product-image";

    const title = document.createElement("h2");
    title.textContent = product.title;
    title.className = "product-title";

    const price = document.createElement("p");
    price.textContent = `Price: $${product.price}`;
    price.className = "product-price";

    const description = document.createElement("p");
    description.textContent = product.description;
    description.className = "product-description";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);

    productContainer.appendChild(card);
  });
}
