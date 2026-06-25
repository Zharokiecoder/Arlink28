import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Terms of Service | ARLink28',
  description: 'The terms and conditions governing your use of the ARLink28 website and services.',
};

const markdown = `
These Terms of Service ("Terms") govern your access to and use of the ARLink28 website, applications, and services (together, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.

If you do not agree to these Terms, please do not use the ARLink28 website or Services.

## 1. About ARLink28

ARLink28 is a Pan-African travel ecosystem connecting travellers with flight bookings, hotel reservations, holiday packages, visa support services, tourism experiences, airport transfers, and future aviation operations across Africa.

ARLink28 acts as a platform and, in many cases, as an intermediary connecting customers with third-party airlines, hotels, visa providers, and travel partners.

## 2. Eligibility

To use our Services, you must be at least 18 years of age or be using the platform under the supervision of a parent or guardian. By using ARLink28, you confirm that you have the legal capacity to enter into these Terms.

## 3. Account Responsibility

Where an account is required to access certain features, you are responsible for:

* Providing accurate and complete information
* Maintaining the confidentiality of your login credentials
* All activity that occurs under your account
* Notifying ARLink28 promptly of any unauthorised use

## 4. Bookings and Third-Party Services

Many bookings made through ARLink28 are fulfilled by third-party suppliers, including airlines, hotels, tour operators, and partners such as Sherpa, Viator, Trip.com, GetYourGuide, iVisa, and Travelstart.

When you make a booking:

* You enter into a contract with the relevant supplier, subject to that supplier's own terms and conditions
* ARLink28 facilitates the transaction but is not the supplier of the underlying travel service
* Pricing, availability, and fare rules are determined by the supplier and may change without notice
* You are responsible for reviewing all booking details, fare conditions, and supplier terms before confirming a purchase

## 5. Payments

All payments made through ARLink28 or its partner platforms must be made using accepted payment methods. You confirm that any payment information provided is accurate and that you are authorised to use the chosen payment method.

ARLink28 reserves the right to cancel or refuse any booking suspected of fraud, error, or unauthorised use.

## 6. Visa and Travel Documentation

Where ARLink28 provides visa assistance or travel documentation support, you remain solely responsible for:

* Ensuring your passport, visa, and travel documents are valid and meet entry requirements
* Verifying requirements with the relevant embassy, consulate, or government authority
* Any consequences arising from incomplete, inaccurate, or outdated travel documentation

ARLink28 does not guarantee visa approval, as this decision rests solely with the relevant government authority.

## 7. Cancellations and Refunds

Cancellation and refund eligibility is governed by our [Refund & Cancellation Policy](/refund-policy), as well as the policies of the relevant airline, hotel, or supplier involved in your booking.

## 8. Acceptable Use

When using the ARLink28 website, you agree not to:

* Use the Services for any unlawful purpose
* Attempt to gain unauthorised access to our systems or other users' accounts
* Submit false, misleading, or fraudulent booking information
* Interfere with the security or proper functioning of the website
* Scrape, copy, or republish our content without authorisation

## 9. Intellectual Property

All content on the ARLink28 website, including text, graphics, logos, and software, is the property of ARLink28 or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.

## 10. Affiliate and Partner Relationships

ARLink28 participates in affiliate and partnership programmes with third-party travel providers, as outlined in our [Affiliate Disclosure](/affiliate-disclosure). ARLink28 may earn a commission when bookings are completed through partner links, at no additional cost to the customer.

## 11. Disclaimer of Warranties

The ARLink28 website and Services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, ARLink28 disclaims all warranties, express or implied, regarding the accuracy, reliability, or availability of the Services. Please refer to our [Disclaimer](/disclaimer) for further detail.

## 12. Limitation of Liability

To the fullest extent permitted by law, ARLink28 shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of the Services, reliance on information provided, or actions of third-party suppliers, as further described in our Disclaimer.

## 13. Force Majeure

ARLink28 shall not be held responsible for failure or delay in performance caused by circumstances beyond its reasonable control, including natural disasters, government action, border closures, public health emergencies, strikes, or airline operational disruptions.

## 14. Termination

ARLink28 reserves the right to suspend or terminate your access to the Services at any time, without notice, where there is reasonable belief of a breach of these Terms, fraudulent activity, or misuse of the platform.

## 15. Governing Law

These Terms shall be governed by and construed in accordance with applicable Nigerian law, without prejudice to any mandatory consumer protection laws that may apply in your country of residence.

## 16. Changes to These Terms

ARLink28 reserves the right to update or modify these Terms at any time to reflect operational, legal, or regulatory changes. Updated Terms will be published on our website with a revised effective date. Continued use of our Services following any changes constitutes acceptance of the updated Terms.

## 17. Contact Information

If you have questions regarding these Terms of Service, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)
`;

export default function TermsOfServicePage() {
  return <LegalPageLayout title="Terms of Service" tag="Legal" icon="fa-file-contract" markdown={markdown} />;
}
