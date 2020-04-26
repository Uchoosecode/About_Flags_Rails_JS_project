class Flag {
    static = []

     constructor(data) {
         this.id = data.id
         this.name = data.name;
         this.description = data.description;
         this.year_created = data.year_created;
         this.img = data.img;
         this.save();
     }

     save() {
       Flag.all.push(this)
     }
}
document.querySelector("form").addEventListener("submit", createFlag);

async function createFlag(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const flagDescrp= document.getElementById('description').value;
    const yearCreated = document.getElementById('year_created').value;
    const slctColor = document.querySelectorAll("option")
    const color_ids = [];
    
    for (let i = 0; i < slctColor.length; i++) {
      if (slctColor[i].selected) {
        color_ids.push(slctColor[i].value);
      }
    }
  
    const strongParams = {
      flag: {
        name,
        description: flagDescrp,
        year_created: yearCreated,
        color_ids
      }
    }
  debugger;
    sendHTTPRequest('POST', 'http://localhost:3000/api/v1/flags', strongParams);
  
    showFlags();
  }

  function showFlags() {

    sendHTTPRequest('GET', 'http://localhost:3000/api/v1/flags').then(flagData => {
       
        flagData.forEach(data => {

            flag = new Flag(data);
            let showFlags = document.getElementById("flag-list");
            let div = document.createElement("div");
            div.value = data.name;
            div.innerText = data.name;
            
            showFlags.appendChild(div);
            console.log(div)
        });
    });
};