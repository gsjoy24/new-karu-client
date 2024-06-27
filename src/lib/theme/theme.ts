import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#29A56C'
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
