whatDisplay('block', 'none', 'none', 'none', 'none', 'none');

var outerDiv = document.getElementsByClassName("dice")[0];

outerDiv.addEventListener('click', function (event) {
    // get random numbers between 1 to 6
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    console.log("randomNumber: " + randomNumber);

    switch (randomNumber) {
        case 1:
            whatDisplay('block', 'none', 'none', 'none', 'none', 'none');
            var d1 = document.getElementById('dot');
            d1.style.cssText = "margin: 35px;";
            break;

        case 2:
            whatDisplay('none', 'block', 'none', 'none', 'none', 'none');
            var d1 = document.getElementById('dot2');
            d1.style.cssText = "margin-top: 12px;margin-right: 12; margin-left: 12";

            var d2 = document.getElementById('dot3');
            d2.style.cssText = "margin-top: 12px;margin-right: 12; margin-left: 12";
            break;
        case 3:
            whatDisplay('none', 'none', 'block', 'none', 'none', 'none');
            var d1 = document.getElementById('dot4');
            d1.style.cssText = "margin-top: 12px;margin-right: 5; margin-left: 5";

            var d2 = document.getElementById('dot5');
            d2.style.cssText = "margin-top: 12px;margin-right: 5; margin-left: 5";

            var d3 = document.getElementById('dot6');
            d3.style.cssText = "margin-top: 12px;margin-right: 5; margin-left: 5";
            break;

        case 4:
            whatDisplay('none', 'none', 'none', 'block', 'none', 'none');
            var d1 = document.getElementById('dot7');
            d1.style.cssText = "margin-top: 15px;margin-right: 12; margin-left: 12;";

            var d2 = document.getElementById('dot8');
            d2.style.cssText = "margin-top: 15px;margin-right: 12; margin-left: 12;";

            var d3 = document.getElementById('dot9');
            d3.style.cssText = "margin-top: 15px;margin-right: 12; margin-left: 12;";

            var d4 = document.getElementById('dot10');
            d4.style.cssText = "margin-top: 15px;margin-right: 12; margin-left: 12;";
            break;

        case 5:
            whatDisplay('none', 'none', 'none', 'none', 'block', 'none');
            var d1 = document.getElementById('dot11');
            d1.style.cssText = "margin-top: 8px;margin-right: 12; margin-left: 12;";

            var d2 = document.getElementById('dot12');
            d2.style.cssText = "margin-top: 8px;margin-right: 12; margin-left: 12;";

            var d3 = document.getElementById('dot13');
            d3.style.cssText = "margin-top: 8px;margin-right: 33; margin-left: 33;";

            var d4 = document.getElementById('dot14');
            d4.style.cssText = "margin-top: 8px;margin-right: 12; margin-left: 12;";

            var d5 = document.getElementById('dot15');
            d5.style.cssText = "margin-top: 8px;margin-right: 12; margin-left: 12;";
            break;

        case 6:
            whatDisplay('none', 'none', 'none', 'none', 'none', 'block');
            var d1 = document.getElementById('dot16');
            d1.style.cssText = "margin-top: 8px;";

            var d2 = document.getElementById('dot17');
            d2.style.cssText = "margin-top: 8px;";

            var d3 = document.getElementById('dot18');
            d3.style.cssText = "margin-top: 8px;";

            var d4 = document.getElementById('dot19');
            d4.style.cssText = "margin-top: 8px;";

            var d5 = document.getElementById('dot20');
            d5.style.cssText = "margin-top: 8px;";

            var d6 = document.getElementById('dot21');
            d6.style.cssText = "margin-top: 8px;";
            break;
    }
});

function whatDisplay(c1, c2, c3, c4, c5, c6) {
    document.getElementById('div1').style.display = c1;
    document.getElementById('div2').style.display = c2;
    document.getElementById('div3').style.display = c3;
    document.getElementById('div4').style.display = c4;
    document.getElementById('div5').style.display = c5;
    document.getElementById('div6').style.display = c6;
}