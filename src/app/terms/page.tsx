import { Box, Container, Divider, Typography } from '@mui/material';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Terms of Conditions - Karukon BD',
	description:
		'This website is operated by Karukonbd Online. Throughout the site, the terms “we”, “us,” and “our” refer to Karukonbd Online. Online offers this website, including all information, tools, and services available from this site, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.'
};
const TermsPage = () => {
	return (
		<Container maxWidth='md' sx={{ py: 4 }}>
			<Box mb={4}>
				<Typography variant='h4' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Terms of Conditions
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Overview
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					This website is operated by Karukonbd Online. Throughout the site, the terms “we”, “us,” and “our” refer to
					Karukonbd Online. Online offers this website, including all information, tools, and services available from
					this site, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by
					the following Terms of Service (Terms), including any additional terms and conditions and policies referenced
					herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without
					limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Please read these Terms of Service carefully before accessing or using our website. By accessing or using any
					part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and
					conditions of this agreement, then you may not access the website or use any services. If these Terms of
					Service are considered an offer, acceptance is expressly limited to these Terms of Service.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Any new features or tools that are added to the current store shall also be subject to the Terms of Service.
					You can review the most current version of the Terms of Service at any time on this page. We reserve the right
					to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our
					website. It is your responsibility to check this page periodically for changes. Your continued use of or
					access to the website following the posting of any changes constitutes acceptance of those changes.
				</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					General Conditions
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					You are prohibited from using our products for any illegal or unauthorized purposes. In your use of the
					Service, you must comply with all applicable laws, including but not limited to copyright laws. You must not
					transmit any worms, viruses, or any destructive code. Any breach or violation of these Terms will result in
					the immediate termination of your access to the Services.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right to refuse service to anyone, for any reason, at any time. Please note that your content
					(excluding credit card information) may be transmitted unencrypted and may involve:
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Transmission across various networks
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Modifications to conform and adapt to technical requirements of connecting networks or devices.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, the use of
					the Service, or access to the Service provided through the website, without our express written permission.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Availability and Pricing
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					All items on karukonbd are subject to availability. We will notify you as soon as possible if the products or
					services you have ordered are not available. In such cases, our Customer Care team may offer similar
					alternatives.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Prices are subject to change without prior notice. While we strive to ensure the accuracy of the prices
					displayed on karukonbd, we cannot guarantee that they will always be correct. If there is a price discrepancy,
					we will inform you before dispatching your order, giving you the option to proceed or cancel.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right to modify or discontinue any service (or any part or content thereof) at any time without
					prior notice. We will not be liable to you or any third party for any modification, price change, suspension,
					or discontinuation of the Service.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Products
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Our products are available exclusively online through karukonbd. These items may have limited quantities and
					are eligible for return or exchange only in accordance with our Return, Refund, and Replacement Policy.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					We strive to present our products as accurately as possible, including their original color and size. However,
					variations in color or size may occur due to differences in display settings, technical limitations, or other
					factors related to your device. Therefore, karukonbd cannot guarantee that the physical product will perfectly
					match the display image. If a product does not meet your expectations as described, your only recourse is to
					return it unused, following the conditions outlined in our Return, Refund, and Replacement Policy.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right, but are not obligated, to limit the sale of our products or services to any individual,
					geographic region, or jurisdiction. This right may be exercised on a case-by-case basis. We also reserve the
					right to limit the quantities of any products or services we offer, at any time. All product descriptions and
					pricing are subject to change at our sole discretion, without notice. Additionally, we reserve the right to
					discontinue any product at any time.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Accuracy of Billing and Account Information
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right to refuse any order you place with us. At our sole discretion, we may limit or cancel
					quantities purchased per person, per household, or per order. These restrictions may include orders placed
					under the same customer account, using the same credit card, and/or orders that use the same billing and/or
					shipping address. In the event we make a change to or cancel an order, we will attempt to notify you by
					contacting the phone number or email provided at the time the order was placed. We reserve the right to limit
					or prohibit orders that, in our judgment, appear to be placed by dealers, resellers, or distributors.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					As a visitor or customer, you agree to provide current, complete, and accurate account information for all
					purchases made at our store. You also agree to promptly update your account and other information, including
					your email address and credit card details, to ensure we can complete your transactions and contact you as
					needed.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					Each user account must be created with a unique cell phone number and email address. Multiple accounts cannot
					be created using the same information. In such cases, you will not be able to redeem offers, deals, discount
					coupons, or gift coupons more than once during campaigns or other promotional events.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Third-Party Links
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Certain content, products, and services available through our Service may include materials from third
					parties, provided solely to enhance your experience.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Third-party links on this site may direct you to websites that are not affiliated with us. We are not
					responsible for examining or evaluating the content or accuracy of third-party materials and we do not assume
					any liability for third-party content, websites, services, or any other materials.
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We are not liable for any harm or damages related to the purchase or use of goods, services, resources,
					content, or any other transactions made in connection with third-party websites. Please review third-party
					policies and practices carefully before engaging in any transactions. Any complaints, claims, concerns, or
					questions regarding third-party products or services should be directed to the third party.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Personal Information
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Your submission of personal information through the store is governed by our Privacy Policy. Please visit our
					website to learn more about our Privacy Policy.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Errors, Inaccuracies, and Omissions
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Occasionally, there may be information on our website or within our Services that contains typographical
					errors, inaccuracies, or omissions related to product descriptions, pricing, promotions, offers, shipping
					charges, or availability. We reserve the right to correct any errors, inaccuracies, or omissions, and to
					change or update information or cancel orders if any information on our site or any related website is
					inaccurate at any time without prior notice (including after you have submitted your order).
				</Typography>
				<Typography variant='body1' sx={{ mt: 2 }}>
					We are under no obligation to update, amend, or clarify information on our site or any related website,
					including without limitation, pricing information, except as required by law.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					No specified update or refresh date applied in the Service or on any related website should be taken to
					indicate that all information in the Service or on any related website has been modified or updated.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Order Cancellation
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					At Karukon Online, we are committed to delivering quality and authentic products to our customers. To uphold
					this commitment, we conduct rigorous Quality Control checks after receiving the ordered products from our
					authorized vendors. We reserve the right to cancel any customer order if our quality Control checks reveal any
					issues with the product, as our priority is to provide you with the best online shopping experience.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Karukon Online also reserves the right to cancel any order if the product becomes unavailable or is out of
					stock. Product unavailability may arise from unforeseen inventory management issues, website management
					problems, vendor stock discrepancies, or other unpredictable factors that cannot be preemptively detected by
					our system.
				</Typography>
				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Prohibited Uses
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					In addition to the prohibitions outlined in these Terms of Service, you are strictly prohibited from using the
					website or its content for the following purposes:
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Engaging in any unlawful activities.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Soliciting others to perform or participate in any unlawful acts.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Violating any international, federal, provincial, or national regulations, rules, laws, or local ordinances.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Infringing upon or violating our intellectual property rights or the intellectual property rights of others.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discrim
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Submitting false or misleading information.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Uploading or transmitting viruses or any other type of malicious code that could affect the functionality or
					operation of the Service, any related website, other websites, or the Internet.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Collecting or tracking the personal information of others.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Engaging in activities such as spamming, phishing, pharming, pretexting, spidering, crawling, or scraping.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Using the website or its content for any obscene or immoral purpose.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Interfering with or circumventing the security features of the Service, any related website, other websites,
					or the Internet.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right to terminate your use of the Service or any related website if you violate any of these
					prohibited uses.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Disclaimer of Warranties; Limitation of Liability
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure,
					or error-free. We also do not guarantee that any results obtained from using the service will be accurate or
					reliable. You understand that we may, from time to time, remove the service for indefinite periods or cancel
					the service at any time, without prior notice, under varying circumstances.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and
					all products and services delivered to you through the service are provided &quot;as is&quot; and &quot;as
					available&quot; for your use, without any representation, warranties, or conditions of any kind, either
					express or implied, including all implied warranties or conditions of merchantability, merchantable quality,
					fitness for a particular purpose, durability, title, and non-infringement.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Under no circumstances shall karukonbd, its directors, officers, employees, affiliates, agents, contractors,
					interns, suppliers, vendors, service providers, or licensors be liable for any injury, loss, claim, or any
					direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, but not
					limited to, lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages,
					whether based on contract, tort (including negligence), strict liability, or otherwise, arising from your use
					of any of the service or any products procured using the service. This includes, but is not limited to, any
					errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the
					service or any content (or product) posted, transmitted, or otherwise made available via the service, even if
					advised of their possibility.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Most of the products offered by karukonbd carry a warranty. Customers can avail themselves of the warranty
					directly at any brand-authorized service center or through karukonbd. However, any injury, loss, or damage
					resulting from the use of the product, whether direct or indirect, will not make cynor.com.bd liable for
					providing service facilities, provided that such use and the resulting consequences are not covered or
					supported by the warranty provisions.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Indemnification
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					As a user of the website and its services, you agree to indemnify, defend, and hold harmless karukonbd, its
					parent company, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors,
					service providers, subcontractors, suppliers, vendors, interns, and employees from any claim or demand,
					including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of these
					Terms of Service or any documents they incorporate by reference, or your violation of any law or the rights of
					a third party.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Severability
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					If any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such
					provision shall nonetheless be enforceable to the fullest extent permitted by applicable law. The
					unenforceable portion shall be deemed severed from these Terms of Service, and such determination shall not
					affect the validity and enforceability of any other remaining provisions.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Termination
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					The obligations and liabilities incurred by the parties prior to the termination date shall survive the
					termination of this agreement for all purposes. These Terms of Service are effective unless and until
					terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you
					no longer wish to use our services or by ceasing to use our site.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					If, in our sole judgment, you fail, or we suspect that you have failed, to comply with any term or provision
					of these Terms of Service, we may terminate this agreement at any time without notice, and you will remain
					liable for all amounts due up to and including the date of termination. Additionally, we may deny you access
					to our services (or any part there of) as we deem appropriate.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					Our failure to exercise or enforce any right or provision of these Terms of Service shall not constitute a
					waiver of such right or provision. Any ambiguities in the interpretation of these Terms of Service shall not
					be construed against the drafting party.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					These Terms of Service, along with any policies or operating rules posted by us on this site or in respect to
					the service, constitute the entire agreement and understanding between you and us, governing your use of the
					service. This agreement supersedes any prior or contemporaneous agreements, communications, and proposals,
					whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of
					Service).
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Governing Law
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					These Terms of Service, along with any separate agreements through which we provide you with services, shall
					be governed by and interpreted in accordance with the applicable laws of Bangladesh governing eCommerce. Any
					legal claims or proceedings arising out of or related to this website must be brought before a competent court
					in Bangladesh.
				</Typography>

				<Divider sx={{ my: 2 }} />

				<Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', mb: 2 }}>
					Changes to Terms of Service
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					You can review the most current version of the Terms of Service at any time on this page.
				</Typography>

				<Typography variant='body1' sx={{ mt: 2 }}>
					We reserve the right, at our sole discretion, to update, modify, or replace any part of these Terms of Service
					by posting updates and changes on our website. It is your responsibility to check our website periodically for
					any changes. Your continued use of or access to our website or services following the posting of any changes
					constitutes your acceptance of those changes.
				</Typography>

				<Divider sx={{ my: 2 }} />
			</Box>
		</Container>
	);
};

export default TermsPage;
