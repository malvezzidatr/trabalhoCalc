import React from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function7_7 extends React.Component{
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.integral = this.integral.bind(this);
    }
    funcao(){
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = 1 / x;
        if(isNaN(x)){
            alert("Digite um valor válido");
        }
        else{
            alert(`O resultado da função F(X) = 1 / ${x} é igual a ${resultado}`);

        }
    }
    integral(){
        let a = parseFloat(document.getElementById('valorA').value);
        let b = parseFloat(document.getElementById('valorB').value);
        if(isNaN(a) || isNaN(b)){
            alert('Digite um valor válido');
            }
        else{
            let resultadoB = Math.log(b);
            let resultadoA = Math.log(a);
            let resultadoFinal = resultadoB - resultadoA;
            alert(`O resultado da integral F(X) = 1 / x é igual a ${resultadoFinal}`);
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
                    <h3>Para integrais:</h3>
                </div>
                <input className='inputcontainer' type='number' id="valorA" placeholder="Valor de a" />
                <input className='inputcontainer' type='number' id="valorB" placeholder="Valor de b" />
                <div className='funcao'>
                        <p>F(X) = 1 / x </p>
                </div>
                <input type='submit' onClick={this.funcao} value='Função'/>
                <input type='submit' onClick={this.derivada} value='Derivada'/>
                <input type='submit' onClick={this.integral} value='Integral'/>
                </label>
                <Link to=''>
                <button className='button-sair'> SAIR </button>
                </Link>
                <div className='Contas'>
                    <h5>Função: F(X) = 1 / x </h5>
                    <h5>Derivada: x ^ -1 </h5>
                    <h5>Integral: Ln(b) - Ln(a)</h5>
                </div>
            </form>
        </div>
        )
}
}