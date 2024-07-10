




  fetch('https://menus-api.vercel.app/')
  .then((response) => response.json())
  .then((data) => {

    const exampleDish = [
        data.bbqs[0];
        data.drinks[1];
        data.bbqs[2];
        data.burgers[0];
        data.desserts[6];
        data.chocolates[4];
    ];

    const foodList = document.queryselectorAll('.food');



    foodList.foreach(exampleDish ) => {

        foodList.innerHTML = 
        `<img src="${exampleDish.img}" alt="${exampleDish.name}"/>
        <p>${exampleDish.name}</p> <p>${exampleDish.price}</p>`;

    };

 

    console.log(exampleDish);
  });





