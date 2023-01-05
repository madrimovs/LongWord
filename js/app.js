const elForm = document.querySelector("#form");
const elArea = document.querySelector("#textArea");
const elText = document.querySelector("#long-word");
const arr = [];

// LONG WORD FORM
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let words = elArea.value.split(" ");
  let longest = elText.textContent;

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  arr.push(longest);
  console.log(arr);

  elText.textContent = longest;
  // elForm.reset();
});
