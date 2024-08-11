let apiKey = "e92fb0a4";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("search-btn");

const getData = async (movie) => {
try{
    let fetchData = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${movie}`);
    let jsonData = await fetchData.json()
    console.log(jsonData);
    document.querySelector(".card").innerHTML="";
    searchInput.value ="";


    let div = document.createElement("div");
    div.classList.add("movieCard")
    div.innerHTML = `<img src="${jsonData.Poster}" alt="">
            <div class="cardText">
                <h1>${jsonData.Title}</h1>
                <p class="rating"> Ratings :<span>${jsonData.Ratings[0].Value}</span></p>
                <a href=""><span>${jsonData.Genre}</span></a>
                <p>Released :<span>${jsonData.Released}</span></p>
                <p>Runtime :<span>${jsonData.Runtime}</span></p>
                <p>Country :<span>${jsonData.Country}</span></p>
                <p>Language :<span>${jsonData.Language}</span></p>
                <p>Awards :<span>${jsonData.Awards}</span></p>
                <p>Plot :<span>${jsonData.Plot}</span></p>

            </div>`

    document.querySelector(".card").appendChild(div);
}
catch(error){
    document.querySelector(".card").innerHTML="<h1> Please Enter Valid Movie Name</h1>"
}

}
searchBtn.addEventListener("click", function () {
    let movieName = searchInput.value;
    if (movieName != "") {
        getData(movieName);
    } else {
        document.querySelector(".card").innerHTML = "<h1> First search movie name</h1>"
    }
});