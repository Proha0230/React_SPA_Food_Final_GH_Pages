import { useState } from "react";

function Search ({cb=Function.prototype}) {
    const[value, setValue] = useState ('');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = ()=> {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input type='search' id='search-field' placeholder="Поиск" onKeyDown={handleKey} 
                onChange={(e)=> setValue(e.target.value)} value={value} />

                <button className="btn btnrec" style={{position:"absolute", top:-10, right:0}} onClick={handleSubmit}>
                    Поиск </button>
            </div>
        </div>
    );
}

export {Search};