import React, {useState} from 'react';
import {According2} from './According2';
import {According} from '../According/According';

export default {
    title: 'According2',
    component: According2,
};

export const Menu = () => {
    const [v, setV] = useState<boolean>(false);
    const change = () => setV(!v);
    return <According2
        title={'menu'}
        onClick={change}
        items={[{id: 1, title: 'bread'}, {id: 2, title: 'milk'}, {id: 3, title: 'salt'},]}
        collapse={v}/>
}

