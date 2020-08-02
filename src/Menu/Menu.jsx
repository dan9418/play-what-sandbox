import React from 'react';
import { useRecoilState } from 'recoil';
import { menuTabState } from '../Common/State';
import ButtonInput from '../UI/ButtonInput/ButtonInput';
import './Menu.css';
import SourceTab from './Tabs/SourceTab';
import NavTab from './Tabs/NavTab';
import ViewersTab from './Tabs/ViewersTab';
import PlaybackTab from './Tabs/PlaybackTab';

const TAB = {
    source: {
        id: 'source',
        name: 'Source',
        component: SourceTab
    },
    /*nav: {
        id: 'nav',
        name: 'Nav',
        component: NavTab
    },*/
    viewers: {
        id: 'viewers',
        name: 'Viewers',
        component: ViewersTab
    },
    selection: {
        id: 'selection',
        name: 'Selection',
        component: () => null
    },
    /*playback: {
        id: 'playback',
        name: 'Playback',
        component: PlaybackTab
    },*/
};

const Menu = () => {
    const [menuTab, setMenuTab] = useRecoilState(menuTabState);
    const Tab = menuTab && TAB[menuTab].component;

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
