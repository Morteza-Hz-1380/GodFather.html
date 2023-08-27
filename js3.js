function shuffleStrings(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const storedData = JSON.parse(localStorage.getItem("myData"));
// console.log("page 3", storedData.key);
const items = [];
items.push(...storedData.key);

const contentDiv = document.getElementById("content");

shuffleStrings(items);
var list = [];

// const cardContainer = document.querySelector(".card_container");
for (let index = 0; index < items.length; index++) {
  const element = items[index];

  const backcardImage = document.createElement("img");
  const cardImage = document.createElement("img");

  backcardImage.setAttribute("src", `image/${element}.PNG`);
  cardImage.setAttribute("src", `image/card.PNG`);

  const cardDiv = document.createElement("div");
  const backcardDiv = document.createElement("div");

  cardDiv.setAttribute("class", "card");
  backcardDiv.setAttribute("class", "backcard");

  cardDiv.appendChild(cardImage);
  backcardDiv.appendChild(backcardImage);

  const input = document.createElement("input");
  input.setAttribute("type", "text");

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card_container");
  cardContainer.appendChild(cardDiv);
  cardContainer.appendChild(backcardDiv);
  cardContainer.addEventListener("click", () => {
    // cardContainer.setAttribute("class", "card_container_click");
    if (cardContainer.classList.contains("card_container_click")) {
      cardContainer.classList.remove("card_container_click");
      // cardContainer.setAttribute()
      list.push({
        name: input.value,
        card: element,
      });
      console.log(list);
    } else {
      cardContainer.classList.add("card_container_click");
    }
  });

  // // Prevent click propagation from input to parent elements
  // input.addEventListener("click", function (event) {
  //   event.stopPropagation();
  // });


  const maincontainer = document.createElement("div");
  maincontainer.setAttribute("class", "maincontainer");
  maincontainer.appendChild(cardContainer);
  maincontainer.appendChild(input);
  contentDiv.appendChild(maincontainer);

  document.getElementById("nextButton").addEventListener("click", function() {
    window.location.href = "fourthpage.html";
});
}
