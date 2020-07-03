import React from 'react';
import {Link} from 'react-router-dom';
import './Functions.css';

export default class Function5_5 extends React.Component{
    constructor(props)
    {
        super(props)
        this.funcao = this.funcao.bind(this);
        this.derivada = this.derivada.bind(this);
        this.integral = this.integral.bind(this);
    }

    funcao(){
        let k = parseFloat(document.getElementById('valorK').value);
        let x = parseFloat(document.getElementById('valorX').value);
        let resultado = Math.log(x) / Math.log(k);
            if(isNaN(k) || isNaN(x)){
               alert('Digite um valor correto');
            }
            else{
                alert(`O resultado da função F(X) = Log${k}(${x}) é igual a ${resultado}`);
            }
    }

    derivada(){
        let k = parseFloat(document.getElementById('valorK').value);
        let x = parseFloat(document.getElementById('valorX').value);
        let resultadoMultiplicação = x * Math.log(k);
        let resultadoFinal = 1 / resultadoMultiplicação;
        if(isNaN(k) || isNaN(x)){
            alert("Digite um valor correto");
        }
        else{
            alert(`O resultado da derivada de F(X) = Log${k}(${x}) é igual a ${resultadoFinal}`);
        }
    }

    integral(){
        let k = parseFloat(document.getElementById('valorK').value);
        let a = parseFloat(document.getElementById('valorA').value);
        let b = parseFloat(document.getElementById('valorB').value);
            if(isNaN(k) || isNaN(a) || isNaN(b)){
                alert('Digite um valor válido');
                }
            else{
                let resultadoB = (b * Math.log(b) - b) / (Math.log(k));
                let resultadoA = (a * Math.log(a) - a) / (Math.log(k));
                let resultadoFinal = resultadoB - resultadoA;
                alert(`O resultado da integral de F(x) = log${k}(x) é igual a ${resultadoFinal}`); 
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
                            <p>F(X) = Logk(x) </p>
                    </div>
                    <input type='submit' onClick={this.funcao} value='Função'/>
                    <input type='submit' onClick={this.derivada} value='Derivada'/>
                    <input type='submit' onClick={this.integral} value='Integral'/>
                    </label>
                    <Link to=''>
                    <button className='button-sair'> SAIR </button>
                    </Link>
                    <div className='Contas'>
                    <h5>Função: F(X) = logK(x) </h5>
                    <h5>Derivada: 1/(x*ln(k) </h5>
                    <h5>Integral:((b*LN(x)-x)/(LN(b)))-((a*LN(a)-x)/(LN(a))) </h5>
                </div>
                </form>
            </div>
        )
}
}