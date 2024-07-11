const API_URL = "https://menus-api.vercel.app/";
const itemList = document.querySelector("#addItem");

async function getData() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json();
      return data;
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
        const {id, name} = i;
        renderElement(id,name);
    });
});

function renderElement(id, name){
    //create new list element
    //add card property to list item
    //add id and name to element
    //render list item card to page.
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
    <li class='list-group-item'>ID: ${id}</li>
    <li class='list-group-item'>NAME: ${name}</li>
    `;
    itemList.appendChild(listItem);
};