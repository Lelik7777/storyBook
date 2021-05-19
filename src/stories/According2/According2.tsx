import React from 'react';

type ItemsType2 = {
    id: number;
    title: string
}
type According2Type = {
    title: string;
    onClick: () => void;
    items: ItemsType2[];
    collapse: boolean;
}
export const According2: React.FC<According2Type> = ({title, onClick, items, collapse}) => {
    return <div>
        <Header title={title} onClick={onClick}/>
        {collapse && <Body items={items}/>}
    </div>
}
type HeaderType = {
    title: string;
    onClick: () => void;
}
const Header: React.FC<HeaderType> = ({title, onClick}) => {
    const changeCollapse = () => onClick();
    return <h2 onClick={changeCollapse}>{title}</h2>
}
type BodyType = {
    items: ItemsType2[];
}
const Body: React.FC<BodyType> = ({items}) => {
    return <>
        {items.map(i => <div>{i.title}</div>)}
    </>
}