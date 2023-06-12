window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  document.addEventListener("copy", (event) => {
    event.preventDefault();
    popupMessage.innerText = "Conteúdo Bloqueado";
    popup.style.display = "block";
  });

  popup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});


