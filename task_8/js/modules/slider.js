function slider() {
    //Slider

    const slides = document.querySelectorAll(".offer__slide");
    const arrowNext = document.querySelector(".offer__slider-next");
    const arrowPrev = document.querySelector(".offer__slider-prev");
    let total = document.querySelector("#total");
    let current = document.querySelector("#current");
    const slidesWrapper = document.querySelector(".offer__slider-wrapper");
    const slidesField = document.querySelector(".offer__slider-inner");
    const width = window.getComputedStyle(slidesWrapper).width;
    const slider = document.querySelector(".offer__slider");
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "all 0.5s";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    slider.style.position = "relative";
    const dots = document.createElement("ol");
    const indicator = [];
    dots.classList.add("carousel-indicators");
    dots.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
  `;
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
          box-sizing: content-box;
          flex: 0 1 auto;
          width: 30px;
          height: 6px;
          margin-right: 3px;
          margin-left: 3px;
          cursor: pointer;
          background-color: #fff;
          background-clip: padding-box;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          opacity: 0.5;
          transition: opacity 0.6s ease;
      `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        indicator.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, "");
    }

    function repeatBlock(countSlides) {
        if (countSlides < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        indicator.forEach((ind) => (ind.style.opacity = "0.5"));
        indicator[slideIndex - 1].style.opacity = 1;
    }

    arrowNext.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        repeatBlock(slides.length);
    });

    arrowPrev.addEventListener("click", () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        repeatBlock(slides.length);
    });

    indicator.forEach((ind) => {
        ind.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            repeatBlock(slides.length);
        });
    });
}

module.exports = slider;