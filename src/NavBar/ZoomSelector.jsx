import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Viewers from 'play-what-react-viewers';
import Common from '../Common/_module';
import './NavBar.css';
import { INPUT_MODES, inputModeSelector } from '../Stage/State';
import ButtonInput from 'play-what-react-viewers/src/UI/ButtonInput/ButtonInput';
import { useRecoilState } from 'recoil';


const ZoomSelector = () => {

    const [inputMode, setInputMode] = useRecoilState(inputModeSelector);

    return (
        <div className="zoom-selector">
            {INPUT_MODES.map((m, i) => {
                return (
                    <ButtonInput
                        key={i}
                        onClick={() => setInputMode(m)}
                        className={inputMode.id === m.id ? 'pw-primary' : 'pw-primary'}>
                        {`${m.label} ${m.name}`}
                    </ButtonInput>
                );
            })}
        </div>
    );
}

export default ZoomSelector;
