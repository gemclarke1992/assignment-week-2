console.log("Helloo");
console.log(document);
const displayedImage = document.querySelector(".display-img img");
const thumbBar = document.querySelector(".thumb-bar");

const images = [
  {
    filename: "welcomesign.jpg",
    alt: "black and white image of welcome to scotland sign in theh foreground, a car is driving in the background approaching a parked car with a scenic backdrop",
  },
  {
    filename: "bagpipes.jpg",
    alt: "image of an man wearing a traditional green jacket and  kilt  playingbagpipes outdoors",
  },
  {
    filename: "bridge.jpg",
    alt: "Image of bridge over a river on a sunny day with a small boat infront of the bridge and buildings in the background",
  },
  {
    filename: "cow.jpg",
    alt: "Highland cow with long horns and shaggy hair standing in a grassy field with trees in the background",
  },
  {
    filename: "flag.jpg",
    alt: "Image of the Scottish flag waving in the wind on a pole on top of a rocky hill with houses in the background",
  },
  {
    filename: "sea.jpg",
    alt: "Image of a rocky crevace with sea splashing against the rocks under a cloudy sky",
  },
  {
    filename: "shadow.jpg",
    alt: "Silhouette of a building on a hill with the sea in the background in the daytime",
  },
  {
    filename: "stones.jpg",
    alt: "A weathered stone monument with inscriptions, with greenery and sunlight",
  },
  {
    filename: "thistle.jpg",
    alt: "close-up image of a bee resting purple thistle framed by green leaves",
  },
  {
    filename: "statue.jpg",
    alt: "Statue of a man on a horse adorned with traffic cones on his head, set against a backdrop of buildings and a cloudy sky",
  },
];

const baseURL = "images/";
console.log(displayedImage);
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  newImage.tabIndex = "0";

  newImage.addEventListener("click", () => updateDisplayedImage(newImage));

  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(newImage);
    }
  });

  thumbBar.appendChild(newImage);
}

function updateDisplayedImage(imageElement) {
  displayedImage.src = imageElement.src;
  displayedImage.alt = imageElement.alt;
}
