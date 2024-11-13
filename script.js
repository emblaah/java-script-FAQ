// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.currentTarget;
  element.classList.toggle("active");

  const icon = element.querySelector("i");
  if (element.classList.contains("active")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}

async function getFAQ() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json(); // array med all data

  const questionSection = document.getElementById("questionSection");

  data.forEach((title) => {
    const sectionTitle = document.createElement("li"); // skapar en div där "frågan" ska vara
    const descriptionSection = document.createElement("div"); // skapar en div där "svaren" ska vara

    sectionTitle.innerHTML = `<p><i class="fa-solid fa-plus"></i> ${title.title}</p>`; // hur titeln på frågan ska visas

    descriptionSection.innerHTML = `${title.body}`; // hur svaret på frågan ska visas
    descriptionSection.classList.add("description"); // svaren på frågan läggs in i classen "description" för att inte visas förrän man trycker
    descriptionSection.addEventListener("click", (e) => e.stopPropagation()); // Svaren ska inte lyssna på click

    sectionTitle.classList.add("title");

    sectionTitle.appendChild(descriptionSection); // visar svaren på sidan under själva frågan

    sectionTitle.addEventListener("click", toggle);

    questionSection.appendChild(sectionTitle); // visar frågan på sidan, "questionElement" är kopplad till Eventlistener och lyssnar på click
  });

  console.log(data); // för att kunna se arrayen i consolen
}

getFAQ();

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// section1Element.addEventListener("click", toggle);

// const section2Element = document.getElementById("section2");
// section2Element.addEventListener("click", toggle);

// const section3Element = document.getElementById("section3");
// section3Element.addEventListener("click", toggle);
