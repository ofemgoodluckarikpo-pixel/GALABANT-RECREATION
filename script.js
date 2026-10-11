const cartButtons = document.querySelectorAll(".add-button");
const cartMessage = document.getElementById("cart-message");

let cartCount = 0;
const cartItems = [];

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector(".price").textContent;

        cartItems.push({
            name: productName,
            price: productPrice
        });

        cartCount++;

        button.textContent = "Added ✓";

        cartMessage.textContent =
            `${productName} added to your bag! Items in bag: ${cartCount}`;

        console.log("Cart items:", cartItems);
    });
});

const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!email) {
        newsletterMessage.textContent = "Please enter your email address.";
        return;
    }

    newsletterMessage.textContent =
        "Thanks for joining the GALABANT fashion community!";

    newsletterForm.reset();
});