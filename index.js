const url = `https://icanhazdadjoke.com/slack`;

fetch(url).then(data => data.json()).then(jokes => {
    let joke = jokes.attachments[0].text;
    // console.log(joke)
    let joking = document.getElementById('joking');
    joking.textContent = joke
})