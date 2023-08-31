
const detailsButton = document.getElementById("detailsButton");
const details = document.getElementById("details");

let showDetails = false;

detailsButton.addEventListener("click", () => {
  showDetails = !showDetails;
  if (showDetails) {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
});
