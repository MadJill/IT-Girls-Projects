/*const renaultModels = [
    {name:`simbol`, price:100},
    {name:`logan`, price:120},
    {name:`megane`, price:150}
]
const brand = document.getElementById(`brand`);

const onBrandChange = () => {
 const indexOfChosen = brand.selectedIndex;
 const chosenBrand = brand.options[indexOfChosen].innerText;
debugger
}*/

const brandSelect = document.getElementById("brand");
const modelDiv = document.getElementById("modelDiv");
const modelSelect = document.getElementById("model");
const fuelDiv = document.getElementById("fuel");
const fuelRadios = document.querySelectorAll('input[name="fuel"]');
const volumeInput = document.getElementById("V");
const newoldRadios = document.querySelectorAll('input[name="newold"]');
const stateDiv = document.getElementById("stateDiv");
const stateRadios = document.querySelectorAll('input[name="state"]');
const calculateBtn = document.querySelector('button[type="button"]');

const models = {
  1: ["Clio", "Megane", "Captur"],
  2: ["Corsa", "Astra", "Insignia"],
  3: ["3", "6", "CX-5"],
  4: ["XE", "XF", "F-PACE"]
};

function onBrandChange() {
  const brand = Number(brandSelect.value);
  if (brand > 0) {
    modelDiv.classList.remove("invisible");
    modelDiv.classList.add("visible");
    modelSelect.innerHTML = "";
    models[brand].forEach(model => {
      const option = document.createElement("option");
      option.text = model;
      modelSelect.add(option);
    });
  } else {
    modelDiv.classList.remove("visible");
    modelDiv.classList.add("invisible");
  }
}

function onNewoldChange() {
  const newoldValue = document.querySelector('input[name="newold"]:checked').value;
  if (newoldValue === "Old") {
    stateDiv.classList.remove("invisible");
    stateDiv.classList.add("visible");
  } else {
    stateDiv.classList.remove("visible");
    stateDiv.classList.add("invisible");
  }
}

brandSelect.addEventListener("change", onBrandChange);
newoldRadios.forEach(radio => radio.addEventListener("change", onNewoldChange));

calculateBtn.addEventListener("click", () => {
  const brand = Number(brandSelect.value);
  const model = modelSelect.value;
  const fuel = document.querySelector('input[name="fuel"]:checked').value;
  const volume = Number(volumeInput.value);
  const newold = document.querySelector('input[name="newold"]:checked').value;
  const state = document.querySelector('input[name="state"]:checked') ? document.querySelector('input[name="state"]:checked').value : "";
  const payment = document.querySelector('input[name="payment"]:checked') ? document.querySelector('input[name="payment"]:checked').value : "";
  
  console.log("Brand:", brand);
  console.log("Model:", model);
  console.log("Fuel:", fuel);
  console.log("Volume:", volume);
  console.log("New/Old:", newold);
  console.log("State:", state);
  console.log("Payment:", payment);
});
