



fetch('https://menus-api.vercel.app/')
  .then((response) => response.json())
  .then((data) => {

    const exampleDish = data.bbqs[0];

    const foodList = document.getElementById('dish');

    foodList.innerHTML = 
    `<img src="${exampleDish.img}" alt="${exampleDish.name}"/>
    <p>${exampleDish.name}</p> <p>${exampleDish.price}</p>`;

    console.log(exampleDish);
  });



