const API_URL = "https://menus-api.vercel.app/";
const itemList = document.querySelector("#addItem");

const selectedBbqIds = [
  "ribs-and-chicken-combo-pack-serves-6-8",
  "legendary-brisket-z-man-sandwich-kit-8-pack",
  "ribs-brisket-and-burnt-ends",
  "18650-food-explorer-carolina-bbq-pack",
  "hog-heaven",
  "bbq-meat-and-sides-feast-serves-15"
];

const selectedDessertIds = [
  "002-cafe-du-monde-coffee-and-beignets",
  "jacques-world-famous-chocolate-chip-cookies",
  "15259-german-chocolate-killer-brownie-tin-pack",
  "best-seller-cupcake-dozen",
  "original-ny-plain-cheesecake",
  "raspberry-chocolate-pie"
];

const selectedDrinkIds = [
  "hong-kong-boba-tea-kit-for-6",
  "woodford-reserve-mint-julep-syrup",
  "unicorn-parade-milkshake-kit-for-8",
  "002-original-cold-brewed-coffee-syrup",
  "virtual-cocktail-party-kit",
  "chickpea-chiller-kit-for-6"
];



async function getData() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();

      const selectedBbqs = data.bbqs.filter(item => selectedBbqIds.includes(item.id));

      const selectedDesserts = data.desserts.filter(item => selectedDessertIds.includes(item.id));
   
      const selectedDrinks = data.drinks.filter(item => selectedDrinkIds.includes(item.id));
      console.log(selectedDesserts, selectedBbqs, selectedDrinks);

      return ;


    };
  } catch (error) {
    console.log(error);
  };
};



const menuData = getData();

 

menuData.then((data)=>{
    //iterrate through obj
    //output ID and NAME
    //send to be rendered


    data.bbqs.map((i)=> {
        console.log(i)
        const {id, name, img, dsc, price} = i;
        renderElement(id,name,img, dsc, price);
    });
    data.drinks.map((i)=> {
      console.log(i)
      const {id, name, img, dsc, price} = i;
      renderElement(id,name,img, dsc, price);
  });
  data.desserts.map((i)=> {
    console.log(i)
    const {id, name, img, dsc, price} = i;
    renderElement(id,name,img, dsc, price);
});


  
});

function renderElement(id, name, img, dsc, price){
    //create new list element
    //add card property to list item
    //add id and name to element
    //render list item card to page.
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
    <li class='list-group-item'>ID: ${id}</li>
    <li class='list-group-item'>NAME: ${name}</li>
    <li class='list-group-item'>DESCRIPTION: ${dsc}</li>
    <img src="${img}" alt="${name}" class='list-group-img'/> 
    <li class='list-group-item'>PRICE: ${price}</li>


    `;
    itemList.appendChild(listItem);
};