document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM
    let applyCouponButton = document.getElementById('apply-coupon');
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');

    // Устанавливаем обработчик события на кнопку
    applyCouponButton.addEventListener('click', function() {
        // Проверяем, была ли уже применена скидка
        applyCouponButton.disabled = true;

        // Получаем все товары в корзине
        let items = cartItems.getElementsByClassName('cart-item');

        // Применяем скидку 20% к каждому товару
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let priceElement = item.getElementsByClassName('item-price')[0];
            let price = parseFloat(priceElement.textContent.replace(/\D/g, ''));
            let discountedPrice = price * 0.8; // 20% скидка
            priceElement.textContent = discountedPrice.toFixed(2) + ' руб.';
        }

        // Изменяем итоговую стоимость заказа
        let total = parseFloat(totalPrice.textContent.replace(/\D/g, ''));
        let discountedTotal = total * 0.8; // 20% скидка
        totalPrice.textContent = 'Итоговая цена: ' + discountedTotal.toFixed(2) + ' руб.';
    });
});
