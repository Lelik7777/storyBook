import React, {useState} from 'react';
import './App.css';
import {According} from './According';

function App() {
    const [on, setOn] = useState<boolean>(false);

    function changeCollapse(col: boolean) {
        setOn(!col);
    }

    return (
        <div className="App">
            <According
                title={'menu'}
                collapse={on}
                changeCollapse={changeCollapse}
            />
        </div>
    );
}

export default App;
