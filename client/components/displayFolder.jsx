import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@mui/material';
import React from 'react';

const DisplayFolder = (props) => {
    return (

        <Card variant='outlined' className='displayFolder'>
            <CardContent>
                <Typography>{props.category}</Typography>
            </CardContent>
            <CardActions>
                <Button className='button' size='small' as={Link} to={`/quiz/${props.category}`}>
                    Take the Quiz   
                </Button>
            </CardActions>
        </Card>
    )
}

export default DisplayFolder;
