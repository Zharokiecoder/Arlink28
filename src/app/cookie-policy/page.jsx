import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Cookie Policy | ARLink28',
  description: 'How ARLink28 uses cookies and similar technologies on our website.',
};

const markdown = `
This Cookie Policy explains how ARLink28 ("ARLink28", "we", "our", or "us") uses cookies and similar technologies when you visit our website, use our services, or interact with our digital platforms.

By continuing to use the ARLink28 website, you agree to the use of cookies in accordance with this Cookie Policy, unless you choose to disable them through your browser settings or cookie preferences.

## 1. What Are Cookies?

Cookies are small text files stored on your computer, smartphone, tablet, or other device when you visit a website.

Cookies help websites remember information about your visit, improve functionality, personalise user experiences, and provide insights into website performance.

Cookies do not generally give us direct access to your device or personal files.

## 2. Why ARLink28 Uses Cookies

ARLink28 uses cookies to:

* Improve website performance
* Enhance user experience
* Remember user preferences
* Support website security
* Analyse website traffic
* Measure marketing effectiveness
* Monitor website functionality
* Facilitate travel booking processes
* Support affiliate tracking systems

Cookies help us deliver a smoother and more personalised experience to visitors.

## 3. Types of Cookies We Use

### Essential Cookies

Essential cookies are necessary for the operation of our website.

These cookies enable core website functions such as:

* Page navigation
* Security features
* Form submissions
* Session management
* User authentication

Without these cookies, certain website features may not function properly.

### Performance and Analytics Cookies

These cookies help us understand how visitors interact with our website.

They may collect information such as:

* Number of visitors
* Most visited pages
* Traffic sources
* Time spent on pages
* User interactions

This information helps ARLink28 improve website performance and user experience.

Examples may include analytics tools such as:

* Google Analytics
* Website performance monitoring tools
* User behaviour analysis platforms

Information collected is generally aggregated and anonymised where possible.

### Functional Cookies

Functional cookies allow the website to remember user preferences and settings.

These cookies may remember:

* Language preferences
* Region selections
* User settings
* Saved preferences

Functional cookies help provide a more personalised experience during future visits.

### Marketing and Advertising Cookies

Marketing cookies may be used to:

* Deliver relevant advertising
* Measure campaign effectiveness
* Track user engagement
* Support remarketing activities

These cookies may be placed by ARLink28 or approved third-party marketing providers.

Marketing cookies help ensure that users receive more relevant content and promotional information.

### Affiliate Tracking Cookies

As part of our travel ecosystem, ARLink28 works with affiliate partners and travel providers.

Affiliate tracking cookies help identify when users:

* Click affiliate links
* Visit partner websites
* Complete bookings or purchases

These cookies allow affiliate partners to recognise referrals originating from ARLink28.

Affiliate tracking helps support the operation and development of our platform through commission-based partnerships.

## 4. Third-Party Cookies

Some cookies may be placed by third-party providers whose services are integrated into the ARLink28 website.

These providers may include:

* Travel booking partners
* Affiliate networks
* Analytics providers
* Payment processors
* Marketing platforms
* Social media services

Examples may include services associated with:

* Sherpa
* Viator
* Trip.com
* GetYourGuide
* iVisa
* Travelstart

ARLink28 does not control the cookies placed directly by third-party websites after users leave our platform.

Users are encouraged to review the cookie and privacy policies of those providers.

## 5. Information Collected Through Cookies

Cookies may collect information such as:

* Device type
* Browser type
* IP address
* Operating system
* Pages visited
* Time spent on the website
* Referral source
* Click activity
* Website preferences

Cookies generally do not collect sensitive personal information unless voluntarily provided by the user.

## 6. Managing Cookie Preferences

Users have the ability to manage or disable cookies through browser settings.

Most web browsers allow users to:

* View stored cookies
* Delete cookies
* Block cookies
* Restrict third-party cookies
* Set notifications before cookies are stored

Instructions can typically be found within browser help settings.

Please note that disabling cookies may affect website functionality and user experience.

## 7. Consequences of Disabling Cookies

If cookies are disabled, some features of the ARLink28 website may not function correctly.

This may affect:

* Website performance
* Booking processes
* Form submissions
* User preferences
* Website personalisation
* Certain partner integrations

Users may still access portions of the website, but functionality may be limited.

## 8. Data Protection

Information collected through cookies is handled in accordance with the ARLink28 Privacy Policy.

We take reasonable measures to protect information collected through our website and use cookies responsibly to support operational and customer service objectives.

For more information regarding how we process personal information, please review our Privacy Policy.

## 9. Updates to This Cookie Policy

ARLink28 reserves the right to modify or update this Cookie Policy at any time to reflect:

* Changes in technology
* New services
* Legal requirements
* Regulatory updates
* Operational changes

Updated versions will be published on the website and become effective upon publication.

Users are encouraged to review this policy periodically.

## 10. Contact Information

If you have questions regarding this Cookie Policy or the use of cookies on the ARLink28 website, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)

ARLink28 is committed to maintaining transparency regarding the technologies used on our website while providing a secure, efficient, and user-friendly travel experience for travellers across Africa and beyond.

**ARLink28**
**Connecting Dreams. Connecting Africa.**
`;

export default function CookiePolicyPage() {
  return <LegalPageLayout title="Cookie Policy" tag="Legal" icon="fa-cookie-bite" markdown={markdown} />;
}
