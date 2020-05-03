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
                let checkbox = document.createElement("input");
                
                label.setAttribute('for', `color-${color.name}`);
                label.innerText = `|  ${color.name}`;
                
                checkbox.id = `${color.id}`;
                checkbox.type = "checkbox";
                checkbox.className = "fillStyle";
                checkbox.onclick = function colorChange() {
                
                color_events.push(event.toElement);
                   
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
                else if (shape_events[shape_events.length-1].innerText == "BACKGROUND") {
                    ctx.restore();
                    ctx.fillStyle = color_events[color_events.length-1].value;
                    ctx.fillRect(0, 0, WIDTH, HEIGHT);
                }
                else {
                message = alert("You need to pick a shape first");
                }
            };
                checkbox.name = "color";
                checkbox.value = color.name;
                div.appendChild(label);
                div.appendChild(checkbox);
            });
        });
    };

    