let collapse_icons = Array.from(document.querySelectorAll('.collapsible-icon'));
collapse_icons.forEach((icon)=> {
    icon.addEventListener('click', (event) =>{
        let commonAncestor = event.currentTarget.parentElement;
        commonAncestor.classList.toggle('collapsed');
    })
})
