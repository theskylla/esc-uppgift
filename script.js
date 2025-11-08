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
        close.classList.add("close");
        close.innerHTML = "&times;"; 
        close.onclick = () => overlay.remove(); 
        overlay.appendChild(close);

        navbarItems.forEach(li => {
            const clonedLi = li.cloneNode(true); 
            newList.appendChild(clonedLi);
        });

        overlay.appendChild(newList);

        document.body.appendChild(overlay);

    } else {
        // If it exists, remove it (toggle behavior)
        overlay.remove();
    }
}
