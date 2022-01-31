
const stocksApple = document.querySelector('.stocks__apple');
fetch('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=73f2cd92e7ba56087ff66b2a96d12c8a')
    .then(response => response.json())
    .then(appl => {
        stocksApple.innerText = appl[0].price;


    });

const stocksAmd = document.querySelector('.stocks__amd');

fetch('https://financialmodelingprep.com/api/v3/quote-short/AMD?apikey=73f2cd92e7ba56087ff66b2a96d12c8a')
    .then(response => response.json())
    .then(amd => {
        console.log(amd[0].price);
        stocksAmd.innerText = amd[0].price;


    });

    const stocksMicrosoft = document.querySelector('.stocks__microsoft');
    fetch('https://financialmodelingprep.com/api/v3/quote-short/MSFT?apikey=73f2cd92e7ba56087ff66b2a96d12c8a')
    .then(response => response.json())
    .then(microsoft => {
        stocksMicrosoft.innerText = microsoft[0].price;


    });


    const stocksIntel = document.querySelector('.stocks__intel');
    fetch('https://financialmodelingprep.com/api/v3/quote-short/INTC?apikey=73f2cd92e7ba56087ff66b2a96d12c8a')
    .then(response => response.json())
    .then(intel => {
        stocksIntel.innerText = intel[0].price;


    });


    const main  = document.querySelector('.maim__stocks')
    const searchStocks  = document.querySelector('.main__search');
    const abbStocks = document.querySelector('.abb__stocks');


    abbStocks.addEventListener('click', () =>{
        const div = document.createElement('div')
        div.classList.add('main__stocks');
        div.innerText = searchStocks.value;
        main.appendChild(div);
        searchStocks.value  = ''

    });