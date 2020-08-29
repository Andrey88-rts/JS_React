/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

// Возьмите свой код из предыдущей практики

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
        serials: [
            "Рассказ служанки",
            "Игра престолов",
            "Анатомия страсти",
            "Черное зеркало",
            "Убивая Еву",
        ],
    };

    // 1)
    const advertisingBlock = document.querySelectorAll(".promo__adv img");
    const genresChange = document.querySelector(".promo__genre");
    const backFone = document.querySelector(".promo__bg");
    const filmList = document.querySelector(".promo__interactive-list");
    const addForm = document.querySelector("form.add");
    const inputAddFilm = addForm.querySelector(".adding__input");
    const check = addForm.querySelector("[type='checkbox']");
    // const blockMovie = document.querySelectorAll(".promo__menu-list");
    const nameMovie = document.querySelectorAll(".promo__menu-item");
    const title = document.querySelector(".promo__interactive-title");

    nameMovie.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.target);
            link.classList.toggle("promo__menu-item_active");
            title.innerHTML = `<div class="promo__interactive-title">ПРОСМОТРЕННЫЕ ${link.textContent}</div>`;
            sortArr(movieDB.serials);
            createMovieList(movieDB.serials, filmList);
        });
    });

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };

    // 2)

    const genresImage = (genres, image) => {
        genres.textContent = "Драма";
        image.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = inputAddFilm.value;
        const favorite = check.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, filmList);
        }

        event.target.reset();
    });

    sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
          <li class="promo__interactive-item">${i + 1} ${film}
              <div class="delete"></div>
          </li>
          `;
        });
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(advertisingBlock);
    genresImage(genresChange, backFone);
    createMovieList(movieDB.movies, filmList);
});