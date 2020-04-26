class Color {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }

}

    color_events = []

    const colorBtn = document.getElementById("select_color");

    function grabColor() { 

        sendHTTPRequest('GET', 'http://localhost:3000/api/v1/colors').then(colorData => {
            
            colorData.forEach(data => {

                let color = new Color(data);
                let div = colorBtn;
                let label = document.createElement("label");
                let radio = document.createElement("input");
                label.setAttribute('for', `color-${color.name}`);
                // debugger;
                label.innerText = color.name;
                radio.id = `${color.name}`;
                radio.type = "radio";
                radio.className = "fillStyle";
                radio.onclick = function colorChange() {
                    color_events.push(event.toElement);
                    // debugger;
        if(shape_events[shape_events.length-1].innerText == "SQUARE") {
            ctx.restore();
            ctx.fillStyle = color_events[color_events.length-1].value;
            ctx.fillRect(0, 0, WIDTH/2, HEIGHT);
        }
        else if (shape_events[shape_events.length-1].innerText == "CIRCLE") {
            ctx.restore();
            ctx.fillStyle = color_events[color_events.length-1].value;
            ctx.beginPath();
            ctx.arc(WIDTH/2, HEIGHT/2, 125, 0, Math.PI * 2);
            ctx.fill();
        }
        else if (shape_events[shape_events.length-1].innerText == "TRIANGLE"){
            ctx.restore();
            ctx.fillStyle = color_events[color_events.length-1].value;
            ctx.beginPath();
            ctx.moveTo(250, 125);
            ctx.lineTo(375, 250);
            ctx.lineTo(125, 250);
            ctx.fill();
        }
        else {
           message = alert("You need to my a shape first");
        }
    };
                radio.name = "color";
                radio.value = color.name;
                div.appendChild(label);
                div.appendChild(radio);
            });
        });
    };

    // function colorChange() {
    //     if(shape_events[shape_events.length-1].innerText == "SQUARE") {
    //         ctx.restore();
    //         ctx.fillStyle = "red";
    //         debugger;
    //         ctx.fillRect(0, 0, WIDTH/2, HEIGHT);
    //     }
    //     else if (shape_events[shape_events.length-1].innerText == "CIRCLE") {
    //         ctx.restore();
    //         ctx.fillStyle = "gold";
    //         ctx.beginPath();
    //         ctx.arc(WIDTH/2, HEIGHT/2, 125, 0, Math.PI * 2);
    //         ctx.fill();
    //     }
    //     else if (shape_events[shape_events.length-1].innerText == "TRIANGLE"){
    //         ctx.restore();
    //         ctx.fillStyle = "blue";
    //         ctx.beginPath();
    //         ctx.moveTo(250, 125);
    //         ctx.lineTo(375, 250);
    //         ctx.lineTo(125, 250);
    //         ctx.fill();
    //     }
    //     else {
    //        message = alert("You need to my a shape first");
    //     }
    // };
    
colorBtn.addEventListener("click", function () {
     let grabbed = document.getElementsByClassName("fillStyle")

    console.log(grabbed)
});


