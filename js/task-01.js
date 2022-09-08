const refCategories = document.querySelector("#categories");
const arrayCategories = refCategories.children;

console.log(`Number of categories: ${arrayCategories.length}`);
console.log("");

for (const category of arrayCategories) {
  console.log("Category: " + category.firstElementChild.textContent);
  console.log("Elements: " + category.querySelectorAll("li").length);
  console.log("");
}
