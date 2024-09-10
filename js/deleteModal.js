
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
