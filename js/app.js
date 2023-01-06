function findElement(element, parent = document) {
  return parent.querySelector(element);
}

const elForm = findElement("#form");
const elArea = findElement("#textArea");
const elText = findElement("#long-word");
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
