
let reset = document.querySelector('.reset');
let calculate = document.querySelector('.calculate');
let amount = document.querySelector('.amount');
let plusPeople = document.querySelector('.multiplyPeople');
let amountPerPerson = document.querySelector('#amountPerson')
let totalPerPerson = document.querySelector('#totalPerson')
let custom = document.querySelector('.custom')

amount.value = 0
plusPeople.value = 1

function calculateAll () {

let billAmount = parseFloat(amount.value)
let people = parseFloat(plusPeople.value)

const tipPercentage = getTipPercentage();

// Calculate tip amount
const tipAmount = billAmount * (tipPercentage / 100);

// Calculate amount per person
const perPerson = billAmount + tipAmount;

// Calculate total amount
const totalAmount = people * perPerson;

totalPerPerson.textContent = '$' + totalAmount
amountPerPerson.textContent = '$' + perPerson

} 

// Function to get tip percentage
function getTipPercentage() {
    // Get selected tip percentage
    let tipButton = document.querySelector('.tipBtn.selected');
    if (tipButton) {
        return parseFloat(tipButton.textContent);
      }
      // Get custom tip percentage
      const customTipPercentage = parseFloat(custom.value);
      if (!isNaN(customTipPercentage)) {
        return customTipPercentage;
      }
      // Default to 0% if no percentage is selected
      return 0;
}

  // Attach event listeners to tip buttons
  const tipButtons = document.querySelectorAll('.tipBtn');
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].addEventListener("click", function() {
      // Deselect all buttons
      for (let j = 0; j < tipButtons.length; j++) {
        tipButtons[j].classList.remove("selected");
      }
      // Select clicked button
      this.classList.add("selected");
    });
  }
calculate.addEventListener('click', calculateAll)




// Reset selected input
function resetBtn(){
    amountPerPerson.textContent = '$0';
    totalPerPerson.textContent = '$0';
    amount.value = 0;
    plusPeople.value = 1;
    custom.value = '';
    for (let j = 0; j < tipButtons.length; j++) {
      tipButtons[j].classList.remove("selected");
    }
  }
reset.addEventListener('click', resetBtn)