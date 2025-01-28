const cards = document.querySelectorAll('.card');
cards.forEach((card)=>{
        const image = card.querySelector(".card-img-top");
        const title = image.getAttribute("data-title");  
        const description = image.getAttribute("data-description");     
        card.querySelector(".card-title").innerHTML = title;
        card.querySelector(".card-text").innerHTML = description; 
});