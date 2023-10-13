
const data = [
    {
      id: 1,
      name: " Amazfit Bip 3 Pro ",
      img: "https://m.media-amazon.com/images/I/71Cgm+01-PL._AC_UL480_QL65_.jpg",
      price: 18000,
      categories: "Expensive",
    },
    {
      id: 2,
      name: "Apple Watch Series 6",
      img: "https://m.media-amazon.com/images/I/61nZQ+fv1qL._AC_UL480_QL65_.jpg",
      price: 17000,
      categories: "Expensive",
    },
    {
      id: 3,
      name: "Amazfit Bip 3 Pro",
      img: "https://m.media-amazon.com/images/I/61GOb969hML._AC_UL480_FMwebp_QL65_.jpg",
      price: 15000,
      categories: "Sports",
    },
    {
      id: 4,
      name: " SAMSUNG Galaxy Watch 6 ",
      img: "https://m.media-amazon.com/images/I/51x0g9PoieL._AC_UL480_FMwebp_QL65_.jpg",
      price: 15000,
      categories: "Sports",
    },
    {
      id: 5,
      name: "OnePlus Watch ",
      img: "https://m.media-amazon.com/images/I/51-PGlCDyTS._AC_UL480_FMwebp_QL65_.jpg",
      price: 7000,
      categories: "Luxury",
    },
    {
        id: 6,
        name: "Gamrin Unisex-Adult Venu",
        img: "https://m.media-amazon.com/images/I/81dyZnfwvSL._AC_UL480_FMwebp_QL65_.jpg",
        price: 5000,
        categories: "Casual",
      },
      {
        id: 7,
        name: "Samsung Gear 2 ",
        img: "https://m.media-amazon.com/images/I/71KG6vlMY5L._AC_UL480_FMwebp_QL65_.jpg",
        price: 5000,
        categories: "Casual",
      },
      {
        id: 8,
        name: "TOZO S2 44MM",
        img: "https://m.media-amazon.com/images/I/613pEi4kmyL._AC_UL480_FMwebp_QL65_.jpg",
        price: 7000,
        categories: "Luxury",
      },
      {
        id:9,
        "name":"Fossi Gen 5",
        img:"https://m.media-amazon.com/images/I/817xTLBbhAL._AC_UL480_QL65_.jpg",
        price:20000,
        categories:"Expensive"
      }

  ];

  const productsContainer = document.querySelector('.products');

  const searchInput = document.querySelector('.search');
  const categoriesContainer = document.querySelector('.categoriesContainer');
  const priceRange = document.querySelector('.priceRange');
  const priceValue = document.querySelector('.priceValue');

  const displayProducts = (filterProducts) => {
    productsContainer.innerHTML = filterProducts.map((product) => {
      return `
        <div class='product'>
          <img src="${product.img}" alt="${product.name}" />
          <span class="name">${product.name}</span>
          <span class="priceText">&#x20B9;${product.price}</span>
        </div>
      `;
    }).join("");
  }
  
  displayProducts(data);

  searchInput.addEventListener("keyup" , (e)=>{
    const value = e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter((item)=>
            item.name.toLowerCase().indexOf(value) !== -1
        ));

    }else{
        displayProducts(data);
    }
  })

  setCategories = ()=>{
    const allCategories = data.map((item) => item.categories);
    const uniqueCategories = ["All" , ...allCategories.filter((item , i)=>{
        return allCategories.indexOf(item) === i;
    }) , ];

    // console.log(uniqueCategories);
    categoriesContainer.innerHTML = uniqueCategories.map(cat=>{
        return `
          <span class="categories">${cat}</span>
        `
    }).join("");


    categoriesContainer.addEventListener("click" , (e)=>{
        const targetValue = e.target.textContent;
        targetValue === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.categories === targetValue));

    });

  }



  const setPrices = ()=>{
     const priceList = data.map((item)=>item.price);
     const minPrice = Math.min(...priceList);
     const maxPrice = Math.max(...priceList);

     priceRange.min = minPrice;
     priceRange.max = maxPrice;
     priceRange.value = maxPrice;
     priceValue.textContent = `₹${maxPrice}`;

     priceRange.addEventListener("input" , (e)=>{
        priceValue.textContent = `₹${e.target.value}`;
        displayProducts(data.filter(item => item.price <= e.target.value));
     })
  }

  setCategories();
  setPrices();

