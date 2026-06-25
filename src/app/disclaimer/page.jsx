import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Disclaimer | ARLink28',
  description: 'Important disclaimers regarding the information and services provided on the ARLink28 website.',
};

const markdown = `
The information provided on the ARLink28 website and through our services is provided in good faith. However, ARLink28 makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our platform.

By using the ARLink28 website or services, you acknowledge and agree to the disclaimers outlined below.

## 1. General Information Only

Content published by ARLink28, including destination guides, travel tips, pricing references, and service descriptions, is provided for general informational purposes only.

This information should not be relied upon as a substitute for independent research, professional advice, or direct confirmation with the relevant airline, hotel, visa authority, or service provider.

## 2. No Professional or Legal Advice

Nothing on the ARLink28 website constitutes legal, immigration, financial, medical, or other professional advice.

Visa requirements, travel restrictions, health regulations, and entry requirements change frequently and vary by nationality and destination. Travellers should always verify current requirements directly with the relevant embassy, consulate, or government authority before travelling.

## 3. Third-Party Services and Suppliers

ARLink28 works with airlines, hotels, tour operators, visa processing partners, and other third-party suppliers, including but not limited to Sherpa, Viator, Trip.com, GetYourGuide, iVisa, and Travelstart.

ARLink28 does not own or operate these third-party services and is not responsible for:

* The accuracy of pricing, availability, or descriptions displayed by third parties
* The quality, safety, or legality of services provided by third parties
* Delays, cancellations, or disruptions caused by third-party suppliers
* Visa approval, refusal, or processing outcomes determined by government authorities

Use of any third-party service is at your own discretion and subject to that provider's own terms and policies.

## 4. No Guarantee of Results

ARLink28 does not guarantee that any booking, visa application, travel arrangement, or service request will be successful, error-free, uninterrupted, or completed within a specific timeframe.

Outcomes may be affected by factors outside our control, including airline policy, government decisions, weather, supplier availability, and force majeure events.

## 5. Limitation of Liability

To the fullest extent permitted by law, ARLink28, its directors, employees, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:

* Use of, or inability to use, the ARLink28 website or services
* Reliance on any information published on our platform
* Actions or omissions of third-party suppliers or partners
* Travel disruptions, losses, or damages incurred during your trip

This limitation applies whether the claim is based on contract, tort, negligence, or any other legal theory.

## 6. External Links

Our website may contain links to external websites that are not provided or maintained by ARLink28. We do not guarantee the accuracy, relevance, or completeness of any information on these external websites and are not responsible for their content or practices.

## 7. Forward-Looking Statements

References to future services, aviation operations, expansion plans, or ARLink28's regional airline ambitions are forward-looking statements based on current intentions. They do not constitute a guarantee, commitment, or binding offer of future services, routes, or timelines, and are subject to change without notice.

## 8. Changes to This Disclaimer

ARLink28 reserves the right to amend this Disclaimer at any time. Updated versions will be published on our website with a revised effective date. Continued use of our services following any changes constitutes acceptance of the updated Disclaimer.

## 9. Contact Information

If you have questions regarding this Disclaimer, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)
`;

export default function DisclaimerPage() {
  return <LegalPageLayout title="Disclaimer" tag="Legal" icon="fa-triangle-exclamation" markdown={markdown} />;
}
