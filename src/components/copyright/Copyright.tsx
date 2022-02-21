import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

const Copyright = (props: any) => (
    <Typography component="span" variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            BlueTeam Website
        </Link>{' '}
        {new Date().getFullYear()}
    </Typography>
);

export default Copyright;