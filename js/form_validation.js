// Form validation
const nameInput = modalForm.name,
      lastnameInput = modalForm.lastname,
      phoneInput = modalForm.phone,
      paymentInput = modalForm.payment,
      totalInput = modalForm.total,
      cityInput = modalForm.city,
      postInput = modalForm.post,
      postOfficeInput = modalForm.post_office,
      commentInput = modalForm.comment,
      btnBuy = document.querySelector(`#btn_buy`);


const inputs = [
    {
        name:`name`,
        inputEl: nameInput,
        value: nameInput.value,
        regularExpression:/^[а-яА-Я]{3,30}|[a-zA-Z]{3,30}$/,
        validationsRules: [validateStr],
        needToValidate: true,
        isValid: false,
        errorEl: nameInput.parentElement.querySelector('p')
    },
    {
        name:`lastname`,
        inputEl: lastnameInput,
        value: lastnameInput.value,
        regularExpression:/^[а-яА-Я]{3,30}|[a-zA-Z]{3,30}$/,
        validationsRules: [validateStr],
        needToValidate: true,
        isValid: false,
        errorEl: lastnameInput.parentElement.querySelector('p')
    },
    {
        name:`phone`,
        inputEl: phoneInput,
        value: phoneInput.value,
        regularExpression:/^\+380\d{9}$/,
        validationsRules:[validatePhone],
        needToValidate: true,
        isValid:false,
        errorEl: phoneInput.parentElement.querySelector('p')
    },
    {
        name:`payment`,
        inputEl: paymentInput,
        value:paymentInput.value,
        regularExpression:null,
        validationsRules:[isSelect],
        needToValidate: true,
        isValid:false,
        errorEl: paymentInput.parentElement.querySelector('p')
    },
    {
        name: `total`,
        inputEl: totalInput,
        value: totalInput.value,
        regularExpression:null,
        validationsRules: [isSelect],
        needToValidate: true,
        isValid:false,
        errorEl: totalInput.parentElement.querySelector('p')
    },
    {
        name: `city`,
        inputEl: cityInput,
        value: cityInput.value,
        regularExpression:null,
        validationsRules: [isSelect],
        needToValidate: true,
        isValid:false,
        errorEl: cityInput.parentElement.querySelector('p')
    },
    {
        name: `post`,
        inputEl: postInput,
        value: postInput.value,
        regularExpression:null,
        validationsRules: [],
        needToValidate: false,
        isValid:false,
        errorEl: null
    },
    {
        name: `post_office`,
        inputEl: postOfficeInput,
        value: postOfficeInput.value,
        regularExpression:null,
        validationsRules: [isSelect],
        needToValidate: true,
        isValid:false,
        errorEl: postOfficeInput.parentElement.querySelector('p')
    },
    {
        name: `comment`,
        inputEl: commentInput,
        value: commentInput.value,
        regularExpression:null,
        validationsRules: [],
        needToValidate: false,
        isValid:false,
        errorEl: null,
    },
]

btnBuy.addEventListener(`click`, (e)=>{
    e.preventDefault();

    const validatedArr = inputs.filter((el)=>el.needToValidate).map((el) => {
		const isAllValid = el.validationsRules.map((func) => {
            // console.log(el.inputEl.value);
			return func(el.inputEl.value, el.errorEl)
		})
        
		return isAllValid.every(el => el === true)
	})
        console.log(validatedArr)

	if(validatedArr.every(el => el === true)) {
		const data = {};
		inputs.forEach((input) => {
			data[input.name] = input.inputEl.value
		})
		showData(data);
        showOrder (data);
        removeModal();
        return data
	} else {
		console.log(`something wrong`)
	}

})

function errorValidate(selector, boolean) {
    selector.classList[boolean ? 'remove' : 'add']('show')
}

function showData (data){
    console.log(data);
    console.log(`send to server`);
}

// function validateInput(value, regularExpression, errorEl){
//     // console.log(value)
//     let isValid = new RegExp(regularExpression).test(String(value));
     
//     errorValidate(errorEl, isValid)
//     return
// };

function validateStr(value, errorEl){
    let isValid = value.length > 2 ;
    errorValidate(errorEl, isValid)

    return isValid
};


function validatePhone(value, errorEl){
    let isValid = /^\+380\d{9}$/.test(String(value));
    errorValidate(errorEl, isValid);

    return isValid
};


// function validateCard(value, errorEl){
//     let isValid = /^4[0-9]{12}(?:[0-9]{3})?$/.test(String(value));
//     errorValidate(errorEl, isValid);

//     return isValid
// };

function isSelect(value, errorEl) {
    // console.log(!!value);
    let isValid = !!value;
    
    errorValidate(errorEl, isValid)
    
    return isValid
    
}

//// add orders

function showOrder (data){
    const container = document.querySelector(`.container`)
    let div = document.createElement(`div`);
    div.classList.add(`orders`)
    div.innerHTML = `<div class="orders_container">
                        <div class="orders_info">
                            <ul>
                                <li>Order number: ${(Math.random()*1000).toFixed(0)}</li>
                                <li>Name: ${data.name}</li>
                                <li>Last name: ${data.lastname}</li>
                                <li>Phone number: ${data.phone}</li>
                                <li>Payment: ${data.payment}</li>
                                <li>The total amount: ${data.total}</li>
                                <li>City: ${data.city}</li>
                                <li>The carrier: ${data.post}</li>
                                <li>Post office: ${data.post_office}</li>
                                <li>Comment: ${data.comment}</li>
                            </ul>
                            <button class="orders_close" data-close>OK</button>
                        </div>
                    </div>`;
        container.after(div);

        const dataClose = document.querySelector(`[data-close]`);
        dataClose.addEventListener(`click`, ()=>{
            div.classList.add(`hide`)
        })
}