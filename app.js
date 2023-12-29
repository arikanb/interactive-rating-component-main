document.addEventListener("DOMContentLoaded", function () {
  const ratingButtons = document.querySelectorAll(".rating-button");
  const container1 = document.getElementById("container-1");
  const container2 = document.getElementById("container-2");
  const thanksSpan = document.getElementById("thanks-span");
  const submitButton = document.getElementById("submit-button");
  ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedValue = this.textContent;
      thanksSpan.textContent = selectedValue;
      container1.style.display = "none";
      container2.style.display = "block";
    });
  });
  submitButton.addEventListener("click", function () {
    container1.style.display = "block";
    container2.style.display = "none";
  });
});
