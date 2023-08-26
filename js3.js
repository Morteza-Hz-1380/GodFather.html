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

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card_container");
  cardContainer.appendChild(cardDiv);
  cardContainer.appendChild(backcardDiv);
  cardContainer.addEventListener("click", () => {
    // cardContainer.setAttribute("class", "card_container_click");
    if (cardContainer.classList.contains("card_container_click")) {
      cardContainer.classList.remove("card_container_click");
      // cardContainer.setAttribute()
    } else {
      cardContainer.classList.add("card_container_click");
    }
  });

  const input = document.createElement("input");
  input.setAttribute("type", "text");

  // Prevent click propagation from input to parent elements
  input.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  const maincontainer = document.createElement("div");
  maincontainer.setAttribute("class", "maincontainer");
  maincontainer.appendChild(cardContainer);
  maincontainer.appendChild(input);
  contentDiv.appendChild(maincontainer);
}

// next part of input div
// var myDiv = document.createElement("div");
// myDiv.setAttribute("id", "input");

// var myCard = document.createElement("div");
// myCard.setAttribute("class", "card");

// var thePic = document.createElement("img");
// thePic.setAttribute("src", `image/${element}.PNG`);
// thePic.setAttribute("alt", "");

// var myCard2 = document.createElement("div");
// myCard2.setAttribute("class", "backcard");
// // myCard2.style.width = "220px"; // Set the width
// // myCard2.style.height = "300px"; // Set the height
// myCard2.style.borderRadius = "10px";

// var thePic2 = document.createElement("img");
// thePic2.setAttribute("src", `image/the-godfather-eps-vector-logo.PNG`);
// // thePic2.setAttribute("alt", "");
// // thePic2.style.width = "100%"; // Set the image width to fill the parent div
// // thePic2.style.height = "100%";
// // myCard2.style.backgroundColor = "#1D1D1B";

// myCard.appendChild(thePic2);
// myCard2.appendChild(thePic);

// var theInput = document.createElement("input");
// theInput.setAttribute("type", "text");
// theInput.setAttribute("placeholder", "Enter Your Name");

// myDiv.appendChild(myCard);
// myDiv.appendChild(myCard2);
// myDiv.appendChild(theInput);

// //   var theName = document.createElement("input");
// //   theName.setAttribute("type", "text");
// //   theName.setAttribute("name", element);
// //   theName.append("Hello");

// //   myDiv.appendChild(theName);

// cardContainer.appendChild(myDiv);
// console.log(element);
// }
