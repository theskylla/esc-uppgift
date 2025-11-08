function showNav() {
    // Check if overlay already exists
    let overlay = document.getElementById("overlay-menu");

    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay-menu";
        overlay.classList.add("overlay");

        const newList = document.createElement("ul");

        const navbarItems = document.querySelectorAll("#navbar li");

        const close = document.createElement("span"); 
        close.className = "fa-solid fa-x";
        close.classList.add("close");
       
        close.onclick = () => overlay.remove(); 
        overlay.appendChild(close);

        navbarItems.forEach(li => {
            const liDupe = li.cloneNode(true); 
            newList.appendChild(liDupe);
        });

        overlay.appendChild(newList);

        document.body.appendChild(overlay);

    } else {
        // If it exists, remove it (toggle behavior)
        overlay.remove();
    }
}
