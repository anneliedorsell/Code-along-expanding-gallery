const panels = document.querySelectorAll(".panel")
// querySelectorAll = select hat you want, id, class...

//console.log(panels);
//console.log(panels[0]); //The first index(pic)
//Nodelist in the console means a selection of html (HTMLCollection)

panels.forEach(panel => {
    // add an eventlist to listen to the click
    panel.addEventListener("click", () => {
        panel.classList.add("active")
        removeActiveClass();

        panel.classList.add("active");
    });

});

function removeActiveClass() {
    panels.forEach((panel) => {
        //remove all active panel classes
        panel.classList.remove("active");

    });
}