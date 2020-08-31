const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3

heading.style = "font-size:2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style = "color:red";
}

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color:yellow">New paragraph</p>`;

//Question 7

function myFunction(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

//myFunction(cats);

//Question 8

let finalHtml = "";
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";
    if (cats[i].age) {
      age = cats[i].age;
    }
    let html = `<div><h5>${cats[i].name}</h5><p>${age}</p></div>`;
    finalHtml += html;
  }
  return finalHtml;
}
