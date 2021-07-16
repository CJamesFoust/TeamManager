import React from 'react';
import { Button } from '@material-ui/core'

const ConditionalButton = (props) => {
    var { length } = props;

    const styles = {
        button: {
            width: "100%",
            display: "block"
        }
    }

    if( length > 1) {
        return (
            <Button type="submit" variant="contained" style={ styles.button } color="primary">
                Add
            </Button>
        )
    }

    else {
        return (
            <Button type="submit" variant="contained" style={ styles.button } disabled>
                Add
            </Button>
        )
    }
}

export default ConditionalButton;