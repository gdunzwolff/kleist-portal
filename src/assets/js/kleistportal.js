// Helper-Functions
// toggle function
function toggleStyle(el, prop, style1, style2) {
    el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

document.querySelector('.menu').addEventListener('click', el => {
    const nav_main_mobile = document.querySelector('.navbar-mobile');
    toggleStyle(nav_main_mobile, 'display', 'block', 'none');
})