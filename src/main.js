import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { performSearch, showLoader, hideLoader } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const searchQuery = formData.get('query');
  if (!searchQuery.trim()) {
    return iziToast.show({
      position: 'center',
      backgroundColor: 'orange',
      message: 'Введіть пошуковий запит.',
    });
  }
  showLoader();
  performSearch(searchQuery.trim())
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.show({
          position: 'topRight',
          backgroundColor: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'green',
        message: `Found ${data.totalHits} results.`,
      });
      console.log(data.hits);
      renderImages(data.hits);
      searchForm.reset();
    })
    .catch(error => {
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'red',
        message: 'Error during the request. Please try again later.',
      });
    })
    .finally(() => hideLoader());
});
