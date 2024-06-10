let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - R$${item.price}`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    document.getElementById("total").textContent = `Total: R$${total.toFixed(2)}`;
}

function sendWhatsApp() {
    let message = "Pedido:\n";
    cart.forEach(item => {
        message += `${item.name} - R$${item.price}\n`;
    });
    message += `\nTotal: R$${getTotal()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5544991360893/?text=${encodedMessage}}`;
    window.location.href = whatsappURL;
}
