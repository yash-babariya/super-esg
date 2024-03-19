import React from 'react';
import Hearobanner from './herobanner';
import GetListed from './get-listed';
import MarqueeCarts from './marqeecarts';
import FindingSec from './findingsec';

export default function Home() {
    return (
        <div>
            <Hearobanner />
            <GetListed />
            <MarqueeCarts />
            <FindingSec />
        </div>
    )
}
