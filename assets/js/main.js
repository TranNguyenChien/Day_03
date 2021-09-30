const tabItem = document.querySelectorAll(".tab__item");
const mainItem = document.querySelectorAll(".main__content-item");

function removeBorder() {
  tabItem.forEach((e) => {
    e.classList.remove("tab__border");
  });
}

function removeShow() {
  mainItem.forEach((e) => {
    e.classList.remove("show");
  });
}

function seclectItem() {
  removeBorder();
  removeShow();
  this.classList.add("tab__border");
  const mainShow = document.querySelector(`#${this.id}__content`);
  mainShow.classList.add("show");
}

tabItem.forEach((item) => {
  item.addEventListener("click", seclectItem);
});
