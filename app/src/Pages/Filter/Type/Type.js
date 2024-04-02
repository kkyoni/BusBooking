import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';
function Type({ TypeData, onChangeType }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="busType">
                    <Button className="accordion-button" onClick={handleToggle}>Type</Button>
                </h2>
                <div id="togglebusType" className={`accordion-collapse collapse ${isCollapsed ? 'show' : ''}`} aria-labelledby="busType">
                    <div className="accordion-body">
                        {TypeData.length > 0 && TypeData.map((item) => (
                            <div className="form-check" key={item.id}>
                                <Checkbox name="busType" value={item.id} className="form-check-input" onChange={onChangeType} style={{ border: 'none' }} />
                                <label className="form-check-label" htmlFor="sleeper">{item.type}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Type;
