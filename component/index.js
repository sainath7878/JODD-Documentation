const sideNavAnchors = document.querySelectorAll(".side-nav-anchor");
const snackbarShowBtn = document.querySelector(".snackbar-show-btn");
const snackbarHideBtn = document.querySelector(".snackbar-hide-btn-demo");
const snackbar = document.querySelector(".snackbar-demo");

// -------- script for active side navbar link ------- 

for(let i=0 ; i< sideNavAnchors.length;i++){
    sideNavAnchors[i].addEventListener("click",function()  {
        let current = document.querySelector(".active");
        current.classList.toggle("active");
        this.classList.toggle("active");
    })
}
// ----- script for snackbar --------- 


const hideSnackbar = () => {
    snackbar.style.display = "none";
}

const showSnackbar = () => {
    snackbar.style.display= "flex";
    setTimeout(hideSnackbar, 5000);
}

snackbarShowBtn.addEventListener("click", showSnackbar);
snackbarHideBtn.addEventListener("click", hideSnackbar);