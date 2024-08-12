/*API for menu Items */


// Order Cart
const itemList = document.querySelector("#addItem");
const addItemBtn = document.querySelector("#addItemBtn");

const addItemBtn1 = document.querySelector("#addItemBtn1");
const addItemBtn2 = document.querySelector("#addItemBtn2");
const addItemBtn3 = document.querySelector("#addItemBtn3");
const addItemBtn4 = document.querySelector("#addItemBtn4");
const addItemBtn5 = document.querySelector("#addItemBtn5");
const addItemBtn6 = document.querySelector("#addItemBtn6");
const addItemBtn7 = document.querySelector("#addItemBtn7");
const addItemBtn8 = document.querySelector("#addItemBtn8");
const addItemBtn9 = document.querySelector("#addItemBtn9");
const addItemBtn10 = document.querySelector("#addItemBtn10");
const addItemBtn11 = document.querySelector("#addItemBtn11");
const addItemBtn12 = document.querySelector("#addItemBtn12");
const addItemBtn13 = document.querySelector("#addItemBtn13");
const addItemBtn14 = document.querySelector("#addItemBtn14");
const addItemBtn15 = document.querySelector("#addItemBtn15");
const addItemBtn16 = document.querySelector("#addItemBtn16");
const addItemBtn17 = document.querySelector("#addItemBtn17");
const addItemBtn18 = document.querySelector("#addItemBtn18");


const tallyUpOrders_list = document.querySelector("#tallyUpOrders_list");

const tipButton10 = document.querySelector("#ten");
const tipButton15 = document.querySelector("#fifteen");
const tipButton20 = document.querySelector("#twenty");

const orderBtn = document.querySelector("#orderBtn");
const taxRate = 0.0725;

//total catcher
let orderTotal = 0;

//click button to add item / append price
/* addItemBtn.addEventListener("click", () => {
  renderItems("ex", randomPrice());
}); */
addItemBtn1.addEventListener("click", () => {
  renderItems("Hog Heaven", hogHeavenPrice);
});
addItemBtn2.addEventListener("click", () => {
  renderItems("Joe's KC BBQ", joesKcBbqPrice);
});
addItemBtn3.addEventListener("click", () => {
  renderItems("Dinosaur BBQ", dinosaurPrice);
});
addItemBtn4.addEventListener("click", () => {
  renderItems("Micklethwait Craft Meats", micklethwaitPrice);
});
addItemBtn5.addEventListener("click", () => {
  renderItems("Food Explorer", foodExplorerPrice);
});
addItemBtn6.addEventListener("click", () => {
  renderItems("Brisket Sandwich", brisketSandwishPrice);
});
addItemBtn7.addEventListener("click", () => {
  renderItems("Boba Tea Kit", bobaPrice);
});
addItemBtn8.addEventListener("click", () => {
  renderItems("Woodford Reserve", woodfordPrice);
});
addItemBtn9.addEventListener("click", () => {
  renderItems("The Hummus & Pita Co.", hummusPrice);
});
addItemBtn10.addEventListener("click", () => {
  renderItems("Dave's Coffee", davesPrice);
});
addItemBtn11.addEventListener("click", () => {
  renderItems("Tipsy Scoop Boozy Ice Cream", tipsyPrice);
});
addItemBtn12.addEventListener("click", () => {
  renderItems("Unicorn Parade Milkshake", unicornPrice);
});
addItemBtn13.addEventListener("click", () => {
  renderItems("Killer Brownie®", killerPrice);
});
addItemBtn14.addEventListener("click", () => {
  renderItems("Jacques Torres Chocolate", jacquesPrice);
});
addItemBtn15.addEventListener("click", () => {
  renderItems("Crave Cupcakes", cravePrice);
});
addItemBtn16.addEventListener("click", () => {
  renderItems("Junior's Cheesecake", juniorsPrice);
});
addItemBtn17.addEventListener("click", () => {
  renderItems("Pietisserie", pietisseriePrice);
});
addItemBtn18.addEventListener("click", () => {
  renderItems("Breads Bakery", breadsPrice);
});


//generate random price for item
//return as a number
const randomPrice = () => {
  let randomNum = Math.random() * 35;
  let price = randomNum.toFixed(2);
  return price * 1;
};

const hogHeavenPrice = 69.99;
const joesKcBbqPrice = 110.99;
const dinosaurPrice = 129;
const micklethwaitPrice = 159;
const foodExplorerPrice = 109;
const brisketSandwishPrice = 99.99;
const bobaPrice = 59;
const woodfordPrice = 39;
const hummusPrice = 89;
const davesPrice = 49;
const tipsyPrice = 109;
const unicornPrice = 109;
const killerPrice = 39.99;
const jacquesPrice = 39.95;
const cravePrice = 89;
const juniorsPrice = 64.95;
const pietisseriePrice = 79;
const breadsPrice = 49.95; 


//render items to page
function renderItems(item, price) {
  const list_item = document.createElement("li");
  list_item.className = "list-group-item bg-info";
  list_item.innerHTML = `
  <div class="row">
  <div class="col">${item}</div>
  <div class="col text-end itemPrice">$${price}</div>
  </div>
  `;
  tallyUpOrders_list.appendChild(list_item);

  //sum of all items
  orderTotal += price;
  tallyUpOrder(orderTotal);
}

//render totals to page
function tallyUpOrder(total) {
  const tax = total * taxRate;
  const grandTotal = total + tax;
  const orderTotal_element = document.querySelector("#orderTotal");
  const tax_element = document.querySelector("#tax");
  const grandTotal_element = document.querySelector("#grandTotal");
  orderTotal_element.innerHTML = `$${total.toFixed(2)}`;
  tax_element.innerHTML = `$${tax.toFixed(2)}`; 
  const tip_10 = document.querySelector('#tip-10')
  tip_10.innerHTML = `$${(0.1 * grandTotal).toFixed(2)}`;
  const tip_15 = document.querySelector('#tip-15')
  tip_15.innerHTML = `$${(0.15 * grandTotal).toFixed(2)}`;
  const tip_20 = document.querySelector('#tip-20')
  tip_20.innerHTML = `$${(0.2 * grandTotal).toFixed(2)}`;
  grandTotal_element.innerHTML = `$${grandTotal.toFixed(2)}`;
};

tipButton10.addEventListener("click", (e) => {
  console.log("10 clicked");
  console.log(Number(tip_10.innerText.slice(5, 10)));
  
  const tip10Calc = Number(tip_10.innerText.slice(5, 10));

  const getGrandTotal_10 = document.querySelector("#grandTotal");
  const grandTotalNumber = Number(getGrandTotal_10.innerText.slice(1));
  console.log(grandTotalNumber);

  const grandTotal_10 = grandTotalNumber + tip10Calc;
  console.log(grandTotal_10);
  
  
  getGrandTotal_10.innerHTML = `$${(grandTotal_10).toFixed(2)}`;
  e.preventDefault();
});

tipButton15.addEventListener("click", (e) => {
  console.log("15 clicked");
  console.log(Number(tip_15.innerText.slice(5, 9)));
  
  const tip15Calc = Number(tip_15.innerText.slice(5, 9));

  const getGrandTotal_15 = document.querySelector("#grandTotal");
  const grandTotalNumber = Number(getGrandTotal_15.innerText.slice(1));
  console.log(grandTotalNumber);

  const grandTotal_15 = grandTotalNumber + tip15Calc;
  console.log(grandTotal_15);
  
  
  getGrandTotal_15.innerHTML = `$${(grandTotal_15).toFixed(2)}`;
  e.preventDefault();
});

tipButton20.addEventListener("click", (e) => {
  console.log("20 clicked");
  console.log(Number(tip_20.innerText.slice(5, 10)));
  
  const tip20Calc = Number(tip_20.innerText.slice(5, 10));

  const getGrandTotal_20 = document.querySelector("#grandTotal");
  const grandTotalNumber = Number(getGrandTotal_20.innerText.slice(1));
  console.log(grandTotalNumber);

  const grandTotal_20 = grandTotalNumber + tip20Calc;
  console.log(grandTotal_20);
  
  
  getGrandTotal_20.innerHTML = `$${(grandTotal_20).toFixed(2)}`;
  e.preventDefault();
});


orderBtn.addEventListener("click", () => alert("Send to Process Order."));