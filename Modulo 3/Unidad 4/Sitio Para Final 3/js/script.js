const stock = document.getElementsByClassName('stock')
    //console.log(stock[0].innerText)

for (index = 0; index < stock.length; index++) {
    if (stock[index].innerText == "Sin Stock") {
        stock[index].style.backgroundColor = "red"
    }
}