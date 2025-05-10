const products = document.querySelectorAll('.product');

for (const product of products) {
    const productQuantity = product.querySelector('.product__quantity-value')
    const productPlus = product.querySelector('.product__quantity-control_inc');
    productPlus.addEventListener('click', (e) => {
        productQuantity.textContent = parseInt(productQuantity.textContent) + 1;
    })
    const ProductMinus = product.querySelector('.product__quantity-control_dec');
    ProductMinus.addEventListener('click', (e) => {
        if (parseInt(productQuantity.textContent) > 1) {
            productQuantity.textContent = parseInt(productQuantity.textContent) - 1;
        }
    })

    const productCart = product.querySelector('.product__add');
    productCart.addEventListener('click', (e) => {
        const cartProducts = document.querySelector('.cart__products');
        const productInCart = [...cartProducts.children].find((el) => el.dataset.id === product.dataset.id);
    if (productInCart) {
        productInCart.querySelector('.cart__product-count').textContent = parseInt(productInCart.querySelector('.cart__product-count').textContent) + parseInt(productQuantity.textContent);
        productQuantity.textContent = 1;
    } else {
        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector('img').src}">
                <div class="cart__product-count">${productQuantity.textContent}</div>
            </div>
            `);
        productQuantity.textContent = 1;
    }


}
)
}

