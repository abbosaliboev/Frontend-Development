const loaded = () => console.log('Sahifa yuklandi');
const sidebar = document.getElementById("sidebar")
const contentTeacher = document.getElementById("contentTeacher");
const contentStudent = document.getElementById("contentStudent");
const header = document.getElementById("header");
const button = document.getElementsByClassName("btn");
const btnTeacher = document.getElementById("btnTeacher");
const btnStudents = document.getElementById("btnStudents");

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
    contentStudent.classList.add("darkMode");
    contentTeacher.classList.add("darkMode");
    header.classList.add("darkHeader");
}

const lightMode = () => {
    contentStudent.classList.remove("darkMode");
    contentTeacher.classList.remove("darkMode");
    header.classList.remove("darkHeader");
}

const showAddress = (addr) => {
    alert(addr);
}

const showTeacher = () => {
    btnStudents.classList.remove("active");
    btnTeacher.classList.add("active");

    contentTeacher.style.display = "block";
    contentStudent.style.display = "none";
}

const showStudent = () => {
    btnTeacher.classList.remove("active");
    btnStudents.classList.add("active");

    contentTeacher.style.display = "none";
    contentStudent.style.display = "block";
}