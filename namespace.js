document.addEventListener("DOMContentLoaded", ZHOU0160.init);

var ZHOU0160 = {
    init: function () {
        let Div = document.createElement("div");
        Div.className = "box";
        Div.textContent = "zhou0160";
        document.getElementById("boxes").appendChild(Div);

        Div.addEventListener("click", ZHOU0160.circleClick);
        Div.addEventListener("mouseover", ZHOU0160.mouseOver);
        Div.addEventListener("mouseout", ZHOU0160.mouseOut);
    },

    circleClick: function () {
        this.style.borderColor = "#53e6c2";
        this.style.backgroundColor = "#ea9492";
        console.log(this);
    },

    mouseOver: function (e) {
        e.target.classList.toggle("highlight");
        console.log(e);
        console.log(e.target);
    },

    mouseOut: function (e) {
        e.target.classList.toggle("highlight");
        e.target.removeAttribute('style');
        console.log(e);
        console.log(e.target);

    }
}
