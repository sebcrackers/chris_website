// Modal Popup
const modal = document.getElementById("bcc-myModal");
const closeBtn = document.getElementsByClassName("bcc-close")[0];

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

closeBtn.onclick = closeModal;

function checkAndShowModal() {
  const lastShown = localStorage.getItem('bcc-modalLastShown');
  const now = new Date().getTime();

  if (!lastShown || now - lastShown > 12 * 60 * 60 * 1000) { // 12 hours in milliseconds
    setTimeout(showModal, 5000); // Show after 5 seconds
    localStorage.setItem('bcc-modalLastShown', now);
  }
}

checkAndShowModal();