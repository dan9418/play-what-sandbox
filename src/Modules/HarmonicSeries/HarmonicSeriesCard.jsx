import React, { useState } from 'react';

import Card from '../Card/Card';

import HarmonicSeries from './HarmonicSeries';

const HarmonicSeriesCard = () => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(16);

    return (
        <Card title="HarmonicSeries">
            <HarmonicSeries fundamental={fundamental} n={n} />
        </Card>
    )
}

export default HarmonicSeriesCard;