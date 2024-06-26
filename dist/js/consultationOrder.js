export default function consultationOrder() {
	const candleButtonSubmit = document.querySelector('.candle__button--submit');

	if (candleButtonSubmit) {
		candleButtonSubmit.addEventListener('click', (event) => {
			// Здесь должен быть код отправки заказа
			window.location.href = 'successful_order.html';
		});
	} else {
		console.log('candleButtonSubmit не существует');
	}
}
