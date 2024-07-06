import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#ffba00',
			dark: '#004D29'
		},
		secondary: {
			main: '#455a64'
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
