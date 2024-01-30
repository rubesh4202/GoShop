var searchtext = document.getElementById("searchbar");
var prodcontainer = document.querySelector(".products");
var elements = prodcontainer.querySelectorAll("div");

searchtext.addEventListener("keyup", function()
{
    var enteredtext = event.target.value.toUpperCase();

    for(var i = 0; i<elements.length; i++)
    {
        var productname = elements[i].querySelector("h4").textContent.toUpperCase();
        if(productname.indexOf(enteredtext) < 0)
        {
            elements[i].style.display = "none";
        }
        else
        {
            elements[i].style.display = "block";
        }
    }
}
)
