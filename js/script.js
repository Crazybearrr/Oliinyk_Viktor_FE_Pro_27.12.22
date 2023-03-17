// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.+
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const listGoods = document.querySelector(`.list_goods`),
      goodsDescr = document.querySelector(`.goods_descriptions`);

function addHtml(data) {
    for(let key in products){
        if(key == data){
            listGoods.innerHTML = ``;
            for(let value of products[key]){
                let div = document.createElement(`div`);
                div.innerHTML = `
                    <div class="list_good">${value.name}</div>
                    `;
                listGoods.append(div);

                div.addEventListener(`click`, ()=>{
                    goodsDescr.innerHTML = `
                        <div class="goods_description">${value.description}</div>
                        <span>${value.price}</span>
                        <button class="goods_buy">BUY</button>
                    `;
                    let btn = document.querySelector(`button`);
                    popupShow(btn);
                });
            }
        }
    }
};

function popupShow(elem){
    // elem.addEventListener(`click`, (e)=>{
    //     e.preventDefault();
        
    // })
}