import React, { useState } from 'react';

import Card from '../Card/Card';

import Vectors from './Vectors';

const VectorsCard = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="Vectors">
            <Vectors />
        </Card>
    )
}

export default VectorsCard;