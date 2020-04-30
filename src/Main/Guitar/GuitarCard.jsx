import React, { useState } from 'react';

import Card from '../Card/Card';

import Guitar from './Guitar';

const GuitarCard = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="Guitar">
            <Guitar />
        </Card>
    )
}

export default GuitarCard;