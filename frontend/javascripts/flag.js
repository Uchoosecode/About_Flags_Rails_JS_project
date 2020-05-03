class Flag {
  static all = [];
  
  constructor(data) {
    this.id = data.id
    this.name = data.name;
    this.description = data.description;
    this.year_created = data.year_created;
    this.image = data.image;
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
        image: flagURI,
        color_ids: color_ids
      }
    }
    
    sendHTTPRequest('POST', 'http://localhost:3000/api/v1/flags', strongParams
    ).then(responseData => {
      clearCanvas();
      showFlags();
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data);
    });
  
    
  }
  

  function showFlags() {
    Flag.all = []; 
    const flagList = document.getElementById("flag_list");
    
    sendHTTPRequest('GET', 'http://localhost:3000/api/v1/flags').then(flagData => {
      Flag.all = flagData.map(flag => new Flag(flag));

        Flag.all.forEach(data => {
          
          let div = document.createElement("div");
          let img = document.createElement("img");
          let h3 = document.createElement("h3");
          let h2 = document.createElement("h2");
          
          div.id = "new-flag";
          h2.id = "new-flag-name";
          h3.id = "new-flag-info";

          h2.textContent = data.name;
          h3.textContent = data.description + data.year_created;
          img.setAttribute("src", data.image);

          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(img);
          flagList.appendChild(div);
        });
    });
  };

  function clearCanvas() {
    const slctColor = document.querySelectorAll("input");

    for (let i = 0; i < slctColor.length; i++) {
      slctColor[i].checked = false;
    };
    ctx.restore();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawCanvas();
  };
 
  sortFlag.addEventListener("click", function sortFlags() {
    Flag.all = []; 
    const flagList = document.getElementById("flag_list");
    // removing the first list of Flags
    while(flagList.firstChild) {
      flagList.removeChild(flagList.firstChild);
      }
    // creating the variable for sorting
    const comparing = (a, b) => {
      // must return 1, 0, -1
    
      if (a.name > b.name) {
        return 1;
      }
      else if (b.name > a.name) {
        return -1;
      }
      else {
        return 0;
      }
    }
    
    sendHTTPRequest('GET', 'http://localhost:3000/api/v1/flags').then(flagData => {
      Flag.all = flagData.sort(comparing).map(flag => new Flag(flag));

        Flag.all.forEach(data => {
          
          let div = document.createElement("div");
          let img = document.createElement("img");
          let h3 = document.createElement("h3");
          let h2 = document.createElement("h2");
          
          div.id = "new-flag";
          h2.id = "new-flag-name";
          h3.id = "new-flag-info";

          h2.textContent = data.name;
          h3.textContent = data.description + data.year_created;
          img.setAttribute("src", data.image);

          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(img);
          flagList.appendChild(div);
        });
    });
  });
    
  