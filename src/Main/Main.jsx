import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';

import Common from '../Common/_module';
import './Main.css';

const MODULES = [
    {
        id: 'inputDocs',
        name: 'Inputs',
        description: 'A list of input types',
        component: null,
        cardComponent: Viewers.Modules.InputDocsCard
    },
    {
        id: 'graph',
        name: 'Graph',
        description: 'Cartesian graph for 2D vectors',
        component: Viewers.Modules.Graph,
        cardComponent: Viewers.Modules.GraphCard
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        description: 'A standard guitar fretboard',
        component: Viewers.Modules.Fretboard,
        cardComponent: Viewers.Modules.FretboardCard
    },
    {
        id: 'keyboard',
        name: 'Keyboard',
        description: 'A standard piano keyboard',
        component: Viewers.Modules.Keyboard,
        cardComponent: Viewers.Modules.KeyboardCard
    },
    {
        id: 'trueScale',
        name: 'True Scale',
        description: 'Scale derived from the harmonic series',
        component: Viewers.Modules.TrueScale,
        cardComponent: Viewers.Modules.TrueScaleCard
    },
    {
        id: 'harmonicSeries',
        name: 'Hamonic Series',
        description: 'Visualization of harmonic series frequencies',
        component: Viewers.Modules.HarmonicSeries,
        cardComponent: Viewers.Modules.HarmonicSeriesCard
    }
];

const Modal = ({ closeModal, children }) => {
    const el = document.getElementById('stage');
    const content = (
        <div className='modal-backdrop'>
            <Viewers.UI.ButtonInput onClick={closeModal} className="modal-close">X</Viewers.UI.ButtonInput>
            <div id="modal" >{children}</div>
        </div>
    );
    return ReactDOM.createPortal(content, el);
};

const ModuleRow = ({ module }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const Card = module.cardComponent;
    const Module = module.component;
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const button = <Viewers.UI.ButtonInput onClick={openModal}>Go!</Viewers.UI.ButtonInput>;
    const modal = <Modal closeModal={closeModal}><Card /></Modal>;
    return (
        <tr>
            <td>{module.name}</td>
            <td>{module.description}...</td>
            <td>{Module ? <Module /> : null}</td>
            <td>{button}{modalOpen && modal}</td>
        </tr>
    );
};

const ModuleTable = ({ openModal }) => {
    const data = MODULES;
    return (
        <table className='module-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Preview</th>
                    <th>Launch</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => <ModuleRow module={d} openModal={openModal} />)}
            </tbody>
        </table>
    );
};

const Main = () => {
    const [modalOpen, setModalOpen] = useState(true);
    return (
        <div className='main'>
            <nav className="top-nav pw-primary">
                <div className="icon"><Common.Icons.GitHub /></div>
                <div className="logo link">Play What</div>
                <div className="spacer" />
                <div className="link">Modules</div>
                <div className="icon meatball"><Common.Icons.Menu /></div>
            </nav>
            <div className="stage" id="stage">
                <div className="column">
                    <ModuleTable openModal={() => setModalOpen(true)} />
                </div>
            </div>
        </div>
    );
}

export default Main;
