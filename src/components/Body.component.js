import React from 'react';

export const Body = (props) => (
    <div className='body'>
        <div className='title'>
            Counter:
        </div>
        <div className='buttons'>
            <button className='btn danger'>Async Remove (-10)</button>
            <button className='btn danger'>Remove (-1)</button>
            <button className='btn done'>Reset 0</button>
            <button className='btn primary'>Add (+1)</button>
            <button className='btn primary'>Async Add (+10)</button>
        </div>
    </div>
);