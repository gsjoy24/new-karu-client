import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#08653A',
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
