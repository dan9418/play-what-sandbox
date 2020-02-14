import * as React from 'react';
import PlayWhat from 'play-what';
import './Inputs.css';

const getInputRow = (stringDef, setStringDef, index) => {
    const tuneString = tuning => setStringDef({ tuning: tuning });
    const deleteString = () => setStringDef(null);

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{PlayWhat.Constants.PITCH_CLASS_NAMES[PlayWhat.Common.modulo(stringDef.tuning, 12)]}</td>
            <td>{4 + Math.floor(stringDef.tuning / 12)}</td>
            <td><Common.Inputs.NumericInput value={stringDef.tuning} setValue={tuneString} /></td>
            <td><Common.Inputs.BoxButton text='D' action={deleteString} /></td>
        </tr>
    );
}

export const Strings = ({ strings, setStrings }) => {
    const setString = (stringDef, index) => {
        if (stringDef) {
            let stringsCopy = [...strings];
            stringsCopy[index] = stringDef;
            setStrings(stringsCopy);
        }
        else if (strings.length > 1) {
            setStrings(strings.filter((v, i) => i !== index));
        }
    }
    const addString = () => {
        setStrings([...strings, { tuning: 0 }]);
    }

    return (
        <table className='fretboard-strings-input'>
            <thead>
                <tr>
                    <th>String</th>
                    <th>Name</th>
                    <th>Octave</th>
                    <th>Index</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {strings.map((str, i) => getInputRow(str, newStr => setString(newStr, i), i))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Common.Inputs.BoxButton text='+' action={addString} /></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}