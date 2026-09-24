function updateView() {
   app.view.innerHTML = buildView();
}
updateView();

function buildView() {
   let view = "";
   view += buildInput();
   view += `
   <div>Message:${app.inputData}</div>
   <div>Encrypted:${app.outputData}</div>
   `;
   return view;
}

function buildInput() {
   return `
   <input oninput="app.inputData=this.value" type="text" placeholder="Write a secret message" value="${app.inputData}">
   <button onclick="buildOutput()">Check</button>
   <label class="switch">
      ${persistentCheckbox()}
      <span class="slider round"></span>
   </label>
   `;
}

function persistentCheckbox() {
   if (app.currentMode === "encrypt") {
      return `<input id="checkbox" onchange="switchMode()" type="checkbox">`;
   }
   if (app.currentMode === "decrypt") {
      return `<input checked id="checkbox" onchange="switchMode()" type="checkbox">`;
   }
}

function switchMode() {
   if (document.querySelector("#checkbox").checked) app.currentMode = "decrypt";
   if (!document.querySelector("#checkbox").checked) app.currentMode = "encrypt";
}

function buildOutput() {
   if (app.currentMode === "encrypt") app.outputData = encrypt(app.inputData);
   if (app.currentMode === "decrypt") app.outputData = decrypt(app.inputData);
   updateView();
}
