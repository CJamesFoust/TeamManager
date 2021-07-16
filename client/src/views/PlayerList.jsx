import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from '../components/Popup';
import styles from './PlayerList.module.css';

const PlayerList = (props) => {
    var { navigate } = props;
    const [ players, setPlayers ] = useState([]);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ focusedDelete, setFocusedDelete ] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
            })
            .catch(err => console.log("Error: ", err))
    }, [players])

    const navigateToAdd = () => {
        navigate('/players/addplayer');
    }

    const togglePopup = (e) => {
        setIsOpen(!isOpen);
        setFocusedDelete(e.target.value);
    }

    const closePopup = () => {
        setIsOpen(false);
    }

    const deletePlayer = (e) => {
        axios.delete('http://localhost:8000/api/players/' + focusedDelete)
            .then(res => {
                setPlayers(players.filter(player => player._id !== e.target.value));
                setIsOpen(false);
            })
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <div className={ styles.headerText }>
                    <label>Manage Players</label>
                    <label>Manage Player Status</label>
                </div>
            </div>
            <div className={ styles.middle } >
                <div className={ styles.middleLinks } >
                    <label>List</label>
                    <label onClick={ navigateToAdd } className={ styles.link } >Add Player</label>
                </div>
                <div className={ styles.listContainer }>
                    <div className={ styles.labels } >
                        <span>Player Name</span>
                        <span>Preferred Position</span>
                        <span>Actions</span>
                    </div>
                    <br />
                        {players.map((player) => {
                                return <div key={ player._id } className={ styles.mt }> <span>{ player.name }</span> <span>{ player.position }</span> <button value={player._id} onClick={(e) => togglePopup(e)}>Delete</button></div>
                        })}
                </div>
            </div>

            {isOpen && <Popup 
                content={<>
                    <b>Are you sure you want to delete this player?</b>
                    <p>Deleting this player cannot be undone.</p>
                    <button onClick={(e) => deletePlayer(e)} >Delete</button>
                    <button onClick={ closePopup }>Cancel</button>
                    </>}
                    handleclose={ togglePopup }
                />}
        </div>
    )
}

export default PlayerList;