import React from 'react';
import './Menu.css';
import { useRecoilState } from 'recoil';
import { menuOpenState, rawSourceState } from '../Common/State';
import ReactJson from 'react-json-view';

const Menu = () => {

    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
    const [rawSource, setRawSource] = useRecoilState(rawSourceState);


    const onEdit = (args) => {
        console.log(args);
        try {
            setRawSource(args.updated_src);
        }
        catch (e) {
            console.error('Can\'t update json', e);
        }
        return true;
    };

    return (
        <div className={`menu pw-light-2 ${menuOpen && 'open'} `}>
            {menuOpen &&
                <>
                    <div className="tab-container">
                        {/*Object.values(TAB).map(t => (
                            <ButtonInput className={`tab ${t.id === TAB[menuTab].id ? 'pw-accent' : 'pw-primary'}`} onClick={() => setMenuTab(t.id)}>{t.name}</ButtonInput>
                        ))*/}
                    </div>
                    <div className="menu-body">
                        <ReactJson src={rawSource} name="src" onEdit={onEdit} collapsed={1} />
                    </div>
                </>
            }
        </div>
    );
};

export default Menu;
