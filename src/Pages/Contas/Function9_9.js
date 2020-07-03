import React from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function9_9 extends React.Component{
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.derivada = this.derivada.bind(this);
        this.integral = this.integral.bind(this);

    }
    funcao(){
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = Math.cos(x);
        if(isNaN(x)){
            alert('Digite um valor válido');
        }
        else{
            alert(`O resultado da função F(X) = cos(${x}) é igual a ${resultado}`)
        }
    }

    derivada(){
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = -Math.sin(x);
        if(isNaN(x)){
            alert('Digite um valor válido');
        }
        else{
            alert(`O resultado da derivada de F(X) = cos(${x}) é igual a ${resultado}`)
        }
    }

    integral(){
        let a = parseFloat(document.getElementById('valorA').value);
        let b = parseFloat(document.getElementById('valorB').value);
        if(isNaN(a) || isNaN(b)){
            alert('Digite um valor válido');
        }
        else{
            let resultadoFinal = (Math.sin(b)) - (Math.sin(a));
            alert(`O resultado da integral de F(X) = cos(x) é igual a ${resultadoFinal}`);
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
                    <p>F(X) = cos(x) </p>
                </div>
                <input type='submit' onClick={this.funcao} value='Função'/>
                <input type='submit' onClick={this.derivada} value='Derivada'/>
                <input type='submit' onClick={this.integral} value='Integral'/>
                </label>
                <Link to=''>
                <button className='button-sair'> SAIR </button>
                </Link>
                <div className='Contas'>
                    <h5>Função: F(X) = cos(x) </h5>
                    <h5>Derivada: -sen(x)</h5>
                    <h5>Integral: sen(b) - sen(a)</h5>
                </div>
            </form>
        </div>
        )
}
}