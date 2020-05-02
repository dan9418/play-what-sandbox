import React, { useState } from 'react';

import Card from '../Card/Card';

import TrueScale from './TrueScale';

const TrueScaleCard = () => {
    const [fundamental, setFundamental] = useState(100);
    const [n, setN] = useState(32);

    return (
        <Card title="TrueScale">
            <TrueScale fundamental={fundamental} n={n} />
        </Card>
    )
}

export default TrueScaleCard;