
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import useRouteContext from '../Common/Router';

import Common from '../Common/_module';
import './ModuleList.css';

const MODULES = [
    {
        id: 'concept',
        name: 'Concept',
        description: 'Preview a single chord, scale, etc...',
        component: () => null,
        cardComponent: () => null
    },
    {
        id: 'progression',
        name: 'Concept Progression',
        description: 'Generic progression for chords, etc...',
        component: () => null,
        cardComponent: () => null
    },
    {
        id: 'chart',
        name: 'Concept Chart',
        description: 'Generic chart for chords, jazz standards, etc...',
        component: Viewers.Modules.Chart,
        cardComponent: Viewers.Modules.ChartCard
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
    },
    /*{
        id: 'rhythm',
        name: 'Rhythm',
        description: 'Rhythmic ideas',
        component: Viewers.Modules.Rhythm,
        cardComponent: Viewers.Modules.RhythmCard
    },*/
];


const Button = Viewers.UI.ButtonInput;

const ModuleRow = ({ module }) => {
    const Module = module.component;

    const routeContext = useRouteContext();

    const button = <Button className='pw-accent' onClick={() => routeContext.push(module.id)}>Go!</Button>;
    return (
        <tr>
            <td>{module.name}</td>
            <td>{module.description}...</td>
            <td>{Module ? <Module /> : null}</td>
            <td>{button}</td>
        </tr>
    );
};

const ModuleList = () => {
    const data = MODULES;
    return (
        <table className='module-table pw-lighter'>
            <thead>
                <tr>
                    <th className="pw-secondary">Name</th>
                    <th className="pw-secondary">Description</th>
                    <th className="pw-secondary">Preview</th>
                    <th className="pw-secondary">Launch</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i) => <ModuleRow key={i} module={d} />)}
            </tbody>
        </table>
    );
};

export default ModuleList;
