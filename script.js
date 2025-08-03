// Beginning of code
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}

function filterMessages(category) {
  const messages = document.querySelectorAll("#inbox .message");

  messages.forEach(msg => {
    if (category === "all") {
      msg.style.display = "block";
    } else if (msg.dataset.category === category) {
      msg.style.display = "block";
    } else {
      msg.style.display = "none";
    }
  });

  // Switch to inbox so user can see results
  showPage("inbox");
}
let dndEnabled = false;

function enableDND() {
  dndEnabled = true;
  const messages = document.querySelectorAll("#inbox .message");
  messages.forEach(msg => msg.style.display = "none");
  alert("DND Enabled: All messages hidden.");
  showPage("inbox");
}

function disableDND() {
  dndEnabled = false;
  const messages = document.querySelectorAll("#inbox .message");
  messages.forEach(msg => msg.style.display = "block");
  alert("DND Disabled: All messages visible.");
  // End of code
  showPage("inbox");
}
