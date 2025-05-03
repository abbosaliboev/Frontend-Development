const loaded = () => console.log('Sahifa yuklandi');
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards");
const selected = document.getElementById("selected");
const content = document.getElementById("content");
const header = document.getElementById("header");

const toggleSidebar = () =>{
    console.log("sidebar toggle");
    if (sidebar.classList.contains("hide"))
        sidebar.classList.remove("hide");
    else{
        sidebar.classList.add("hide");
    }
};

const keyUp = (e) => {
    if (e.key === "Escape") sidebar.classList.add("hide");
}

for (const card of cards.children) {
    console.log(card.children[0]);
    card.children[0].ondblclick = () => {
        const menu = card.children[0].innerHTML;
        console.log(menu);
        selected.innerHTML = menu; 
    };
}
const darkMode = () => {
    content.classList.add("darkMode");
    header.classList.add("darkHeader");
}

const lightMode = () => {
    content.classList.remove("darkMode");
    header.classList.remove("darkHeader");
}
