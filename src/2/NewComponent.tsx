import React from 'react';
import './NewComponent.module.css'

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]



    return (
        <div>
            {/*<ul>*/}
            {/*    {props.students.map((objectFtomStudentArray, index) => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                <li key={objectFtomStudentArray.id}>*/}
            {/*                    <span>{objectFtomStudentArray.name}</span>*/}
            {/*                    <span> age: {objectFtomStudentArray.age}</span>*/}
            {/*                </li>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            <table>
                {topCars.map((x,index) => {
                    return (
                        <div>
                            <tr key={index}>
                                <td>{x.manufacturer}</td>
                                <td>{x.model}</td>
                            </tr>
                        </div>
                    )
                })}
            </table>
        </div>
    );
}