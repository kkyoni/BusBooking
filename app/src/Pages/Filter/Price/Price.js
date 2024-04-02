import React, { useState } from 'react';
import { Slider, Button } from 'antd';
function Price({ startRange, endRange, onChangePrice }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="price">
                    <Button className="accordion-button" onClick={handleToggle}>Price</Button>
                </h2>
                <div id="togglePrice" className={`accordion-collapse collapse ${isCollapsed ? 'show' : ''}`} aria-labelledby="price">
                    <div className="accordion-body">
                        <p>
                            <div className='form-control border-0 bg-transparent p-0'>&#8377;{startRange} - &#8377;{endRange}</div>
                        </p>
                        <Slider range defaultValue={[0, 500]} max={500} onChange={onChangePrice} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Price;
