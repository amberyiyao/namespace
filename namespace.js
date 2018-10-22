document.addEventListener("DOMContentLoaded", init);


var zhou0160 = {
    start: function init() {
        let Div = document.createElement("div");
        Div.className = "box";
        Div.textContent = "zhou0160";
        document.getElementById("boxes").appendChild(Div);

        Div.addEventListener("click", circleClick);
        Div.addEventListener("mouseover", mouseOver);
        Div.addEventListener("mouseout", mouseOut);
    }
}

function circleClick() {
    this.style.borderColor = "#53e6c2";
    this.style.backgroundColor = "#ea9492";
    console.log(this);
}

function mouseOver(e) {
    e.target.classList.toggle("highlight");
    console.log(e);
    console.log(e.target);
}

function mouseOut(e) {
    e.target.classList.toggle("highlight");
    e.target.removeAttribute('style');
    console.log(e);
    console.log(e.target);

}
