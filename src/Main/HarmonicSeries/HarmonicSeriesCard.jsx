import React, { useState } from 'react';

import Card from '../Card/Card';

import HarmonicSeries from './HarmonicSeries';

const HarmonicSeriesCard = () => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="HarmonicSeries">
            <HarmonicSeries fundamental={100} n={32} />
        </Card>
    )
}

export default HarmonicSeriesCard;