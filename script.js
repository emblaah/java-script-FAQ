// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

const questionDiv = document.getElementById("questionSection");
questionDiv.addEventListener("click", toggle);


async function getFAQ() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json(); // array med all data

  data.forEach((title) => {
    const sectionTitle = document.createElement("li"); // skapar en div där "frågan" ska vara
    const descriptionSection = document.createElement("div"); // skapar en div där "svaren" ska vara
    
    sectionTitle.innerHTML = `<p>${title.title}</p>`; // hur titeln på frågan ska visas

    descriptionSection.innerHTML = `${title.body}`; // hur svaret på frågan ska visas
    descriptionSection.classList.add("description"); // svaren på frågan läggs in i classen "description" för att inte visas förrän man trycker
    sectionTitle.classList.add("title");

    descriptionSection.addEventListener("click", (e) => e.stopPropagation()); // Svaren ska inte lyssna på click

    questionDiv.appendChild(sectionTitle); // visar frågan på sidan, "questionElement" är kopplad till Eventlistener och lyssnar på click
    sectionTitle.appendChild(descriptionSection); // visar svaren på sidan under själva frågan
  });

  console.log(data); // för att kunna se arrayen i consolen
}

getFAQ();
