import React from 'react';
import { useRecoilState } from 'recoil';
import { viewersState } from '../../Common/State';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';
import './ViewersTab.css';

const FretboardPanel = ({ fretboardConfig, setFretboardConfig }) => {
    const { fretLow, fretHigh, showDots, showFretNumbers, strings } = fretboardConfig;
    const setArg = (key, value) => setFretboardConfig({ ...fretboardConfig, [key]: value });
    //console.log(viewerConfig.args);
    return (
        <div className="fretboard-panel">
            <h4 className="input-header">Range</h4>
            <div className="input-row">
                <label>Fret Low:</label>
                <ScalarInput value={fretLow} setValue={v => setArg('fretLow', v)} />
            </div>
            <div className="input-row">
                <label>Fret High:</label>
                <ScalarInput value={fretHigh} setValue={v => setArg('fretHigh', v)} />
            </div>

            <h4 className="input-header">Labels</h4>
            <div className="input-row">
                <label>Show Dots:</label>
                <SwitchInput value={showDots} setValue={v => setArg('showDots', v)} />
            </div>
            <div className="input-row">
                <label>Show Numbers:</label>
                <SwitchInput value={showFretNumbers} setValue={v => setArg('showFretNumbers', v)} />
            </div>
        </div>
    );
};

const ViewerPanel = ({ viewerConfig, setViewerConfig }) => {
    const setFretboardConfig = config => setViewerConfig({ ...viewerConfig, args: config })
    return (
        <div className="viewer-panel">
            <h3 className="viewer-header">{viewerConfig.name}</h3>
            {viewerConfig.viewerId === 'fretboard' && (
                <FretboardPanel fretboardConfig={viewerConfig.args} setFretboardConfig={setFretboardConfig} />
            )}
        </div>
    );
};

const ViewersTab = () => {
    const [viewers, setViewers] = useRecoilState(viewersState);

    return (
        <div className="tab-body viewers-tab">
            <h2>Viewers</h2>
            {viewers.map((v, i) => <ViewerPanel key={i} viewerConfig={v} setViewerConfig={config => setViewers([i, config])} />)}
        </div>
    );
};

export default ViewersTab;