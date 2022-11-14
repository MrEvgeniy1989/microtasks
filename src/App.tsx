import React, {useState} from 'react';
// import {MouseEvent} from 'react';
import './App.css';
// import {Button} from './3/components/Button';
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

    // const onClickHandler = (name: string) => {
    //     console.log(`Hello Im ${name}`)
    // }


    // const Button1Foo = (subscriber:string, age:number, address: string) => {
    //     console.log(subscriber, age, address)
    // }
    // const Button2Foo = (subscriber:string) => {
    //     console.log(subscriber)
    // }
    // const Button3Foo = () => {
    //     console.log("I am stupid button")
    // }

    // return (
    //     <div className={'App'}>
    //         {/*<Header titleForHeader = {"New Header"}/>*/}
    //         {/*<Body titleForBody = {"New Body"}/>*/}
    //         {/*<Footer titleForFooter = {"New Footer"}/>*/}
    //         {/*<NewComponent students={students}/>*/}
    //         {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-1</button>*/}
    //         {/*<button onClick={foo1}>1</button>*/}
    //         {/*<button onClick={((event: MouseEvent<HTMLButtonElement>) => foo2(100200))}>2</button>*/}
    //         {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASYA')}> MyYouTubeChannel-1*/}
    //         {/*</button>*/}
    //         {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('IVAN')}>MyYouTubeChannel-2*/}
    //         {/*</button>*/}
    //
    //         {/*<Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("I am Vasya", 21, "live in Minsk")}/>*/}
    //         {/*<Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I am Ivan")}/>*/}
    //         {/*<Button name={"stupid button"} callBack={Button3Foo}/>*/}
    //     </div>

    // let a = 1

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler1 = () => {
        a=0
        setA(a)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    );
}

export default App;
