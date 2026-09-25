function updateView() {
   app.view.innerHTML = buildView();
   setActive();
   scrambleOutput();
}
updateView();

function buildView() {
   let view = buildInput() + displayMessage();
   return `<div class="content column center">${view}</div>`;
}

function buildInput() {
   return `
   <div class="row justifycenter">
      <div class="column">
         <input oninput="app.inputData=this.value" type="text" placeholder="Write a secret message" value="${app.inputData}">
         <div class="set-mode row center"> 
            ${persistentCheckbox()}
         </div>
         <button onclick="buildOutput()">CHECK</button>
      </div>
   </div>`;
}

function displayMessage() {
   if (app.inputData === "") return "";
   app.message = `
   <div class="message row justifycenter">
      <div id="message">${app.outputData}</div>
   </div>`;
   return app.message;
}

function persistentCheckbox() {
   let checked = "";
   if (app.currentMode === "encrypt") {
      checked = "";
   }
   if (app.currentMode === "decrypt") {
      checked = "checked";
   }
   return `
   <span id="encrypt">ENCRYPT</span>
   <label class="switch">
   <input ${checked} id="checkbox" onchange="switchMode()" type="checkbox">
   <span class="slider round"></span>
   </label>
   <span id="decrypt">DECRYPT</span>`;
}

function setActive() {
   const encrypt = document.querySelector("#encrypt");
   const decrypt = document.querySelector("#decrypt");
   if (app.currentMode === "encrypt") {
      encrypt.classList.add("active");
      decrypt.classList.remove("active");
   }
   if (app.currentMode === "decrypt") {
      encrypt.classList.remove("active");
      decrypt.classList.add("active");
   }
}

function switchMode() {
   const checkbox = document.querySelector("#checkbox");
   if (checkbox.checked) app.currentMode = "decrypt";
   if (!checkbox.checked) app.currentMode = "encrypt";
   setActive();
}

function buildOutput() {
   if (app.currentMode === "encrypt") app.outputData = encrypt(app.inputData);
   if (app.currentMode === "decrypt") app.outputData = decrypt(app.inputData);
   updateView();
}

async function scrambleOutput() {
   const timer = (ms) => new Promise((res) => setTimeout(res, ms));
   let message = document.getElementById("message");
   let textBuilder = "";
   for (let i = 0; i < app.outputData.length; i++) {
      for (let i = 0; i < 3; i++) {
         message.innerText = `${textBuilder}${alphabet.lower[randomize()]}${alphabet.upper[randomize()]}${alphabet.lower[randomize()]}`;
         await timer(15);
      }
      textBuilder += app.outputData[i];
      await timer(20);
   }
   if (app.outputData) message.innerText = app.outputData;
}

function randomize() {
   return Math.floor(Math.random() * alphabet.length);
}
