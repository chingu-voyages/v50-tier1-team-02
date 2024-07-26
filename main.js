const itemList = document.querySelector("#addItem");
const addItemBtn = document.querySelector("#addItemBtn");
const tallyUpOrders_list = document.querySelector("#tallyUpOrders_list");
const tip_card = document.getElementsByClassName("tip-card");
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
  grandTotal_element.innerHTML = `$${grandTotal.toFixed(2)}`;
}

function tip(tip) {
  if (tip === 10) {
    return console.log("you selected 10% tip");
  } else if (tip === 15) {
    return console.log("you selected 15% tip");
  } else if(tip === 20){
    return console.log("you selected 20% tip");
  }
}

orderBtn.addEventListener("click", () => alert("Send to Process Order."));
console.log(tip_card)
tip_card.addEventListener('click',()=>{
  console.log('tip button clicked')
});