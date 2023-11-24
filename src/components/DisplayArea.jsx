import React from 'react'
import Panel from './Panel';

function DisplayArea({ queryString }) {
    return (
        <div>
            {Array(2).fill(0).map((v, i) => <Panel key={i} queryString={queryString} />)}
        </div>
    )
}

export default DisplayArea;