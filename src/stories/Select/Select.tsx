import React from 'react';

type ItemsType = {
    id: any;
    title: string;
}
type SelectType = {
    onClick: () => void;
    onClick2: () => void;
    open: boolean
    items: ItemsType[];
    value: any;
}
export const Select: React.FC<SelectType> = ({onClick, open, items, value,onClick2}) => {
    const changeList = () => onClick();
    const selectItem = items.find(i => i.id === value);
    const selectItemInMenu=()=>onClick2();
    return <div>
        <div onClick={changeList} style={{border: '3px solid black', width: '40px',}}>
            {
                selectItem && selectItem.title
            }
            {open && items.map(i => <div key={i.id} onClick={selectItemInMenu}>{i.title}</div>)}
        </div>
    </div>
}