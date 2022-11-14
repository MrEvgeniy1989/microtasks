import React, { MouseEvent } from 'react';
import './App.css';
// import {Header} from './1/Header';
// import {Body} from './1/Body';
// import {Footer} from './1/Footer';
// import {NewComponent} from './2/NewComponent';

// const students = [
//     {id: 1, name: 'James', age: 8},
//     {id: 2, name: 'Robert', age: 18},
//     {id: 3, name: 'John', age: 28},
//     {id: 4, name: 'Michael', age: 38},
//     {id: 5, name: 'William', age: 48},
//     {id: 6, name: 'David', age: 58},
//     {id: 7, name: 'Richard', age: 68},
//     {id: 8, name: 'Joseph', age: 78},
//     {id: 9, name: 'Thomas', age: 88},
//     {id: 10, name: 'Charles', age: 98},
//     {id: 11, name: 'Christopher', age: 100},
// ]

function App() {
    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im VASYA")
    // }
    // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im IVAN')
    // }

    // const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log(100200)
    // }
    // const foo2 = (number: number) => {
    //     console.log(number)
    // }

    const onClickHandler = (name: string) => {
        console.log(`Hello Im ${name}`)
    }

    return (
        <div className={"App"}>
            {/*<Header titleForHeader = {"New Header"}/>*/}
            {/*<Body titleForBody = {"New Body"}/>*/}
            {/*<Footer titleForFooter = {"New Footer"}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={((event: MouseEvent<HTMLButtonElement>) => foo2(100200))}>2</button>*/}
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("VASYA")}> MyYouTubeChannel-1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("IVAN")}>MyYouTubeChannel-2</button>

        </div>
    );
}

export default App;
