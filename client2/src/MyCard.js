// Not In Use
import React from 'react
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';
import Loginform from './Loginform';

const MyCard = () => {
  return (
    <Card sx={{ maxWidth: 460, margin: 'auto', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="80"
        image="https://kcoproperties.com/leasegeneration/public/kco-logo.jpg"
        alt="leasegeneration"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Loginform />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Don&apos;t have an account? Sign Up
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;