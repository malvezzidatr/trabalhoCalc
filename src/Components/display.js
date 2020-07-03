import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';



export default class Function1_1 extends React.Component{
    constructor(props)
    {
        super(props)
        this.close_window = this.close_window.bind(this);
    }

    close_window() {
        if (window.confirm("Fechar Janela?")) {
            window.close();
        }
      }


    render(){
    return(
        
        <div className='container' >

        <Link className="link" to='/Function1_1'>
        <button className="button">f(x) = k</button>
        </Link>

        <Link className="link" to='/Function2_2'>
        <button className="button" >f(x) = x ^ k</button>
        </Link>

        <Link className="link" to="/Function3_3">
        <button className="button">f(x) = k ^ x</button>
        </Link>

        <Link className="link" to="/Function4_4">
        <button className="button">f(x) = e ^ k </button>
        </Link>

        <Link className="link" to="/Function5_5">
        <button className="button" >f(x) = logK(x)</button>
        </Link>

        <Link className="link" to="/Function6_6">
        <button className="button" >f(x) = ln(x) </button>
        </Link>

        <Link className="link" to="/Function7_7">
        <button className="button">f(x) = 1/x </button>
        </Link>

        <Link className="link" to="/Function8_8">
        <button className="button">f(x) = sen(x)</button>
        </Link>

        <Link className="link" to="/Function9_9">
        <button className="button" >f(x) = cos(x)</button>
        </Link>

        <Link className="link" to="/Function10_10">
        <button className="button" >f(x) = tg(x) </button>
        </Link>

        <button className="button" onClick={this.close_window} >SAIR</button>

        </div>
    )
}
}