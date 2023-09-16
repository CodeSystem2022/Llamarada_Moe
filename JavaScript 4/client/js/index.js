const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach((product) => {
  const content = document.createElement("div");
  content.className = "card"; // Agregar esta clase
  content.innerHTML = `
    <img src="${product.img}" class="product-img"> <!-- Agregar clase -->
    <h3 class="product-name">${product.productName}</h3> <!-- Agregar clase -->
    <p class="product-price">$${product.price}</p> <!-- Agregar el símbolo "$" delante del precio -->
    <button class="buy-button">Comprar</button> <!-- Cambiar a "Comprar" -->
  `;

  shopContent.append(content);

  const buyButton = content.querySelector(".buy-button"); // obtener el botón de compra dentro de esta tarjeta

  buyButton.addEventListener("click", () => {
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat === true) {
      cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity++; // incrementar 1 a un producto repetido en el carrito
        }
      });
    } else {
      cart.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: 1, // inicializar la cantidad en 1 al agregar un nuevo producto
        img: product.img,
      });
    }
    // llamar a una función para actualizar el contador del carrito (si es necesario)
    displayCounter();
  });
});