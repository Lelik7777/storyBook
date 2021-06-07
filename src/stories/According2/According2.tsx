import React from 'react';

export type ItemsType = {
    id: number;
    title: string;
}
type According2Type = {
    title: string;
    items: ItemsType[];
}
export const According2: React.FC<According2Type> = ({}) => {
    return <div>

    </div>
}
type Header = {
    title: string;
    onChange: () => void;
}
const Header: React.FC<Header> = ({title, onChange}) => {
    const accord = () =>
        onChange();
    return <h2 onClick={accord}>{title}</h2>
}
type Body = {}
const Body: React.FC<Body> = ({}) => {
    return <div>

    </div>
}
