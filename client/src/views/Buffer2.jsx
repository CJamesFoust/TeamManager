import React from 'react';
import PlayerList from './PlayerList';
import { Router } from '@reach/router';

const Buffer2 = () => {
    
    return (
        <Router>
            <PlayerList path="/players/list"></PlayerList>
        </Router>
    )
}

export default Buffer2;