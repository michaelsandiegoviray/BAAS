//event listener to run once Button is clicked
document.querySelector("button").addEventListener("click", getFetch);

// Adder for how many times clicked
document.querySelector("button").addEventListener("click", clickCount);
//fetch for get biriyani
function getFetch() {
  const url = `https://biriyani.anoram.com/get`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.getElementById("biriyani").src = data.image;
      document.querySelector("button").innerText = "Load Another";
      document.querySelector("h4").innerText = `Current image: ${data.image}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

let numOfClicks = 0;

function clickCount() {
  numOfClicks += 1;
  document.getElementById(
    "counter"
  ).innerText = `How many dishes: ${numOfClicks}`;
}
