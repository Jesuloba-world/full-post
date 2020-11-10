import React from 'react';

import Link from './Link/Link';
import './Links.css';

const links = (props) => (
    <header className="Links">
        <nav>
            <ul>
                <Link name="Home" link="/" />
                <Link name="New Post" link="/new-post" /> 
            </ul>
        </nav>
    </header>
);

export default links