function showNav() {
    // Check if overlay already exists
    let overlay = document.getElementById("overlay-menu");

    if (!overlay) {
        shading = document.createElement("div");
        shading.className = "shading";

        

        overlay = document.createElement("div");
        overlay.id = "overlay-menu";
        overlay.classList.add("overlay");

        const newList = document.createElement("ul");

        const navbarItems = document.querySelectorAll("#navbar li");

        const close = document.createElement("span"); 
        close.className = "fa-solid fa-x";
        close.classList.add("close");
       
        close.onclick = () => {
        overlay.remove(), shading.remove(); 
    };
        overlay.appendChild(close);
      
        navbarItems.forEach(li => {
            const liDupe = li.cloneNode(true); 
            newList.appendChild(liDupe);
        });

        document.body.appendChild(shading);
        overlay.appendChild(newList);

        document.body.appendChild(overlay);

    } else {
        // If it exists, remove it (toggle behavior)
        overlay.remove();
        shading.remove();
    
    }
}
