import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Display from './Components/display';
import Sair from './Pages/Sair';
import Function1_1 from './Pages/Contas/Function1_1'
import Function2_2 from './Pages/Contas/Function2_2'
import Function3_3 from './Pages/Contas/Function3_3'
import Function4_4 from './Pages/Contas/Function4_4'
import Function5_5 from './Pages/Contas/Function5_5'
import Function6_6 from './Pages/Contas/Function6_6'
import Function7_7 from './Pages/Contas/Function7_7'
import Function8_8 from './Pages/Contas/Function8_8'
import Function9_9 from './Pages/Contas/Function9_9'
import Function10_10 from './Pages/Contas/Function10_10'


export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Display}/>
                <Route path='/Function1_1' exact component={Function1_1}/>
                <Route path='/Function2_2' exact component={Function2_2}/>
                <Route path='/Function3_3' exact component={Function3_3}/>
                <Route path='/Function4_4' exact component={Function4_4}/>
                <Route path='/Function5_5' exact component={Function5_5}/>
                <Route path='/Function6_6' exact component={Function6_6}/>
                <Route path='/Function7_7' exact component={Function7_7}/>
                <Route path='/Function8_8' exact component={Function8_8}/>
                <Route path='/Function9_9' exact component={Function9_9}/>
                <Route path='/Function10_10' exact component={Function10_10}/>
                <Route path='/Sair' exact component={Sair}/>


            </Switch>
        </BrowserRouter>
    )
}