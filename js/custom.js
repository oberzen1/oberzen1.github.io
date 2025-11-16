
const captions = [
  { title: "2010 - 2013", text: "Training as a cutting tool mechanic" },
  { title: "2013 - 2022", text: "Working as tool mechanic" },
  { title: "Project 2019", text: "Construction of a soldering machine with a robot arm." },
  { title: "Working 2022", text: "Automatic grinding machine for diamond tools" },
  { title: "since 2022", text: "Learning C/C++ and working as software developer" },
];

const carousel = document.getElementById("carouselJourney");
const captionTitle = document.getElementById("captionTitle");
const captionText = document.getElementById("captionText");

carousel.addEventListener("slide.bs.carousel", (event) => {
  const nextIndex = event.to; // Index of the next slide
  captionTitle.textContent = captions[nextIndex].title;
  captionText.textContent = captions[nextIndex].text;
});

function formSubmit() {
  window.alert("Sorry, not implemented at this time!");
}

function navigateTo(url) {
  window.location.href = url;
}