import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
}
export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    return <><input type="text" value={value} onChange={changeValue}/>={value}</>
};
export const TrackValueUncontrolledInputByPressButton = () => {
        const [value, setValue] = useState<string>('');
        const refInput = useRef<HTMLInputElement>(null);
        const onClick = () => {
            debugger
            //let el=refInput.current;
            if (refInput.current)
                setValue(refInput.current.value)
        };
        return <><input type="text" ref={refInput}/>
            <button onClick={onClick}>save</button>
            {value}</>
    }
;
export const ControlledInputWithFixedValue = () => <input value={'hello'}/>;

export function TextInputWithFocusButton() {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        if (inputEl.current) {
            inputEl.current.focus();
        }

    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
        </>
    );
};

export const CheckboxControlled = () => {
    const [check, setCheck] = useState<boolean>(false);
    const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => setCheck(e.currentTarget.checked)
    return <input type={`checkbox`} checked={check} onChange={onChangeCheck}/>
};
export const SelectControlled = () => {
    const [value, setValue] = useState<string>('');
    const onChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.currentTarget.value)
    };
    return <select name="" id="" value={value} onChange={onChange}>
        <option value="0">none</option>
        <option value="1">bread</option>
        <option value="2">milk</option>
        <option value="3">salt</option>
    </select>
};