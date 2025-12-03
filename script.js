// Function to Open Modal
function openModal(videoId) {
    const modal = document.getElementById("videoModal");
    const container = document.getElementById("videoContainer");
    
    // In a real scenario, you'd switch the video source based on the ID
    // For now, this just opens the modal
    modal.style.display = "block";
    
    console.log("Opening video for:", videoId);
}

// Function to Close Modal
function closeModal() {
    document.getElementById("videoModal").style.display = "none";
}

// Close modal if user clicks outside the video
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Optional: Add simple scroll animation
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.card, .project-card');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}