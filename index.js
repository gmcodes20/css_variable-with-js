const inputs = document.querySelectorAll(".controls input");

inputs.forEach(function (input) {
  input.addEventListener("change", updatePage);
  input.addEventListener("mousemove", updatePage);
});

function updatePage() {
  suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
