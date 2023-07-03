const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");
const loaderEl = document.querySelector(".loader");


try {
    btnEl.addEventListener("click", async function () {
        loaderEl.style.display = "block";
        btnEl.disabled = true;
        animeImgEl.src =
          "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif";
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "updating...";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerHTML = data.artist;
        if(animeNameEl.innerHTML==="unknown"){
            animeNameEl.innerHTML="name is not available";
        }else{
            animeNameEl.innerHTML = animeNameEl.innerHTML;
        }
        btnEl.disabled = false;
        btnEl.innerHTML = "GET ANOTHER ANIME";
        loaderEl.style.display = "none";
      });
    
} catch (error) {
    console.log(error);
    animeNameEl.innerHTML="an error happen please try again later";
}
