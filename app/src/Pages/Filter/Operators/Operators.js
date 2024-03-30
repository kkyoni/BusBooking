import React, { useState, useEffect } from 'react';
import { Checkbox, Button } from 'antd';
function Operators({ OperatorsData, onChangeOperators }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="busOperators">
                    <Button className="accordion-button" onClick={handleToggle}>Operators</Button>
                </h2>
                <div id="togglebusOperators" className={`accordion-collapse collapse ${isCollapsed ? 'show' : ''}`} aria-labelledby="busOperators">
                    <div className="accordion-body pb-0">
                        {OperatorsData.length > 0 && OperatorsData.map((item) => (
                            <div className="form-check" key={item.id}>
                                <Checkbox name="busOperators" value={item.id} className="form-check-input" onChange={onChangeOperators} style={{ border: 'none' }} />
                                <label className="form-check-label" htmlFor="sleeper">{item.operators_name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Operators;
