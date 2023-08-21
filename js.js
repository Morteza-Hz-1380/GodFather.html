const cards = document.querySelectorAll(".card");

// Loop through each card and add a click event listener
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const myImg = card.querySelector("img");
    if (myImg.classList.contains("highlight")) {
      myImg.classList.remove("highlight");
    } else {
      myImg.classList.add("highlight");
    }
  });
});

// const ids = document.getElementsByClassName("card");

const startBtn = document.querySelector(".start_btn");
startBtn.addEventListener("click", () => {
  const highlights = document.querySelectorAll(".highlight");
  const ids = [];
  highlights.forEach((item) => {
    ids.push(item.id);
  });
  console.log(ids);
});
