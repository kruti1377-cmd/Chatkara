
function openOrder(name, price) {
    document.getElementById("foodName").value = name;
    document.getElementById("foodPrice").value = "₹" + price;
    document.getElementById("quantity").value = 1;
    document.getElementById("totalPrice").textContent = price;
    document.getElementById("orderMessage").textContent = "";
    document.getElementById("orderForm").style.display = "flex";
}

function closeOrder() {
    document.getElementById("orderForm").style.display = "none";
}

document.getElementById("quantity").addEventListener("input", function () {
    const price = parseInt(
        document.getElementById("foodPrice").value.replace("₹", ""),
        10
    ) || 0;

    const quantity = Math.max(1, parseInt(this.value, 10) || 1);

    document.getElementById("totalPrice").textContent = price * quantity;
});

document.getElementById("foodOrderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const food = document.getElementById("foodName").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;
    const total = document.getElementById("totalPrice").textContent;

    document.getElementById("orderMessage").textContent =
        `Thank you, ${name}! Your order request for ${quantity} × ${food} (₹${total}) has been prepared.`;

    console.log("Order details:", {
        name, food, quantity, address, total
    });
      alert(`Thank you, ${name}! Your order request has been received.`);

    this.reset();
    closeOrder();
});
