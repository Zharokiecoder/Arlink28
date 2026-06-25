import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Affiliate Disclosure | ARLink28',
  description: 'How affiliate relationships work on the ARLink28 website.',
};

const markdown = `
At ARLink28, transparency and trust are important to us. This Affiliate Disclosure explains how affiliate relationships work on our website and how they may impact the content, services, recommendations, and links that we provide.

By using the ARLink28 website, you acknowledge and agree to the terms outlined in this Affiliate Disclosure.

## 1. Our Commitment to Transparency

ARLink28 is a Pan-African travel ecosystem dedicated to helping travellers discover destinations, access travel services, explore tourism opportunities, and connect with travel solutions across Africa and beyond.

In order to support the operation and development of our platform, ARLink28 participates in various affiliate and partnership programmes with travel-related companies and service providers.

This means that when users click on certain links and make purchases or bookings through our website, ARLink28 may receive a commission or referral fee at no additional cost to the customer.

These commissions help support the maintenance, operation, and growth of ARLink28 and allow us to continue providing travel-related information and services.

## 2. What Are Affiliate Links?

Affiliate links are special tracking links provided by partner organisations.

When a user clicks an affiliate link and completes a qualifying action, such as:

* Booking a flight
* Reserving accommodation
* Purchasing a travel experience
* Applying for a visa service
* Booking transportation
* Purchasing travel-related products or services

ARLink28 may earn a commission from the provider.

The price paid by the customer is generally the same whether the booking is made through an affiliate link or directly through the provider.

## 3. Affiliate Partners

ARLink28 may maintain affiliate or referral relationships with travel providers, booking platforms, tourism companies, visa service providers, and other travel-related organisations.

These may include, but are not limited to:

* Sherpa
* Viator
* Trip.com
* GetYourGuide
* iVisa
* Travelstart

Additional affiliate partners may be added, modified, or removed from time to time as ARLink28 expands its travel ecosystem.

## 4. Independence of Recommendations

Although ARLink28 may receive commissions from affiliate partners, we strive to provide information, recommendations, and travel resources that are accurate, helpful, and relevant to our users.

Our participation in affiliate programmes does not automatically determine which services, destinations, providers, or travel opportunities are featured on our platform.

We aim to recommend products and services that we believe may provide value to our users based on available information and market relevance.

However, users should always conduct their own research before making travel decisions.

## 5. No Additional Cost to Users

In most cases, users do not pay any additional fees when purchasing through an affiliate link.

Any commission earned by ARLink28 is generally paid by the partner organisation and does not increase the price paid by the customer.

Pricing, promotions, discounts, and offers remain subject to the policies and pricing structures of the respective provider.

## 6. Third-Party Services

When users click on affiliate links and leave the ARLink28 website, they may be directed to external websites operated by third-party organisations.

These websites operate independently of ARLink28 and maintain their own:

* Terms of Service
* Privacy Policies
* Refund Policies
* Booking Conditions
* Customer Support Procedures

ARLink28 does not control the content, policies, availability, or operations of third-party websites.

Users are encouraged to review all applicable terms and policies before completing transactions with external providers.

## 7. No Guarantees

ARLink28 does not guarantee:

* Service quality
* Pricing accuracy
* Availability of offers
* Booking confirmation
* Supplier performance
* Visa approval outcomes
* Travel experience outcomes

All purchases and bookings remain subject to the terms and conditions of the relevant service provider.

## 8. Future Partnerships and Commercial Relationships

As ARLink28 continues to grow, we may establish additional partnerships with:

* Airlines
* Hotels
* Tourism organisations
* Transportation providers
* Travel technology companies
* Government tourism agencies
* Travel service providers

Some of these relationships may involve affiliate commissions, referral arrangements, sponsorships, commercial agreements, or other forms of compensation.

Where appropriate, ARLink28 will seek to maintain transparency regarding such relationships.

## 9. Sponsored Content

From time to time, ARLink28 may publish sponsored content, promotional campaigns, partner features, or commercial collaborations.

Where practical, sponsored content will be identified in a clear and transparent manner.

Our goal is to ensure that users understand when content may involve a commercial relationship.

## 10. User Responsibility

Users remain responsible for evaluating travel products, services, destinations, and providers before making purchasing decisions.

ARLink28 encourages users to:

* Review provider terms and conditions
* Verify travel requirements
* Confirm pricing and availability
* Conduct independent research
* Seek professional advice where appropriate

Travel decisions should always be based on individual circumstances and requirements.

## 11. Changes to This Disclosure

ARLink28 reserves the right to update this Affiliate Disclosure at any time to reflect changes in partnerships, business activities, regulations, or operational requirements.

Updated versions will be published on the ARLink28 website with a revised effective date.

Continued use of our services following any updates constitutes acceptance of the revised disclosure.

## 12. Contact Information

If you have questions regarding this Affiliate Disclosure or our affiliate relationships, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)

ARLink28 is committed to maintaining transparency, integrity, and trust while building a connected travel ecosystem that supports greater mobility, tourism, and opportunity across Africa.

**ARLink28**
**Connecting Dreams. Connecting Africa.**
`;

export default function AffiliateDisclosurePage() {
  return <LegalPageLayout title="Affiliate Disclosure" tag="Legal" icon="fa-handshake" markdown={markdown} />;
}
