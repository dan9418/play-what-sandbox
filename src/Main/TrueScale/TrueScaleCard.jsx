import React, { useState } from 'react';

import Card from '../Card/Card';

import TrueScale from './TrueScale';

const TrueScaleCard = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="TrueScale">
            <TrueScale />
        </Card>
    )
}

export default TrueScaleCard;