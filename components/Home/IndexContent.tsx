import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
   customButton: {
      backgroundColor: '#6f2da8',
      color: theme.palette.common.white,
      fontFamily: theme.accentFontFamily,
   },
}));

interface IProps {
   greeting: string;
}

const IndexContent: React.FC<IProps> = ({ greeting }) => {
   const classes = useStyles();

   return (
      <div>
         <h1>
            {greeting}
            {process.env.NEXT_PUBLIC_THEME_GREETING_EMOJI}
            !
         </h1>
         <Button variant="contained" className={classes.customButton}>A Simple Button</Button>
      </div>
   );
};

export default IndexContent;
