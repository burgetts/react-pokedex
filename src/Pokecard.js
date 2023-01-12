import './Pokecard.css'

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon' ///${id}.png.
const Pokecard = (props) => (
    <div className='Pokecard'>        
        <img src= {`${BASE_URL}/${props.id}.png`} alt = "" className ='PokeCard-image'></img>
        <div className='Pokecard-container'>
            <p className='Pokecard-name'> {props.name}</p> 
            <p> Type: {props.type} </p>
            <p> EXP: {props.baseExperience} </p>
        </div>
     
    </div>
)

export default Pokecard;