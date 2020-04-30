import React, { useState } from 'react';

import Card from '../Card/Card';

import TrueScale from './TrueScale';

const TrueScaleCard = () => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="TrueScale">
            <TrueScale fundamental={100} n={12} />
        </Card>
    )
}

export default TrueScaleCard;