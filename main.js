const input = document.querySelector("#input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

generate.addEventListener("click", () => {
  let url = input.value;
  const apiKey = "8943b7fd64cd8b1770ff5affa9a9437b";
  fetch(
    `https://www.shareaholic.com/v2/share/shorten_link?apikey=${apiKey}&url=${url}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      input.value = data.data;
    });
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  copy.innerHTML = "Copied";
});
