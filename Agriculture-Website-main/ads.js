document.addEventListener('DOMContentLoaded', function () {
    // Массив с рекламными сообщениями
    const ads = [
        "Скидка 50% на все фрукты до конца этой недели!",
        "Бесплатная доставка при заказе от 20$!",
        "Свежие фрукты уже в наличии!",
        "Специальное предложение для постоянных клиентов!",
        "Подарок каждому покупателю в этот выходной!"
    ];

    // Функция для показа рекламного сообщения в диалоговом окне
    function showAd() {
        const randomIndex = Math.floor(Math.random() * ads.length); // Выбираем случайное сообщение из массива
        const randomAd = ads[randomIndex];
        alert(randomAd); // Показываем сообщение в диалоговом окне
    }

    // Вызов функции showAd() сразу после загрузки документа
    showAd();
});
