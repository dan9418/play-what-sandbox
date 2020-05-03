import React, { useState } from 'react';

import Card from '../../Common/UI/Card/Card';

import Piano from './Piano';

const PianoCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <Card title="Piano" defaultOpen>
            <Piano />
        </Card>
    )
}

export default PianoCard;