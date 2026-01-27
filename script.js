
 const getBitcoin = async () => {

    const url = ("https://api.coindesk.com/v1/bpi/currentprice.json");
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    document.body.textContent = data;

}

console.log(getBitcoin());
