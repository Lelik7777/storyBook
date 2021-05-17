import React, {useState} from 'react';
import './App.css';
import {According} from './stories/According/According';

export type ItemsType={
    name:string;
    value:any;
}
function App() {
    const [on, setOn] = useState<boolean>(false);
const items:ItemsType[]=[
    {name:'alex',value:1},
    {name:'bob',value:2},
    {name:'nick',value:3},
];
    function changeCollapse(col: boolean) {
        setOn(!col);
    }

    return (
        <div className="App">
            <According
                items={items}
                title={'menu'}
                collapse={on}
                changeCollapse={changeCollapse}
            />
        </div>
    );
}

export default App;
