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

shuffleStrings(items);

const cardContainer = document.querySelector(".card_container");
for (let index = 0; index < items.length; index++) {
  const element = items[index];
  var myCard = document.createElement("div");
  myCard.setAttribute("class", "card");

  var thePic = document.createElement("img");
  thePic.setAttribute("src", `image/${element}.PNG`);
  thePic.setAttribute("alt", "");
  // next part of input div
  var myDiv = document.createElement("div");
  myDiv.setAttribute("id", "input");


  var theInput = document.createElement("input");
  theInput.setAttribute("type", "text");
  theInput.setAttribute("placeholder" , "Enter Your Name")

  myDiv.appendChild(myCard);
  myDiv.appendChild(theInput);

  //   var theName = document.createElement("input");
  //   theName.setAttribute("type", "text");
  //   theName.setAttribute("name", element);
  //   theName.append("Hello");

  myCard.appendChild(thePic);
  //   myDiv.appendChild(theName);

  cardContainer.appendChild(myDiv);
  cardContainer.appendChild(myDiv);
  console.log(element);
}
