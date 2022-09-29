$(document).ready(function(){
    $('#file').change(function(event){
        var filePath = URL.createObjectURL(event.target.files[0]);
        document.getElementsByClassName("preview")[0].style.background = "url('" + filePath + "')";
        document.getElementsByClassName("preview")[0].style.backgroundSize = "100% 100%";
    });
});

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function myForm() {
    const file = document.getElementById("file").value.split(/(\\|\/)/g).pop()
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const desc = document.getElementById("description").value

    const display = document.getElementById("item-list")
    display.innerHTML += `
    <div class="card">
        <img src="./items/${file}" alt="" style="width: 100%;">
        <h1>${name}</h1>
        <p class="price">Rp ${price}</p>
        <p>${desc}</p>
        <p><button>Add to Cart</button></p>
    </div>`
}