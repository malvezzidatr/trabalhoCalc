import React from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function10_10 extends React.Component{
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.derivada = this.derivada.bind(this);
        this.integral = this.integral.bind(this);
    }

    funcao(){
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = Math.tan(x);
        if(isNaN(x)){
            alert('Digite um valor válido');
        }
        else{
            alert(`O resultado da função F(X) = Tg(${x}) é igual a ${resultado}`)
        }
    }

    derivada(){
        let x = parseFloat(document.getElementById('valorX').value);
        let secante = 1 / Math.cos(x);
        let resultado = Math.pow(secante, 2);
        if(isNaN(x)){
            alert('Digite um valor válido');
        }
        else{
            alert(`O resultado da derivada de F(X) = Tg(${x}) é igual a ${resultado}`);
        }
    }

    integral(){
        let a = parseFloat(document.getElementById('valorA').value);
        let b = parseFloat(document.getElementById('valorB').value);
        if(isNaN(a) || isNaN(b)){
            alert('Digite um valor válido');
        }
        else{
            let resultadoFinal = (-Math.log(-Math.cos(b))) + (Math.log(-Math.cos(a))); 
            alert(`O resultado da integral de F(X) = Tg(x) é igual a ${resultadoFinal}`);
        }
    }

    render(){
        return(
            <div className='container'>
            <form className='form-container'>
                <label className='label'>
                <input className='input_container' type='number' id="valorK" placeholder="Valor de K"/>
                <input className='input_container' type='number' id="valorX" placeholder="Valor de X" />
                <div className='definida'>
                    <h4>Para integrais:</h4>
                </div>
                <input className='inputcontainer' type='number' id="valorA" placeholder="Valor de a" />
                <input className='inputcontainer' type='number' id="valorB" placeholder="Valor de b" />
                <div className='funcao'>
                    <p>F(X) = tg(x) </p>
                </div>
                <input type='submit' onClick={this.funcao} value='Função'/>
                <input type='submit' onClick={this.derivada} value='Derivada'/>
                <input type='submit' onClick={this.integral} value='Integral'/>
                </label>
                <Link to=''>
                <button className='button-sair'> SAIR </button>
                </Link>
                <div className='Contas'>
                    <h5>Função: F(X) = tg(x) </h5>
                    <h5>Derivada: sec ^ 2 (x)</h5>
                    <h5>Integral: -LN(cos(b)) - (-LN(cos(a)))</h5>
                </div>
            </form>
        </div>
        )
}
}