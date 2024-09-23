import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Pobierz formularz
const form = document.querySelector('.form');

// Obsługa zdarzenia wysłania formularza
form.addEventListener('submit', event => {
  event.preventDefault(); // Zablokowanie domyślnego zachowania formularza

  const delay = Number(form.elements.delay.value); // Pobranie wartości opóźnienia
  const state = form.elements.state.value; // Pobranie stanu (fulfilled lub rejected)

  createPromise(delay, state)
    .then(delay => {
      // Sukces obietnicy
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      // Odrzucenie obietnicy
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

// Funkcja tworząca obietnicę
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
