import React from 'react';
import './App.css';
import {Header} from './1/Header';
import {Body} from './1/Body';
import {Footer} from './1/Footer';

function App() {
    return (
        <div>
            <Header titleForHeader = {"New Header"}/>
            <Body titleForBody = {"New Body"}/>
            <Footer titleForFooter = {"New Footer"}/>
        </div>
    );
}

export default App;
