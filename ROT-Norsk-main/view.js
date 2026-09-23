function updateView() {
   app.view.innerHTML = buildView();
}
updateView();

function buildView() {
   let view = ""
   view += buildInput()
   return view
}

function buildInput() {
   return `
   <input oninput="app.inputData=this.value" type="text">
   <button>Encrypt</button>
   <button>Decrypt</button>
   `
}
