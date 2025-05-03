const loaded = () => console.log('Sahifa yuklandi');
const sidebar = document.getElementById("sidebar");
const selected = document.getElementById("selected");
const content = document.getElementById("content");
const header = document.getElementById("header");
const button = document.getElementsByClassName("btn");

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


const darkMode = () => {
    content.classList.add("darkMode");
    header.classList.add("darkHeader");
}

const lightMode = () => {
    content.classList.remove("darkMode");
    header.classList.remove("darkHeader");
}

const showAddress = (addr) => {
    alert(addr);
}