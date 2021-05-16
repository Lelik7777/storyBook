import React from 'react';

type AccordingType = {
    title:string
    collapse:boolean
    changeCollapse:(col:boolean)=>void;
}
export const According: React.FC<AccordingType> = ({title,collapse,changeCollapse}) => {
    return <div>
        <TitleAccording title={title} changeCollapse={changeCollapse}/>
        <ListAccording collapse={collapse}/>
    </div>
}

type TitleAccording={
    title:string
    changeCollapse:(col:boolean)=>void;
}
function TitleAccording(props:TitleAccording) {
const changeOnClick=()=>props.changeCollapse(true)
    return <h1 onClick={changeOnClick}>{props.title}</h1>
}

type ListAccordingType={
    collapse:boolean;
}
function ListAccording(props:ListAccordingType) {
    return (
        props.collapse?
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>:
            <ul></ul>

        )
}