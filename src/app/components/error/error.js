import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
    <div className="text-center text-red-600 my-8">
        <h1 className="text-3xl mb-3 font-bold">Uh Oh!</h1>
        <p className="mb-1">Something absolutely terrible happened and we can't fetch any movie data!</p>
        <p>You'll feel better about it once you check out the <Link to="/best-movie" className="underline font-bold">best movie</Link> of all time.</p>
    </div>
);

export default Error;
