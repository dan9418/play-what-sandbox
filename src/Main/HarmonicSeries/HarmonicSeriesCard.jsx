import React, { useState } from 'react';

import Card from '../Card/Card';

import HarmonicSeries from './HarmonicSeries';

const HarmonicSeriesCard = ({ title, children, defaultOpen }) => {
    const [open, setOpen] = useState(defaultOpen || false);

    return (
        <Card title="HarmonicSeries">
            <HarmonicSeries />
        </Card>
    )
}

export default HarmonicSeriesCard;