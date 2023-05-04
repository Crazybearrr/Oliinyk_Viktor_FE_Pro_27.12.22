import { v4 as uuidv4 } from 'uuid';

const mockMenu ={
    burger:[
        {
            id:uuidv4(),
            type: "small",
            price: 50,
            calories: 20,
            title: "Маленький",
            icon:"🍔",
            checked: false,
        },
        {
            id:uuidv4(),
            type: "large",
            price: 100,
            calories: 40,
            title:"Великий",
            icon:"🍔",
            checked: false,
        },
    ],
    filling:[
        {
            id:uuidv4(),
            type: "cheese",
            price: 10,
            calories: 20,
            title:"Сир",
            icon:"🧀",
            checked: false,
        },
        {
            id:uuidv4(),
            type: "cabbage",
            price: 20,
            calories: 5,
            title:"Капуста",
            icon:"🥬",
            checked: false,
        },
        {
            id:uuidv4(),
            type: "potatoe",
            price: 15,
            calories: 10,
            title:"Картопля",
            icon:"🥔",
            checked: false,
        },
    ],
    seasoning:[
        {
            id:uuidv4(),
            type: "mayonnaise",
            price: 22,
            calories: 7,
            title:"Майонез",
            icon: "🥫",
            checked: false,
        },
        {
            id:uuidv4(),
            type: "sprinkle_with_seasoning",
            price: 20,
            calories: 12,
            title:"Посипати приправою",
            icon: "🍃",
            checked: false,
        },
    ]

}

export default mockMenu