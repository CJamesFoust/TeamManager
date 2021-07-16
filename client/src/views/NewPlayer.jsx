import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import styles from './NewPlayer.module.css';
import '@fontsource/roboto';

const NewPlayer = (props) => {
    var { navigate } = props;
    const [ players, setPlayers ] = useState([]);
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const navigateToList = () => {
        navigate('/players/list');
    }

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players/new', player)
            .then(res => {
                setPlayers([...players, res.data]);
                navigate('/players/list');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            })
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <div className={ styles.headerText }>
                    <div>Manage Players</div>
                    <div>Manage Player Status</div>
                </div>
            </div>
            <div className={ styles.middle } >
                <div className={ styles.middleLinks } >
                    <div onClick={ navigateToList }  className={ styles.link } >List</div>
                    <div>Add Player</div>
                </div>                
                <PlayerForm onSubmitProp={ createPlayer } errors={ errors } />
            </div>
        </div>
    )
}

export default NewPlayer;