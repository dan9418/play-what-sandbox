import React from 'react';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';

const Menu = () => {
    
    const Tab = null;

    return (
        <div className={`menu pw-light-2 ${menuTab && 'open'} `}>
            {menuTab &&
                <>
                    <div className="tab-container">
                        {Object.values(TAB).map(t => (
                            <ButtonInput className={`tab ${t.id === TAB[menuTab].id ? 'pw-accent' : 'pw-primary'}`} onClick={() => setMenuTab(t.id)}>{t.name}</ButtonInput>
                        ))}
                    </div>
                    <Tab />
                </>
            }
        </div>
    );
};

export default Menu;
