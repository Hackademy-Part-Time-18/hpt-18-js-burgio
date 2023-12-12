const filterbyText = (items, text) => {

  if(text === '') return items;

  return items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));

}

const filterByCategory = (items, category) => {

  if(category === '') return items;
  return items.filter((item) => item.category.toLowerCase() === category.toLowerCase())


}

const filterByPrice = (items, price) => {

  return items.price((item) => Number(item.price) >= price.min && Number(item.price) <= price.max);

}

const filtraAnnunci = (annunci, filterstate) => {

  const filteredbyText = filterbyText(annunci, filterstate.searchText);
  const filteredByCategory = filterByCategory(filteredbyText, filterstate.category);
  const filteredByPrice = filterByPrice(filteredByCategory,filterstate.price);

  return filteredByPrice
};

const getFilterState = () => {
  const searchInput = document.querySelector('#searchInput');
  const categoryInput = document.querySelector('#categoryInput');
  const minPriceInput = document.querySelector('#minPriceInput');
  const maxPriceInput = document.querySelector('#maxPriceInput');

  const searchText = searchInput.value.toLowerCase();
  const category = categoryInput.value;
  const minPrice = Number(minPriceInput.value);
  const maxPrice =  maxPriceInput.value === '' ? Infinity : Number(maxPriceInput.value);

  return{
    searchText,
    category,
    price : {
      min : minPrice,
      max : maxPrice
    }
  }
}

function cardGenerata (item) {
const card = document.createElement('div')
        card.classList.add('col-12','col-md-6','col-lg-4','mb-5');

        const typeBg = item.type === 'sell' ? 'bg-danger' : 'bg-main';
        const typeLabel = item.type === 'sell' ? 'Vendo' : 'Cerco';

        card.innerHTML = `
        <div class="col-12 col-md-6 col-lg-4 mb-6">
        <div class="cardCustom">
          <div class="image overflow-hidden position-relative">
            <img class="img-fluid" src="https://picsum.photos/560/340" alt="">
            <p class="type-announcement ${typeBg} text-white">
            ${typeLabel}
            </p>
          </div>
          <div class="details">
          <p class="fs-3 c-main fw-semibold mb-1">${item.price} £</p>
          <h3 class="c-neutral mb-0">${item.name}</h3>
          <p class="c-neutral mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="footer bg-white d-flex">
            <div class="col text-center py-2 c-main">
              <i class="fa-solid fa-tag"></i>
              ${item.category}
            </div>
            <div class="col text-center py-2 c-main">
              <i class="fa-solid fa-calendar-day"></i>
              14/07/2022
            </div>
          </div>
        </div>
      </div>
      `
      return card;
};

function populateList(annunci = [], containerId = '#announcementsWrapper'){
    const card = annunci.map(cardGenerata)    
    const wrapper = document.querySelector(containerId)
    wrapper.innerHTML = '';
    wrapper.append(...card)
}

function populateCategories (annunci = []) {
    const categories = annunci.map(item => item.category);
    const uniqueCategories = [...new Set(categories).values()];
    const options = uniqueCategories.map((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        return option;
    });

    const select = document.querySelector('#categoryInput');
    select.append(...options);
};

function init(annunci){
    const searchBtn = document.querySelector('#filterButton');
    populateList(annunci, '#announcementsWrapper');
    populateCategories(annunci);

    searchBtn.addEventListener('click',() => {
      const filterstate = getFilterState();
      const filtered = filtraAnnunci(annunci, filterstate);
      populateList(filtered, '#announcementsWrapper')
    })
    
}


fetch('./dati/card.json')
    .then((res) =>res.json())
    .then(init);


