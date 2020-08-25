import React from 'react';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../Common/State';

const Menu = () => {

    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

    return (
        <div className={`menu pw-light-2 ${menuOpen && 'open'} `}>
            {menuOpen &&
                <>
                    <div className="tab-container">
                        {/*Object.values(TAB).map(t => (
                            <ButtonInput className={`tab ${t.id === TAB[menuTab].id ? 'pw-accent' : 'pw-primary'}`} onClick={() => setMenuTab(t.id)}>{t.name}</ButtonInput>
                        ))*/}
                    </div>
                  
                </>
            }
        </div>
    );
};

export default Menu;
