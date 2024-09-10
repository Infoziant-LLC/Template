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

/*


var modal1 = document.getElementById("deleteModal-1");


var closeModalBtn1 = document.getElementById("closeModalBtn-1");
var cancelBtn1 = document.getElementById("cancelBtn-1");
var cancelBtnNo1 = document.getElementById("cancelBtnNo-1");
function openModal() {
    modal1.style.display = "block";
}

function closeModal() {
    modal1.style.display = "none";
}

closeModalBtn1.onclick = function() {
    closeModal();
}

cancelBtnNo1.onclick = function() {
    closeModal();
}

cancelBtn1.onclick = function(){
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal1) {
        closeModal();
    }

}
*/
