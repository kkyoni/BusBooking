import React from 'react';
import './Index.css';

const Index = () => {
    const logo = 'assets/logo.svg';
    return (
        <div className='logo-container'>
            <div className='main'>
                <div className='inner-div'>
                    <div className='inner-textdiv1'>Unlock the power of</div>
                    <div className='inner-textdiv2'>
                        Generative Ai in your business
                    </div>
                </div>
                <div className='inner-small_div'>
                    QuickAction is a technology company that provides businesses
                    with the a no-code platform to harness the power of
                    Generative AI.
                </div>
                <button className='auth-btn'>View Website</button>
            </div>
            <div className='img-container'>
                <img src={logo} className='logo-img' alt='' />
            </div>
        </div>
    );
};

export default Index;
