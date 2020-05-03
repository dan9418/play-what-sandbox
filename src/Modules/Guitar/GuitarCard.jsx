import React, { useState } from 'react';

import Card from '../Card/Card';

import Guitar from './Guitar';

const GuitarCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <Card title="Guitar">
            <Guitar />
        </Card>
    )
}

export default GuitarCard;