const products = document.querySelectorAll('.product');

for (const product of products) {
    const productQuantity = product.querySelector('.product__quantity-value')
    const productPlus = product.querySelector('.product__quantity-control_inc');
    productPlus.addEventListener('click', (e) => {
        productQuantity.textContent = parseInt(productQuantity.textContent) + 1;
    })
    const ProductMinus = product.querySelector('.product__quantity-control_dec');
    ProductMinus.addEventListener('click', (e) => {
        if (parseInt(productQuantity.textContent) > 0) {
            productQuantity.textContent = parseInt(productQuantity.textContent) - 1;
        }
    })

    const productCart = product.querySelector('.product__add');
    productCart.addEventListener('click', (e) => {
        const cartProducts = document.querySelector('.cart__products');
        for (const cartProduct of cartProducts.querySelectorAll('.cart__product')) {
            if (cartProduct.dataset.id === product.dataset.id) {
                cartProduct.querySelector('.cart__product-count').textContent = parseInt(cartProduct.querySelector('.cart__product-count').textContent) + parseInt(productQuantity.textContent);
                productQuantity.textContent = 1;
                return true
            }
        }
        const cartProduct = document.createElement('div')
        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = product.dataset.id;

        const cartProductImage = document.createElement('img');
        cartProductImage.classList.add('cart__product-image');
        cartProductImage.src = product.querySelector('img').src;
        cartProduct.appendChild(cartProductImage)

        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');
        cartProductCount.textContent = productQuantity.textContent;
        productQuantity.textContent = 1;
        cartProduct.appendChild(cartProductCount)

        cartProducts.appendChild(cartProduct)

    })
}

