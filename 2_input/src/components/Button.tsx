import React from 'react';

type ButtonPtopsType = {
    name: string
    callBack: () => void
}

export const Button: React.FC<ButtonPtopsType> = (props) => {
    const onclickButtonHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onclickButtonHandler}>{props.name}</button>
        </div>
    );
};