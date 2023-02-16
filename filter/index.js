let imgItems = document.querySelectorAll('img');
let listItems = document.querySelectorAll('li');

listItems.forEach(list =>{
    list.addEventListener('click', () =>{
        listItems.forEach(list =>{
            list.className ="";
        })
        list.className = 'active'
        let value = list.innerText;
        imgItems.forEach(img =>{
            img.style.display = "none"
            if(img.getAttribute('data-filter') == value.toLowerCase() || value == "All"){
                img.style.display = "block"

            }
        })
    })
})