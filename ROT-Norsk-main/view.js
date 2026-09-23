function updateView() {
   app.view.innerHTML = buildView();
}
updateView();

function buildView() {
   let view = "";
   view += buildInput();
   view += `<div>${app.outputData}</div>`;
   return view;
}

function buildInput() {
   return `
   <input oninput="app.inputData=this.value" type="text">
   <button onclick="buildOutput('encrypt')">Encrypt</button>
   <button onclick="buildOutput('decrypt')">Decrypt</button>
   `;
}

function buildOutput(mode) {
   if (mode === "encrypt") app.outputData = encrypt(app.inputData);
   if (mode === "decrypt") app.outputData = decrypt(app.inputData);
   updateView();
}
