var ZHOU0160 = {
    init: function init() {
        let Div = document.createElement("div");
        Div.className = "box";
        Div.textContent = "zhou0160";
        document.getElementById("boxes").appendChild(Div);

<<<<<<< HEAD
        Div.addEventListener("click", cursorClick);
        Div.addEventListener("mouseover", mouseOver);
        Div.addEventListener("mouseout", mouseOut);

=======
        Div.addEventListener("click", ZHOU0160.cursorClick);
        Div.addEventListener("mouseover", ZHOU0160.mouseOver);
        Div.addEventListener("mouseout", ZHOU0160.mouseOut);
    },

    cursorClick: function () {
        this.style.borderColor = "#53e6c2";
        this.style.backgroundColor = "#ea9492";
    },
>>>>>>> b04a5eee61c6e1de940137c8c09b858e877802a3

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
