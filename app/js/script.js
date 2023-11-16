import data from "../../app/js/data.js";

const otherProducts = {
  render: () => {
    const { products } = data;
    return `${products.slice(1).map(
      (product) =>
        `<div class="card">
        <div class="card__image">
        <image src="${product.image}" alt="product1"></image>
          <div class="image-badge-container">
            ${
              product.bonusBadge == true
                ? `<div class="card__badge card__bonus-badge">
                <span>BONUS</span>
              </div>`
                : ""
            }
            ${
              product.newBadge == true
                ? `<div class="card__new-badge">
                <span>NEW</span>
               </div>`
                : ""
            }
          </div>
          ${
            product.mindfullBadge == true
              ? `<div>
              <img src="${product.mindfullImage}" id="mindful-badge" />
            </div>`
              : ""
          }
        </div>
        <div class="card__details">
          <hr />
          <div class="card__review u-padding-top-small">
            <div class="card-options">${product.cardOptions}</div>
            <div class="card-rating">${"(" + product.reviews + ")"}</div>
          </div>
          <div class="card__heading">
            <div class="card__heading-main">
              This Item: <span>${product.title}</span>
            </div>
            <div class="card__heading-sub">${product.subTitle}</div>
          </div>
          ${
            product.saleBadge == true
              ? `<div class="card__badge">
              <span>SALE</span>
            </div>`
              : ""
          }

          <div class="card__amount">
            <div class="card__dicount-amount">${product.discountAmount}</div>
            <div class="card__old-amount">
              <span>${product.oldAmount}</span>
            </div>
          </div>
          <button type="button" class="card__options" id="showDetailBtn">
                  <div class="card__button">
                    <span>250ml</span>
                    <span>NZ$23.90</span>
                  </div>
                  <div class="bg-chevron_down"></div>
                </button>
        </div>
      </div>`
    )}`;
  },
};

const router = () => {
  const carosalContainer = document.getElementById("carousalCardContainer");
  carosalContainer.innerHTML = otherProducts.render();
};

window.addEventListener("load", router);

let showDetailBtn = document.querySelector("#showDetailBtn");
console.log(showDetailBtn);
let modalContainer = document.querySelector("#modalContainer");
let modal = document.querySelector("#modal");
let modalCloseBtnMobile = document.querySelector("#modalCloseBtn-mobile");
let modalCloseBtnDesktop = document.querySelector("#modalCloseBtn-desktop");

showDetailBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("active");
  modal.classList.toggle("active");
});

const closeBtn = (btn) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
    modalContainer.classList.toggle("active");
  });
};
closeBtn(modalCloseBtnMobile);
closeBtn(modalCloseBtnDesktop);

const modal_tabs = document.querySelectorAll(".tab_btn");
const modal_content = document.querySelectorAll(".content");
const option_tabs = document.querySelectorAll(".option-tab_btn");
const option_content = document.querySelectorAll(".option-content");
const image_tabs = document.querySelectorAll(".image-tab_btn");
const image_content = document.querySelectorAll(".image-content");

const tabSection = (tabs, all_content) => {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      if (tabs == modal_tabs) {
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth - 28 + "px";
        line.style.left = e.target.offsetLeft + "px";
      }

      all_content.forEach((content) => {
        content.classList.remove("active");
      });
      all_content[index].classList.add("active");
    });
  });
};

tabSection(modal_tabs, modal_content);
tabSection(option_tabs, option_content);
tabSection(image_tabs, image_content);
