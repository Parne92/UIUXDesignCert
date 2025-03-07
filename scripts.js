// JavaScript for Modal
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("projectModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get all project elements
    var projects = document.getElementsByClassName("project");

    // Loop through each project and add click event
    for (var i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', function() {
            var title = this.querySelector('h3').innerText;
            var description = this.querySelector('p').innerText;

            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDescription').innerText = description;

            modal.style.display = "block";
        });
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});