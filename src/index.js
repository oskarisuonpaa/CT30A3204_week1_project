import "./styles.css";

const entryContainer = document.querySelector(".container");

const createEntry = async (breed, wikiTitle) => {
  const entryItem = document.createElement("div");
  entryItem.className = "wiki-item";
  const entryHeader = document.createElement("h1");
  entryHeader.className = "wiki-header";
  const entryContent = document.createElement("div");
  entryContent.className = "wiki-content";
  const entryText = document.createElement("p");
  entryText.className = "wiki-text";
  const entryImageContainer = document.createElement("div");
  entryImageContainer.className = "img-container";
  const entryImage = document.createElement("img");
  entryImage.className = "wiki-img";

  const response1 = await fetchBreedSummary(wikiTitle);

  entryHeader.innerHTML = breed;
  entryText.innerHTML = response1.extract;

  const response2 = await fetchBreedImage(breed);
  entryImage.src = response2.message;

  entryItem.appendChild(entryHeader);
  entryContent.appendChild(entryText);
  entryImageContainer.appendChild(entryImage);
  entryContent.appendChild(entryImageContainer);
  entryItem.appendChild(entryContent);

  entryContainer.appendChild(entryItem);
};

const fetchBreedImage = async (breed) => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`
  );
  return response.json();
};

const fetchBreedSummary = async (wikiTitle) => {
  const response = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle.toLowerCase()}`
  );
  return response.json();
};

createEntry("Akita", "Akita_(dog)");
createEntry("Shiba", "Shiba_(dog)");
createEntry("Dalmatian", "Dalmatian_(dog)");
createEntry("Chow", "Chow_(dog)");
createEntry("Malamute", "Malamute");
