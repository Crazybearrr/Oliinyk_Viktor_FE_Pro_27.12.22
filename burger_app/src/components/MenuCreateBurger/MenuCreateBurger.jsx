import {useState, useReducer} from 'react';

import mockMenu from '../../mockMenu/mockMenu';
import {SET_BURGER, SET_FILLING, SET_SEASONING, CALCULATE, RESET} from '../../actions/action';
import {reducer, initialState} from '../../actions/index'
import InputItem from '../InputItem/InputItem';
import Button from '../Btn/Btn';
import Paragraph from '../Paragraph/Paragraph';

import './MenuCreateBurger.css';

function MenuCreateBurger (){
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isChoose, setIsChoose] = useState(false);
    const [isCalculated, setIsCalculated] = useState(false);

    const handleOptionChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'burger':
                return dispatch({type: SET_BURGER, payload: mockMenu.burger.find(item => item.type === value)});
                
            case 'filling':
                return dispatch({type: SET_FILLING, payload: mockMenu.filling.find(item => item.type === value)});
              
            case 'seasoning':
                return dispatch({type: SET_SEASONING, payload: mockMenu.seasoning.find(item =>item.type === value)});
            
            default:
                break;
        }
    };
    
    const handleCalculate = () => {

        if(state.burger){
            dispatch({type: CALCULATE});
            setIsCalculated(true);
            setIsChoose(false);
        }else{
            setIsChoose(true);
            
        }
    };
                    
    const handleReset = () => {
        dispatch({type: RESET});
        setIsCalculated(false);
    };

    const createMenu = (menu, text)=>{
        return Object.keys(menu).map((key)=>(
            <div key={key} className={key}>
                <h2>{text}</h2>
                {menu[key].map((item)=>(
                    <InputItem
                        key={item.id}
                        type={"radio"}
                        title={item.title}
                        name={key}
                        value={item.type}
                        price={item.price}
                        calories={item.calories}
                        icon={item.icon}
                        onChange={handleOptionChange}
                    />
                ))}
            </div>   
            ))
    }

    const burgerMenu = createMenu({burger: mockMenu.burger}, "Оберіть бургер");

    const fillingMenu = createMenu({filling: mockMenu.filling}, "Оберіть додаток");

    const seasoningMenu = createMenu({seasoning: mockMenu.seasoning}, "Оберіть спецію");

    return(
        <div className="burger__wrap">

                {burgerMenu}

                {isChoose && (
                    <Paragraph
                        text={"Оберіть бургер"}
                        className={"error__message"}
                    />
                    )}

                {fillingMenu}

                {seasoningMenu}
        
            <hr />

            <div className="burger__order">
                
                <Button
                    title={"Розрахувати вартість"}
                    handleClick={handleCalculate}
                />
                {isCalculated && (
                    <>
                       
                        <Paragraph
                            text={"Вартість Вашого бургеру:"}
                            result={state.totalPrice}
                            currency={"₴"}
                        />

                        <Paragraph
                            text={"Калорійність вашого бургеру:"}
                            result={state.totalCalories}
                            currency={"калорій(я)"}
                        />

                        <Button
                            title={"Я передумав"}
                            handleClick={handleReset}
                        />
                    </>
                )}

            </div>
            

        </div>
    )
}

export default MenuCreateBurger