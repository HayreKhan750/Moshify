    let collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(item => item.onclick = () => {
        item.classList.toggle('collapsible--expanded');
    })

    // collapsibles.forEach((item) =>
    //     item.addEventListener("click", function () {
    //         this.classList.toggle("collapsible--expanded");
    //     })
    // );



