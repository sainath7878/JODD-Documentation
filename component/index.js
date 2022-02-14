const sideNavAnchors = document.querySelectorAll(".side-nav-anchor");

for(let i=0 ; i< sideNavAnchors.length;i++){
    sideNavAnchors[i].addEventListener("click",function()  {
        let current = document.querySelector(".active");
        current.classList.toggle("active");
        this.classList.toggle("active");
    })
}
