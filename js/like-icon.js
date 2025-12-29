var toggleSpanArrey = document.querySelectorAll('.like-icon');
for(var toggleSpan of toggleSpanArrey){
    toggleSpan.addEventListener('click', favoritee);
    console.dir(toggleSpan);
    
}

function favoritee(){
    if(this.innerText === "favorite"){
        this.innerText = "bookmark_heart";
    } else {
        this.innerText = "favorite";
}
}