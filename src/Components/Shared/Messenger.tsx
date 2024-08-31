'use client';
import config from '@/lib/config';
import { CustomChat, FacebookProvider } from 'react-facebook';
const Messenger = () => {
	return (
		<FacebookProvider appId={config.facebook_app_id} chatSupport>
			<CustomChat pageId={config.facebook_page_id} minimized={true} />
		</FacebookProvider>
	);
};

export default Messenger;
