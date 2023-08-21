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
startBtn.addEventListener("click", () => {});

var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Redirect to the next page
  const highlights = document.querySelectorAll(".highlight");
  const ids = [];
  highlights.forEach((item) => {
    ids.push(item.id);
  });
  const data = { key: ids };
  localStorage.setItem("myData", JSON.stringify(data));
  console.log(ids);
  window.location.href = "thirdpage.html";
});

const highlightedRoles = JSON.parse(sessionStorage.getItem("highlightedRoles"));
const rolesList = document.getElementById("highlightedRoles");

if (highlightedRoles) {
  highlightedRoles.forEach((role) => {
    const listItem = document.createElement("li");
    listItem.textContent = role;
    rolesList.appendChild(listItem);
  });
}
