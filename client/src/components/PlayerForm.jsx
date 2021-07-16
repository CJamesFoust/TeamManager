import React, { useState } from 'react';
import {
    Paper, 
    FormControl, 
    OutlinedInput, 
    InputLabel } from '@material-ui/core';
import ConditionalButton from './ConditionalButton';

const PlayerForm = (props) => {
    const { onSubmitProp, errors } = props;
    const [ name, setName ] = useState('')
    const [ position, setPosition ] = useState('');

    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, position});
    }

    const styles = {
        paper: {
            width: "35rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%",
            display: "block"
        },
        container: {
            minWidth: "35rem"
        },
        containerTwo: {
            display: "flex", flexDirection: 'column'

        }
    }

    return (
        <div style={ styles.container }>
            <Paper elevation={3} style={ styles.paper }>
                <form onSubmit={ onFormSubmitHandler }>
                    <h2>Add Player</h2>
                    <div style={ styles.containerTwo }>
                        <FormControl variant="outlined" style={ styles.input }>
                            <InputLabel>Name</InputLabel>
                            <OutlinedInput 
                                type="text" 
                                onChange={(e) => setName(e.target.value)} 
                                value={ name } />
                            {errors ? errors.map((err, index) => <small key={ index }> { err } </small>) : <small></small>}
                        </FormControl>
                        <FormControl variant="outlined" style={ styles.input }>
                            <InputLabel>Position</InputLabel>
                            <OutlinedInput 
                                type="text" 
                                onChange={(e) => setPosition(e.target.value)} 
                                value={ position } name="position" />
                        </FormControl>
                            <ConditionalButton length={ name.length } />
                    </div>
                </form>
                
            </Paper>
        </div>
    )
}

export default PlayerForm;