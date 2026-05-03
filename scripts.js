const form = document.getElementById("contactForm");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

message.addEventListener("input", () => {
  if (message.value.trim().length > 0) {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (message.value.trim().length === 0) {
    document.getElementById("submitErrorMessage").classList.remove("d-none");
    return;
  }

  document.getElementById("submitErrorMessage").classList.add("d-none");
  document.getElementById("submitSuccessMessage").classList.remove("d-none");
});
