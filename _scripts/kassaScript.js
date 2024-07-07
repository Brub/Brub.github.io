function updateData(prijs, item){
    const element = document.getElementById("totaal");
    totaal = parseFloat(element.innerText) + prijs
    element.textContent= parseFloat(Math.round (totaal*100) / 100);

    var detailDiv = document.getElementById('detail')
    var span = document.createElement("span")
    span.innerHTML = item + "<br>"
    detailDiv.appendChild(span)
}
