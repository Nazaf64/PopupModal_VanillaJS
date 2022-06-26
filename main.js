// Get modal element
modal  = document.getElementById('simpleModal');

// Get open modal button
modalBtn = document.getElementById('modalBtn');

// Get close button
closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Listen for esc key press
window.addEventListener('keyup', escapeClose);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

// Function to close modal if pressed esc key
function escapeClose(e) {
    if (e.keyCode === 27) {
        modal.style.display = 'none';
    }
}