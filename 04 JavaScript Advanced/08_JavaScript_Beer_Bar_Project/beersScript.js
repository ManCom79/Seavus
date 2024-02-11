let dropdownFive = document.getElementById("dropdown-item-5");
let dropdownTen = document.getElementById("dropdown-item-10");
let dropdownTwenty = document.getElementById("dropdown-item-20");
let btnPrevious = document.getElementById("btnPrevious");
let btnNext = document.getElementById("btnNext");
let paginationCount = document.getElementById("paginationCount");
let count = 1;
let maxPagesPerView = 0
let currentCardCounts = 0;

async function createCards(data, index) {
  let cardHolderHtml = document.getElementById("cardsHolder");
  cardHolderHtml.innerHTML = "";
  console.log(`Data length is ${data.length}`);
  for (let i = 0; i < data.length; i++) {
    cardHolderHtml.innerHTML += `
        <div id="beerCard${i}" class="card" style="width: 15rem;">
            <img id="cardImage" src="${data[i].image_url}" alt="Card image cap">
            <div class="card-body">
              <h5 id="cardTitle" class="card-title">${data[i].name}</h5>
              <p id="cardDescription" class="card-text">${data[i].description}</p>
              <a href="http://www.google.com" class="btn btn-primary">More details</a>
            </div>
        </div>
    `;
  }
}

dropdownFive.addEventListener("click", async () => {
  let url = "https://api.punkapi.com/v2/beers?page=1&per_page=5";
  let response = await fetch(url);
  let data = await response.json();
  //   console.log(data);
  //   console.log(data[0].description);
  await createCards(data);
  currentCardCounts = 5;
  paginationCount.innerHTML = `Page 1/65`;
  btnNext.style.visibility = "visible";
  btnPrevious.style.visibility = "hidden";
  count = 1;
  maxPagesPerView = 65
});

dropdownTen.addEventListener("click", async () => {
    let url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";
    let response = await fetch(url);
    let data = await response.json();
    //   console.log(data);
    //   console.log(data[0].description);
    await createCards(data);
    currentCardCounts = 10;
    paginationCount.innerHTML = `Page 1/33`;
    btnNext.style.visibility = "visible";
    btnPrevious.style.visibility = "hidden";
    count = 1;
    maxPagesPerView = 33
  });

btnNext.addEventListener("click", async () => {
  count = count + 1;
  let url = `https://api.punkapi.com/v2/beers?page=${count}&per_page=${currentCardCounts}`;
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  // console.log(data[0].description);
  await createCards(data, currentCardCounts);
  paginationCount.innerHTML = `Page ${count}/${maxPagesPerView}`;
  btnPrevious.style.visibility = "visible";
  if (count === maxPagesPerView) {
    btnNext.style.visibility = "hidden";
  }
});

btnPrevious.addEventListener("click", async () => {
  count = count - 1;
  let url = `https://api.punkapi.com/v2/beers?page=${count}&per_page=${currentCardCounts}`;
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  // console.log(data[0].description);
  await createCards(data, currentCardCounts);
  paginationCount.innerHTML = `Page ${count}/${maxPagesPerView}`;
  btnPrevious.style.visibility = "visible";
  if (count === 1) {
    btnPrevious.style.visibility = "hidden";
  }
  if (count !== maxPagesPerView) {
    btnNext.style.visibility = "visible";
  }
});

// dropdownTwenty.addEventListener("click", async () => {
//   let url = "https://api.punkapi.com/v2/beers?page=1&per_page=20";
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   // console.log(data[0].description);
//   await createCards(data, 20);
// });
