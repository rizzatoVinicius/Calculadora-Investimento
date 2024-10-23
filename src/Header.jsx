import Logo from './assets/investment-calculator-logo.png'
import './index.css'

export default function Header(){
    return(
        <header id='header'>
            <img src={Logo}/>
            <h1>Investiment calculator</h1>
        </header>
    )
}