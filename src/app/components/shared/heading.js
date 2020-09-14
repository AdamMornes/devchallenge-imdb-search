import React from 'react';

const Heading = props => (
    <React.Fragment>
        <h1 className="text-2xl font-bold leading-tight mb-4">{props.children}</h1>
        <hr className="mt-3 mb-4" />
    </React.Fragment>
);

export default Heading;