// Obtener referencias a elementos HTML por su ID
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

// Función para mostrar el carrito
const displayCart = () => {
  // Limpiar el contenido anterior del modal para evitar duplicados
  modalContainer.innerHTML = '';
  
  // Mostrar el modal y la superposición
  modalContainer.style.display = "block";
  modalOverlay.style.display = "block";

  // Crear la sección de encabezado del modal
  const modalHeader = document.createElement("div");

  // Crear el botón de cierre del modal
  const modalClose = document.createElement("div");
  modalClose.innerText = "❌";
  modalClose.className = "modal-close";
  modalHeader.append(modalClose);

  // Agregar un manejador de eventos para cerrar el modal
  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modalOverlay.style.display = "none";
  });

  // Crear el título del modal
  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Cart";
  modalTitle.className = "modal-title";
  modalHeader.append(modalTitle);

  modalContainer.append(modalHeader);

  // Sección del cuerpo del modal
  if (cart.length > 0) {
    // Iterar sobre los productos en el carrito y crear elementos para cada uno
    cart.forEach((product) => {
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <div class="product">
          <img class="product-img" src="${product.img}" />
          <div class="product-info">
            <h4>${product.productName}</h4>
          </div>
          <div class="quantity">
            <span class="quantity-btn-decrease">➖</span>
            <span class="quantity-input">${product.quantity}</span>
            <span class="quantity-btn-increase">➕</span>
          </div>
          <div class="price">${product.price * product.quantity} $</div>
          <div class="delete-product">❌</div>
        </div>
      `;

      modalContainer.append(modalBody);

      // Manejador de eventos para disminuir la cantidad de productos
      const decrease = modalBody.querySelector(".quantity-btn-decrease");
      decrease.addEventListener("click", () => {
        if (product.quantity > 1) {
          product.quantity--;
          displayCart();
          displayCounter();
        }
      });

      // Manejador de eventos para aumentar la cantidad de productos
      const increase = modalBody.querySelector(".quantity-btn-increase");
      increase.addEventListener("click", () => {
        product.quantity++;
        displayCart();
        displayCounter();
      });

      // Manejador de eventos para eliminar un producto del carrito
      const deleteProduct = modalBody.querySelector(".delete-product");
      deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });

    // Crear el pie de página del modal con el total de la compra
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
      <div class="total-price">TOTAL: ${total} $</div>
      <button class="btn-primary" id="checkout-btn"> go to checkout</button>
      <div id="button-checkout"></div>
    `;

    modalContainer.append(modalFooter);
    //mercadopago;
    const mercadopago = new MercadoPago("TEST-numeroLargoConLetrasAlFinal", {
      locale: "es-AR", // los mas comunes son pt-BR, es-AR, en-US
    });

    const checkoutButton = modalFooter.querySelector("#checkout-btn");

    checkoutButton.addEventListener("click", function () {
      checkoutButton.remove();

      const orderData = {
        quantity: 1,
        description: "compra de ecommerce",
        price: total,
      };

      fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
        })
      .catch(function () {
        alert("Unexpected error");
      });
    });

    function createCheckoutButton(preferenceId) {
      // Initiailize the checkout
      const bricksBuilder = mercadopago.bricks();

      const renderComponent = async (bricksBuilder) => {
        // if (window.checkoutButton) checkoutButton.unmount();

        await bricksBuilder.create(
          "wallet",
          "button-checkout", // class/id where the payment button will be displayed
          {
            initialization: {
              preferenceId: preferenceId,
            }, 
            callbacks: {
              onError: (error) => console.error(error),
              onReady: () => {},
            },
          }
        );
      };
      window.checkoutButton = renderComponent(bricksBuilder);
    }
  } else {
    // Si el carrito está vacío, mostrar un mensaje en el modal
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "Your cart is empty";
    modalContainer.append(modalText);
  }
};

// Agregar un manejador de eventos al botón de carrito para mostrar el carrito
cartBtn.addEventListener("click", displayCart);

// Función para eliminar un producto del carrito
const deleteCartProduct = (id) => {
  // Encontrar el índice del producto en el carrito por su ID
  const foundIndex = cart.findIndex((product) => product.id === id);

  if (foundIndex !== -1) {
    // Si se encuentra, eliminar el producto del carrito
    cart.splice(foundIndex, 1);
    displayCart();
    displayCounter();
  }
};

// Función para mostrar la cantidad de productos en el contador del carrito
const displayCounter = () => {
  // Calcular la cantidad total de productos en el carrito
  const cartLength = cart.reduce((acc, product) => acc + product.quantity, 0);

  if (cartLength > 0) {
    // Si hay productos en el carrito, mostrar el contador y actualizar el número
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    // Si el carrito está vacío, ocultar el contador
    cartCounter.style.display = "none";
  }
};