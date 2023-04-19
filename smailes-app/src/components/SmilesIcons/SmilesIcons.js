import Qwerty from './components/qwerty/SmilesIcon';
import './SmilesIcon.css'

const SmilesIcon = ({data}) => {

        const element = data.map(item=>{
                const {id, ...itemProps} = item;
                return(
                        <Qwerty
                        key={id}
                        {...itemProps}/>
                )
        })

    return(
        <div className="icon-container">
                
                {element}

      </div>
      
    )
}

export default SmilesIcon