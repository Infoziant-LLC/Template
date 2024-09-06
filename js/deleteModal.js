var modal_1 = document.getElementById("deleteModal-1");

// Collect all buttons with class "delete-btn"
var deleteBtns = document.querySelectorAll(".delete-btn");
var closeBtn = document.getElementById("closeModalBtn-1");
var yesBtn = document.getElementById("cancelBtn-1");
var noBtn = document.getElementById("cancelBtnNo-1");

// Loop through all buttons and add event listeners
deleteBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal_1.style.display = "block"; // Display the modal when button clicked
  });
});

// Close modal when 'x' is clicked
closeBtn.onclick = function () {
  modal_1.style.display = "none";
}

// Close modal when Yes button is clicked
yesBtn.onclick = function () {
  modal_1.style.display = "none";
  // Additional functionality for Yes (e.g., deleting the applicant) can go here
}

// Close modal when No button is clicked
noBtn.onclick = function () {
  modal_1.style.display = "none";
}

// Close modal when clicking outside the modal
window.onclick = function (event) {
  if (event.target == modal_1) {
    modal_1.style.display = "none";
  }
}
