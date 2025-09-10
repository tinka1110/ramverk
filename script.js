window.onload = function() {
    const profiles = document.querySelectorAll(".profile");
    profiles.forEach(img => {
        img.addEventListener("mouseover", () => effectOn(img));
        img.addEventListener("mouseout", () => effectOff(img));
        img.addEventListener("click", editTitle);
    });
};

var editTitle = function(e) {
    const newTitle = prompt("Ny arbetstitel:");
    if (newTitle) {
        const parent = e.target.parentElement;
        const title = parent.querySelector(".team-title");
        title.textContent = newTitle;
    }
};

function effectOn(img){
    const parent = img.parentElement;
    parent.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
    parent.style.border = "2px solid #3498db";
    parent.style.borderRadius = "8px";
    parent.style.padding = "10px";
    parent.style.transition = "all 0.3s ease";
}

function effectOff(img){
    const parent = img.parentElement;
    parent.style.boxShadow = "";
    parent.style.border = "";
    parent.style.padding = "";
}

