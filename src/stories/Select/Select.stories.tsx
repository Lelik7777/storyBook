import React, {useState} from 'react';
import {Select} from './Select';
import {actions} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
};

export const DroppedMenu = () => {
    const [value, setValue] = useState<boolean>(false);
    const onClickSelect = () => setValue(!value);
    const onClick=actions;
    return <Select
        onClick={onClickSelect}
        open={value}
        items={[{id: 1, title: 'car'}, {id: 2, title: 'ship'}, {id: 3, title: 'plane'},]}
        value={2}
        onClick2={onClick}
    />
}
