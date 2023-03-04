// Создать блок в нем 2 кнопки в html

// Добавить к ним какие то стили чтоб это норм смотрелось. Без излишеств. 

// При клике на одну кнопку внизу добавлять div c каким то текстом. 

// При клике на добавленный див менять ему background

// При на вторую кнопку удалять последний добавленный div

// Именно удалять , а не скрывать

const btn = document.querySelectorAll(`.btn`),
      div = document.createElement(`div`);

btn[0].addEventListener(`click`, () =>{
    btn[0].after(div);
    div.classList.add(`btn_text`);
    div.innerHTML = `<p>Hi, I her</p>`;
    div.addEventListener(`click`, () =>{
        div.classList.add(`violet`);
    })
});

btn[1].addEventListener(`click`, ()=>{
    div.remove();
    div.classList.remove(`violet`);
});
