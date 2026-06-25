import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy | ARLink28',
  description: 'How ARLink28 collects, uses, and protects your personal information.',
};

const markdown = `
At ARLink28, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our website, use our services, or interact with ARLink28.

By accessing our website or using our services, you agree to the practices described in this Privacy Policy.

## 1. About ARLink28

ARLink28 is a Pan-African travel ecosystem dedicated to connecting travellers with booking services, tourism experiences, travel support solutions, and future aviation opportunities across Africa.

This Privacy Policy applies to all users of the ARLink28 website, applications, platforms, and related services.

## 2. Information We Collect

We may collect personal information that you voluntarily provide when using our services, including:

### Personal Information

* Full name
* Email address
* Telephone number
* Postal address
* Nationality
* Date of birth
* Passport information (where required)
* Travel preferences
* Booking details

### Travel and Visa Information

Where necessary to provide travel-related services, we may collect:

* Passport details
* Visa application information
* Travel itineraries
* Destination preferences
* Supporting travel documentation

### Technical Information

When you visit our website, we may automatically collect:

* IP address
* Browser type
* Device information
* Operating system
* Website usage data
* Referral source
* Cookies and analytics information

## 3. How We Use Your Information

ARLink28 uses your information to:

* Provide travel-related services
* Process bookings and reservations
* Assist with visa and travel support services
* Respond to enquiries
* Improve website performance
* Personalise user experiences
* Communicate service updates
* Manage customer relationships
* Prevent fraud and misuse
* Comply with legal obligations

We will only process personal information where there is a legitimate business purpose or legal basis for doing so.

## 4. Sharing Information with Third Parties

To deliver our services, we may share relevant information with trusted third-party partners, including:

* Airlines
* Hotels
* Tour operators
* Travel agencies
* Visa processing providers
* Transportation providers
* Technology service providers
* Payment processors
* Government authorities where legally required

Information shared will be limited to what is necessary to provide the requested service.

ARLink28 does not sell personal information to third parties.

## 5. Affiliate Partners

ARLink28 works with selected affiliate and travel partners. When you click on external links or make purchases through affiliate partners, those providers may collect information directly from you.

Users are encouraged to review the privacy policies of any third-party websites before submitting personal information.

## 6. Data Security

ARLink28 implements reasonable technical and organisational measures designed to protect personal information from:

* Unauthorised access
* Disclosure
* Alteration
* Loss
* Misuse
* Destruction

While we take security seriously, no internet-based system can guarantee absolute security. Users acknowledge that transmission of information over the internet carries inherent risks.

## 7. Data Retention

We retain personal information only for as long as necessary to:

* Provide services
* Fulfil contractual obligations
* Meet legal requirements
* Resolve disputes
* Maintain business records

When information is no longer required, it will be securely deleted or anonymised where appropriate.

## 8. International Data Transfers

Because ARLink28 operates within a Pan-African travel ecosystem, personal information may be processed or transferred across different jurisdictions where necessary to facilitate bookings, travel services, or customer support.

ARLink28 takes reasonable steps to ensure that transferred data receives an appropriate level of protection.

## 9. Your Rights

Depending on applicable laws, users may have the right to:

* Access personal information held about them
* Request correction of inaccurate information
* Request deletion of personal information
* Restrict processing
* Object to certain forms of processing
* Withdraw consent where applicable

Requests may be submitted using the contact details provided below.

## 10. Marketing Communications

ARLink28 may send marketing communications relating to travel services, promotions, destinations, partnerships, and company updates.

Users may opt out of marketing communications at any time by following unsubscribe instructions or contacting us directly.

Operational communications relating to bookings, support requests, or service updates may still be sent where necessary.

## 11. Cookies and Website Analytics

ARLink28 may use cookies and similar technologies to:

* Improve website functionality
* Analyse visitor behaviour
* Measure website performance
* Personalise user experiences
* Support marketing activities

Users can manage cookie preferences through their browser settings.

Disabling certain cookies may affect website functionality.

## 12. Children's Privacy

ARLink28 does not knowingly collect personal information from children without appropriate parental or guardian involvement where required by law.

If we become aware that personal information has been collected improperly from a child, we will take reasonable steps to remove such information.

## 13. Third-Party Websites

Our website may contain links to third-party websites, travel providers, and partner services.

ARLink28 is not responsible for the privacy practices, content, or policies of external websites. Users access third-party websites at their own discretion.

## 14. Changes to This Privacy Policy

ARLink28 reserves the right to update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes.

Updated versions will be published on our website with a revised effective date.

Continued use of our services following any changes constitutes acceptance of the updated Privacy Policy.

## 15. Contact Information

If you have questions regarding this Privacy Policy or your personal information, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)

ARLink28 is committed to protecting user privacy while delivering trusted travel services and supporting greater connectivity across Africa.

By using ARLink28 services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
`;

export default function PrivacyPolicyPage() {
  return <LegalPageLayout title="Privacy Policy" tag="Legal" icon="fa-user-shield" markdown={markdown} />;
}
