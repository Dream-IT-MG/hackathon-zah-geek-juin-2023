import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#90a7c4',
            darker: '#496595',
        },
        secondary: {
            main: '#BFD1DB',
            lighter: '#DEE6E9',
            darker: '#8EAAB3',
        },
        neutral: {
            main: '#FBF6EA',
            darker: '#EADFD5',
        },
        dark: {
            main: '#60768b',
            lighter: '#7f8a8c',
            darker: '#303642',
        }
    },
});