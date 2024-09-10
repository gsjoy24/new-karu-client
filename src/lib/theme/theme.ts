import { karla } from '@/app/fonts';
import { createTheme } from '@mui/material';

export const theme = createTheme({
	typography: {
		fontFamily: karla.style.fontFamily
	},
	palette: {
		primary: {
			main: '#242D39',
			dark: '#27704e'
		},
		secondary: {
			main: '#262a2c'
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained'
			}
		},
		MuiContainer: {
			defaultProps: {
				maxWidth: 'xl'
			}
		}
	}
});
