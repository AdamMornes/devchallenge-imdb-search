import React from 'react';
import Heading from '@shared/heading';

const BestMovie = () => (
    <div className="my-8">
        <Heading>
            The Best Movie
        </Heading>

        <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="The Best Movie">
            </iframe>
        </div>
    </div>
);

export default BestMovie;
