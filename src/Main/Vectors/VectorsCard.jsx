import React, { useState } from 'react';

import Card from '../Card/Card';

import Vectors from './Vectors';

const VectorsCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <Card title="Vectors" defaultOpen>
            <Vectors />
        </Card>
    )
}

export default VectorsCard;