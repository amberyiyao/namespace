var ZHOU0160 = {
    init: function init() {
        let Div = document.createElement("div");
        Div.className = "box";
        Div.textContent = "zhou0160";
        document.getElementById("boxes").appendChild(Div);

        Div.addEventListener("click", cursorClick);
        Div.addEventListener("mouseover", mouseOver);
        Div.addEventListener("mouseout", mouseOut);

        function cursorClick() {
            this.style.borderColor = "#53e6c2";
            this.style.backgroundColor = "#ea9492";
        }

        function mouseOver(e) {
            e.target.classList.toggle("highlight");
        }

        function mouseOut(e) {
            e.target.classList.toggle("highlight");
            e.target.removeAttribute('style');
        }
    }
};
