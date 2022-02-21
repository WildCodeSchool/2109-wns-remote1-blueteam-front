import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import IPage from '../../interfaces/pages';

const MyFirstPage = (props: IPage) => (
    <Typography component="span" variant="body2" style={{ display: 'flex' }}>
        First component works !
    </Typography>
);
export default MyFirstPage;
