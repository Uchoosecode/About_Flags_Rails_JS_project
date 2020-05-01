document.addEventListener("DOMContentLoaded", init)

const WIDTH = 500;
const HEIGHT = 250;
const animate = window.requestAnimationFrame;

const btnDownload = document.querySelector("#btnDownload");
const imgConverted = document.getElementById("flag_img")
const canvas = document.getElementById("flag_canvas");  //access the canvas div
const ctx = canvas.getContext("2d")  //needed to give a 2D context to the shape
const colorShape = document.querySelector("option");

    let flag;

    shape_events = []; //saves the element of which shape is chosen

    const sendHTTPRequest = async (method, url, data) => {
        return response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: data ? { "Content-Type": 'application/json' } : {}
        }).then(response => {
                if (response.status >= 400) {
                    return response.json().then(errResData => {
                        const error = new Error("Something aint right!");
                        debugger;
                        error.data = errResData;
                        throw error
                    });
                }
                return response.json();
            });
    };
    

    function init() {
        grabColor();
        console.log("About A Flag in On")
        drawCanvas();
    }

    function drawCanvas() {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
            console.log(ctx)
    }
     
    createBackground.addEventListener("click",
    function createBackground() {
        ctx.restore
        ctx.fillStyle = "plum";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        shape_events.push(event.toElement);
    });

    clearCanvas.addEventListener("click", 
    function clearCanvas() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        drawCanvas();
    });

    createSquare.addEventListener("click",
    function createSquare() {
        ctx.restore();
         ctx.fillStyle = "steelblue";
         ctx.fillRect(0, 0, WIDTH/2, HEIGHT);
         console.log(event.toElement)
         shape_events.push(event.toElement);
    });
    
    createCircle.addEventListener("click",
    function createCircle() {
        ctx.restore();
        ctx.fillStyle = "palegreen";
        ctx.beginPath();
        ctx.arc(WIDTH/2, HEIGHT/2, 125, 0, Math.PI * 2);
        ctx.fill();
        shape_events.push(event.toElement);
    });
    
    createTriangle.addEventListener("click", 
    function createTriangle() {
        ctx.restore();
        ctx.fillStyle = "darkseagreen";
        ctx.beginPath();
        ctx.moveTo(250, 125);
        ctx.lineTo(375, 250);
        ctx.lineTo(125, 250);
        ctx.fill();
        shape_events.push(event.toElement);
    });
    
    btnDownload.addEventListener("click", function () {
        // IE/Edge Support (PNG Only)
        if(window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
            // Firefox requires the appendChild method
        }     
        else {
            const a = document.createElement("a");
            
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.download = "canvas-image.png";
            a.click();
            document.body.removeChild(a);
        }
    });
