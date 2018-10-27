// Helper-Functions
// toggle function
function toggleStyle(el, prop, style1, style2) {
    el.style[prop] = el.style[prop] === style1 ? style2 : style1;
}

document.querySelector('.menu').addEventListener('click', el => {
    const nav_main_mobile = document.querySelector('.navbar-mobile');
    toggleStyle(nav_main_mobile, 'display', 'block', 'none');
})

document.querySelectorAll('.hidden-show').forEach( el => { 
    el.addEventListener('click', click_ev => {
        click_ev.preventDefault();
        console.log(click_ev.toElement);
        const click_ele = click_ev.toElement;
        const click_parent = click_ele.parentElement;
        click_parent.nextElementSibling.style.display="block";
        click_parent.style.display="none";
    })
});
/* document.querySelectorAll('.hidden-show').addEventListener('click', el => {
    console.log(el.toElement);
    const click_ele = el.toElement;
    const hidden_div = click_ele.parentElement;
    // const hidden_div = 
    hidden_div.nextElementSibling.style.display="block";
}) */