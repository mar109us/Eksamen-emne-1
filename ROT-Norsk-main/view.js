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
   <button onclick="buildOutput('encrypt')">Encrypt</button>
   <button onclick="buildOutput('decrypt')">Decrypt</button>
   `;
}

function buildOutput(mode) {
   if (mode === "encrypt") app.outputData = encrypt(app.inputData);
   if (mode === "decrypt") app.outputData = decrypt(app.inputData);
   updateView();
}
