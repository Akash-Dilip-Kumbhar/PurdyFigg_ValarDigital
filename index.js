const accordionItems = document.querySelectorAll(".accordion-item");
const icon = document.querySelectorAll(".bi");
accordionItems.forEach(item => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    debugger
    for (i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("active");
      }
      else {
        // toggle the accordion item
        item.classList.toggle("active");
      }
    }
  });
});