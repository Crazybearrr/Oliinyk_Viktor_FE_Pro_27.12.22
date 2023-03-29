// Робимо на підставі минулого дз.

// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)

const listGoods = document.querySelector(`.list_goods`),
      goodsDescr = document.querySelector(`.goods_descriptions`);

      
///add html
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
                    toggleModal(btn);
                });
            }
        }
    }
};

///add modal

const modalContainer = document.querySelector(`.modal_container`),
      modalForm = document.querySelector(`.modal`),
      closeModal = document.querySelector(`.close-modal`);


function removeModal() {
    modalContainer.classList.remove(`active`);
    modalForm.classList.remove(`active`);
}

function toggleModal(elem){
    elem.addEventListener(`click`, (e)=>{
        e.preventDefault();
        modalContainer.classList.add('active');
        modalForm.classList.add('active');
        closeModal.addEventListener(`click`, ()=>{
            removeModal()
            goodsDescr.innerHTML = ``;
            listGoods.innerHTML = ``;
        })
    })
};

