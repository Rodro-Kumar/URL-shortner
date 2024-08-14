const input = document.querySelector("#input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

generate.addEventListener("click", async () => {
  let url = input.value;
  const apiKey = "8943b7fd64cd8b1770ff5affa9a9437b";

  const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
  const data = await response.text();

  input.value = data;

  // fetch(
  //   `https://www.shareaholic.com/v2/share/shorten_link?url=${url}&apikey=${apiKey}`
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     input.value = data.data;
  //   });
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  copy.innerHTML = "Copied";
  setInterval(() => {
    copy.innerHTML = "Copy";
  }, 2000);
});
