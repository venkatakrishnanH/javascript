//secting button
var button=document.querySelector(".add_button")
var popup_message=document.querySelector(".popup")
var add_book=document.querySelector(".addbook")

button.addEventListener("click",function(){
    popup_message.style.display="block"
    add_book.style.display="block"
})

//selecting cancel button
var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popup_message.style.display="none"
    add_book.style.display="none"
})

//select add, div,BookTitle,
var add= document.getElementById("add")
var container=document.querySelector(".container")
var BookTitle=document.getElementById("Book_Title")
var BookAuthor=document.getElementById("Book_Author")
var Bookdescription=document.getElementById("Book_description")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2 class="h2">${BookTitle.value}</h2>
    <h5>${BookAuthor.value}</h5>
    <p>${Bookdescription.value}</p>
    <button class="bt1" onclick="remove(event)">Delete</button>`

    container.append(div)
    popup_message.style.display="none"
    add_book.style.display="none"
    
    BookAuthor.value=""
    BookTitle.value=""
    Bookdescription.value=""
})

function remove(event)
{
    event.target.parentElement.remove()
}


