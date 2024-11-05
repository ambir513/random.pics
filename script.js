const img = document.querySelector("img")
const btn = document.querySelector("#button");
const a = document.querySelector("#download")
const Fetch = document.querySelector("Fetch")

// fetch('https://api.thecatapi.com/v1/images/search#')
// .then((Response)=>Response.json())
// .then((json)=>{
//     console.log("got the data");
//     console.log(json.url);
//     img.src = json.url
//     a.setAttribute('href', json.url);

// })


const xhr = new XMLHttpRequest();
xhr.open('GET', "https://dog.ceo/api/breeds/image/random")
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data =  JSON.parse(this.responseText)
        console.log(data.message);
        img.src = data.message
        a.setAttribute('href', data.message);
    }
}
xhr.send()
