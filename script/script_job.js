


const liste_jobcard = document.getElementsByClassName("job-card");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

liste_jobcard[0].addEventListener("click",openModal1);
liste_jobcard[1].addEventListener("click",openModal2);

function openModal1() {
    modal1.style.display = "flex"
}
function openModal2(){
    modal2.style.display = "flex"
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
