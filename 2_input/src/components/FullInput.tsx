import React, {ChangeEvent, useState} from 'react';

export type FullInputPropsType = {
    addMessage: (titlle: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = (props) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};