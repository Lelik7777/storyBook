import React from 'react';
import {ItemsType} from '../../App';

type AccordingType = {
    title:string
    collapse:boolean
    changeCollapse:(col:boolean)=>void;
    items:ItemsType[];
}
export const According: React.FC<AccordingType> = ({title,collapse,changeCollapse,items}) => {
    return <div>
        <TitleAccording title={title} changeCollapse={changeCollapse} collapse={collapse}/>
        <ListAccording collapse={collapse} items={items}/>
    </div>
}

type TitleAccording={
    title:string
    changeCollapse:(col:boolean)=>void;
    collapse:boolean;

}
function TitleAccording(props:TitleAccording) {
const changeOnClick=()=>props.changeCollapse(props.collapse)
    return <h1 onClick={changeOnClick}>{props.title}</h1>
}

type ListAccordingType={
    collapse:boolean;
    items:ItemsType[];
}
function ListAccording(props:ListAccordingType) {
    return (
        props.collapse?
        <ul>
            {props.items.map((i,index)=><li key={index} >{i.name}</li>)}
        </ul>:
            <ul></ul>

        )
}