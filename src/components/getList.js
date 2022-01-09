const DATA_URL = 'https://pixabay.com/api/';
const API_KEY = '24123899-30dafe3a116d297502be19e37'; //мой
const IMG_TYPE = 'photo';
const IMG_ORIENT = 'horizontal';
const PER_PAGE = 12;

export default async function GetList(query, page) {
  try {
    const url = `${DATA_URL}?image_type=${IMG_TYPE}&orientation=${IMG_ORIENT}&q=${query}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;

    const response = await fetch(url); // получаем ответ от сервера
    const data = await response.json(); // преобразуем в JSON

    return data; // возвращаем полученные данные
  } catch (error) {
    // или ругаемся
    return Promise.reject(new Error('Nothing found'));
  }
}
