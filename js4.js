var rows = document.querySelectorAll("tr");

// Add click event listener to each row
rows.forEach(function (row) {
  row.addEventListener("click", function () {
    // Toggle the "selected" class on the clicked row
    row.classList.toggle("selected");
  });
});
var div = document.querySelectorAll("input");
div.forEach(function (dv) {
  dv.addEventListener("click", function () {
    dv.classList.toggle("select");
  });
});
