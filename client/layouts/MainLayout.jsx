import React from 'react';
import Nav from '../App/Nav.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <Nav />

        <div className="container">
            {content}
        </div>
    </div>
)