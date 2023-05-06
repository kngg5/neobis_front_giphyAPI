
const main = document.querySelector(".main");
const input = document.querySelector("#giphy_name");
const api_key = `AIFx8rb2a9vH35WGBl1LuszIu1Tqo9ew`;

const createGiph = () => {
    const input = document.querySelector("#giphy_name").value;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${input}&limit=21`;    
    
    main.innerHTML= '';
    fetch(url)
        .then((response) => response.json())
        .then((gif) => {
           
            const gifItems = gif.data;
            gifItems.forEach((element) => {
                
                const gifImage = document.createElement("img");
                gifImage.classList.add("gifImg");
                gifImage.setAttribute("src",element.images.fixed_width.url);
                
               
                const gifContainer = document.querySelector(".main"); 
                gifContainer.append(gifImage);
            });
        })
        .catch((error) => {
            console.error(error);
        })
}

input.addEventListener("change", () => {
    createGiph()
});
createGiph()