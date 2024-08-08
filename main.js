const itemList = document.querySelector("#addItem");
const addItemBtn = document.querySelector("#addItemBtn");
const tallyUpOrders_list = document.querySelector("#tallyUpOrders_list");

const tipButton10 = document.querySelector("#ten");
const tipButton15 = document.querySelector("#fifteen");
const tipButton20 = document.querySelector("#twenty");

const orderBtn = document.querySelector("#orderBtn");
const taxRate = 0.0725;

//total catcher
let orderTotal = 0;

//click button to add item / append price
addItemBtn.addEventListener("click", () => {
  renderItems("new Item", randomPrice());
});

//generate random price for item
//return as a number
const randomPrice = () => {
  let randomNum = Math.random() * 35;
  let price = randomNum.toFixed(2);
  return price * 1;
};

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

tipButton10.addEventListener("click", () => {
  console.log("10 clicked");
  console.log(Number(tip_10.innerText.slice(5, 9)));
});
tipButton15.addEventListener("click", () => {
  console.log("15 clicked");
  console.log(Number(tip_15.innerText.slice(5, 9)));
});
tipButton20.addEventListener("click", () => {
  console.log("20 clicked");
  console.log(Number(tip_20.innerText.slice(5, 9)));
});

orderBtn.addEventListener("click", () => alert("Send to Process Order."));

