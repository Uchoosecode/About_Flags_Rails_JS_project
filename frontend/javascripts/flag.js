class Flag {
  static all = [];
  
  constructor(data) {
    this.id = data.id
    this.name = data.name;
    this.description = data.description;
    this.year_created = data.year_created;
    this.img = data.img;
    this.color = data.color_ids;
    this.save();
  }
  
  save() {
    Flag.all.push(this);
  }
}
document.querySelector("form").addEventListener("submit", createFlag);

async function createFlag(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const flagDescrp= document.getElementById('description').value;
  const yearCreated = document.getElementById('year_created').value;
  const slctColor = document.querySelectorAll("input")
  const color_ids = [];
  // finding the checked boxes and pushing them into an array(color_ids)
  for (let i = 0; i < slctColor.length; i++) {
    
    if (slctColor[i].checked == true) {
      color_ids.push(slctColor[i].id);
    }
    console.log(color_ids)
    }
    // converted the canvas to an image
    const flagURI = canvas.toDataURL();
    imgConverted.src = flagURI;
  
    const strongParams = {
      flag: {
        name,
        description: flagDescrp,
        year_created: yearCreated,
        img: flagURI,
        color_ids: color_ids
      }
    }
    sendHTTPRequest('POST', 'http://localhost:3000/api/v1/flags', strongParams);
  
    showFlags();

    clearCanvas();
    
  }

  function showFlags() {
    Flag.all = []; 
    const flagList = document.getElementById("flag_list");
    
    sendHTTPRequest('GET', 'http://localhost:3000/api/v1/flags').then(flagData => {
      Flag.all = flagData.map(flag => new Flag(flag));

        Flag.all.forEach(data => {
          
          let div = document.createElement("div");
          let h3 = document.createElement("h3");
          let h2 = document.createElement("h2");
          
          div.id = "new-flag";
          h2.id = "new-flag-name";
          h3.id = "new-flag-info";

          h2.textContent = data.name;
          h3.textContent = data.description + data.year_created;
          
          div.appendChild(h2);
          div.appendChild(h3);
          flagList.appendChild(div);
        });
    });
  };

  function clearCanvas() {
    const slctColor = document.querySelectorAll("input")

    for (let i = 0; i < slctColor.length; i++) {
      slctColor[i].checked = false;
    };
    ctx.restore();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawCanvas();
  };