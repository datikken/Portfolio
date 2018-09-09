import React from 'react';
import styles from '../styles/styles.css';
import { BrowserRouter, Route } from 'react-router-dom';

//Pages
import Tikken from './Tikken';
import MyWork from './MyWork';
import Contact from './Contact';

class App extends React.Component {
    render(){
        return (   
         <BrowserRouter>
            <div>
                <Route path='/' component={Tikken} exact></Route>
                <Route path='/MyWork' component={MyWork}></Route>
                <Route path='/Contact' component={Contact}></Route>
            </div>
         </BrowserRouter>
    )
}
}

export default App;