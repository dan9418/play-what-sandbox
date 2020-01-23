import * as React from 'react';
import PlayWhat from 'play-what';

import Common from '../../_module';

export default function ConceptSection({ conceptData, setConceptData }) {
    let data = Common.Defaults.CONCEPT_TYPES;
    return (
        <Common.Layout.Section header='Notes' preview={conceptData.value.name + ' ' + conceptData.type.name}>
            <Common.Layout.InputRow label='Type'>
                <Common.Inputs.DropdownInput
                    data={data}
                    value={conceptData.type}
                    setValue={type => setConceptData({ type: type, value: type.presets[0], options: type.defaultOptions })}
                />
            </Common.Layout.InputRow>
            <Common.Layout.InputRow label='Preset'>
                <Common.Inputs.DropdownInput
                    data={conceptData.type.presets}
                    value={conceptData.value}
                    setValue={preset => setConceptData({ type: conceptData.type, value: preset, options: conceptData.options })}
                />
            </Common.Layout.InputRow>
        </Common.Layout.Section >
    );
}
/*
function ScalePanel({ conceptData, setConceptData }) {
    return (
        <Common.Layout.InputRow label='Reverse'>
            <Common.Inputs.SwitchInput
                value={conceptData.options.reverse}
                setValue={(value) => setConceptData({
                    type: conceptData.type,
                    value: conceptData.value.copy().reverse(),
                    options: {
                        ...conceptData.options,
                        reverse: value
                    }
                })}
            />
        </Common.Layout.InputRow>
    );
}

function ChordPanel({ conceptData, setConceptData }) {
    return (
        <Common.Layout.InputRow label='Inversion'>
            <Common.Inputs.NumericInput
                value={conceptData.options.chordInversion}
                setValue={(value) => setConceptData({
                    type: conceptData.type,
                    value: conceptData.value.copy().chordInversion(value),
                    options: {
                        ...conceptData.options,
                        chordInversion: value
                    }
                })}
            />
        </Common.Layout.InputRow>
    );
}*/