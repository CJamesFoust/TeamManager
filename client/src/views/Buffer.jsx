import React from 'react';
import NewPlayer from './NewPlayer';
import { Router } from '@reach/router';

const Buffer = () => {
    
    return (
        <Router>
            <NewPlayer path="/players/addplayer"></NewPlayer>
        </Router>
    )
}

export default Buffer;