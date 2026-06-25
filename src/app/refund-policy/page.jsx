import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Refund & Cancellation Policy | ARLink28',
  description: 'How cancellations, refunds, and changes are handled for ARLink28 services and partner bookings.',
};

const markdown = `
ARLink28 is committed to providing transparent travel services and supporting customers throughout their travel journey. This Refund & Cancellation Policy explains how cancellations, refunds, and changes are handled for services provided directly by ARLink28 and through our trusted travel partners.

By using ARLink28 services, you acknowledge and agree to the terms outlined below.

## 1. About Our Services

ARLink28 operates as a Pan-African travel ecosystem that connects customers with travel-related products and services, including:

* Flight bookings
* Hotel reservations
* Tourism experiences
* Visa assistance services
* Airport transfers
* Travel packages
* Group travel services
* Travel consultancy services

Many of these services are delivered through third-party providers and affiliate partners.

## 2. Third-Party Supplier Policies

ARLink28 partners with trusted travel providers, including but not limited to:

* Sherpa
* Viator
* Trip.com
* GetYourGuide
* iVisa
* Travelstart

When a booking is made through any partner platform, the cancellation and refund policies of that provider will apply in addition to these terms.

ARLink28 cannot override, modify, or guarantee refunds that are governed by third-party suppliers.

Customers are encouraged to review the cancellation terms of each provider before completing a booking.

## 3. Flight Bookings

Flight booking cancellations and refunds are governed by the airline's fare rules and ticket conditions.

Depending on the ticket purchased:

* Some tickets may be fully refundable.
* Some tickets may be partially refundable.
* Some tickets may be non-refundable.

Refund eligibility, refund amounts, and processing times are determined by the airline and applicable booking provider.

ARLink28 is not responsible for airline cancellation penalties, fare restrictions, or airline-imposed charges.

## 4. Hotel Reservations

Hotel cancellations are subject to the cancellation policy selected at the time of booking.

Hotels may offer:

* Free cancellation within a specified period.
* Partial refunds.
* Non-refundable rates.

Refund decisions are determined by the hotel provider and booking platform.

## 5. Tours, Activities, and Experiences

Tourism activities, excursions, and experiences offered through ARLink28 partners may have different cancellation conditions.

Depending on the provider, customers may be eligible for:

* Full refunds
* Partial refunds
* Travel credits
* Rescheduling options

Cancellation deadlines vary by provider and activity.

Customers should carefully review activity-specific cancellation terms before confirming a booking.

## 6. Visa Assistance Services

ARLink28 may provide visa support and assistance services.

However:

* Visa application fees paid to embassies, consulates, governments, or third-party visa providers are generally non-refundable.
* Submission fees, government fees, and processing charges are usually non-refundable once an application has been submitted.
* Visa refusal or rejection does not automatically entitle a customer to a refund.

Where refunds are available, they will be subject to the policies of the relevant visa provider.

## 7. Airport Transfers and Ground Transportation

Cancellation policies for airport transfers and transportation services vary by supplier.

Refund eligibility depends on:

* Notice period provided
* Supplier policies
* Service utilisation status

Customers should cancel as early as possible to maximise potential refund eligibility.

## 8. Group Travel and Custom Travel Services

For group bookings, customised itineraries, corporate travel arrangements, and special travel projects, cancellation terms may vary depending on supplier commitments and services already secured.

Cancellation fees may apply where reservations, deposits, or supplier commitments have already been made on behalf of the customer.

Specific cancellation terms will be communicated during the booking process.

## 9. ARLink28 Service Fees

Where ARLink28 charges separate consultation, administration, processing, or service fees, such fees may be non-refundable once the service has commenced.

Examples may include:

* Travel consultation services
* Documentation review services
* Administrative processing services
* Bespoke travel planning services

Refund decisions for ARLink28 service fees will be assessed on a case-by-case basis.

## 10. Refund Processing Times

Where a refund is approved, processing times may vary depending on:

* The supplier involved
* Payment provider requirements
* Banking systems
* International payment processing procedures

Typical processing times may range from 7 to 30 business days, although some providers may require longer periods.

ARLink28 cannot guarantee exact refund timelines once requests are being processed by third-party suppliers.

## 11. Force Majeure and Extraordinary Circumstances

ARLink28 shall not be liable for cancellations, delays, losses, or service disruptions resulting from circumstances beyond reasonable control, including:

* Natural disasters
* Severe weather
* Government restrictions
* Border closures
* Political unrest
* Public health emergencies
* Airline operational disruptions
* Strikes or industrial action

Refunds in such circumstances will be subject to supplier policies and applicable regulations.

## 12. Requesting a Cancellation or Refund

Customers wishing to request a cancellation or refund should contact ARLink28 as soon as possible.

Requests should include:

* Booking reference number
* Full customer name
* Date of booking
* Description of the request

ARLink28 will work with the relevant provider to facilitate the request where possible.

Submission of a refund request does not guarantee approval.

## 13. Chargebacks and Disputes

Customers are encouraged to contact ARLink28 before initiating chargebacks or payment disputes.

ARLink28 reserves the right to provide booking records, supplier communications, and transaction information in response to payment disputes.

## 14. Policy Changes

ARLink28 reserves the right to update this Refund & Cancellation Policy at any time to reflect operational, legal, supplier, or regulatory changes.

Updated versions will be published on the ARLink28 website.

## 15. Contact Information

For cancellation requests, refund enquiries, or travel support, please contact:

ARLink28

Email: [info@arlink28.com](mailto:info@arlink28.com)

Website: [www.arlink28.com](http://www.arlink28.com)

ARLink28 remains committed to transparency, fairness, and customer support while working closely with our travel partners to provide trusted travel experiences across Africa.
`;

export default function RefundPolicyPage() {
  return <LegalPageLayout title="Refund & Cancellation Policy" tag="Legal" icon="fa-rotate-left" markdown={markdown} />;
}
