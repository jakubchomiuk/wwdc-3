let nav = document.querySelector('.nav');
let nav_container = document.querySelector('.nav_container');

window.onscroll = () => {
    const y = window.scrollY;
    const scrolledClass = 'scrolled';
   
    // (y > 50) ? nav_container.classList.add(scrolledClass) : nav_container.classList.remove(scrolledClass);
    if(y > 50) {
        nav_container.classList.add(scrolledClass);
        
    } else {
        nav_container.classList.remove(scrolledClass);
    }
}


let show_menu_btn = document.querySelector('.nav_button');
const nav_icon = document.querySelector('.nav_icon');
const nav_list_mobile = document.querySelector('.nav_list_mobile')
const show_menu ='show_list';


show_menu_btn.addEventListener("click", (event) => { 
    event.preventDefault(); //funkcja która resetuje domyślne zachowanie 
    if(nav_icon.innerHTML == "menu"){
        nav_list_mobile.classList.add(show_menu);
        nav_icon.innerHTML = "close";
    } else {
        nav_list_mobile.classList.remove(show_menu);
        nav_icon.innerHTML = "menu";
    }
    
})