import React from 'react';

export const Greet =({match}) => (
    <div>
        <h1>Welcome {match.params.username}</h1>
        </div>
)