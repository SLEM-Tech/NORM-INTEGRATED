"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-16 lg:mt-32 pb-4 lg:pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						Norm&apos;s Integrated Garage Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-black/80 sm:max-w-3xl slg:max-w-2xl'>
						At Norm&apos;s Integrated Garage Limited, we provide comprehensive
						automotive services, operate modern parking facilities, and offer
						reliable transportation solutions while ensuring safety, quality,
						and customer satisfaction in all our operations.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Service & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - Norm&apos;s Integrated Garage Limited
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By using Norm&apos;s Integrated Garage Limited&apos;s automotive
								services, parking facilities, or transportation services, you
								agree to the following comprehensive terms and conditions:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>Service Portfolio:</span>{" "}
									Norm&apos;s Integrated Garage provides comprehensive
									automotive services including vehicle sales, repairs,
									maintenance, diagnostic services, parts supply, modern parking
									facilities, vehicle storage, and road transportation logistics
									services for individuals and businesses.
								</li>
								<li>
									<span className='font-medium'>
										Vehicle Service Standards:
									</span>{" "}
									All automotive work is performed by certified technicians
									using quality parts and following manufacturer specifications.
									We maintain professional liability insurance and comply with
									Nigerian automotive industry standards and safety regulations.
								</li>
								<li>
									<span className='font-medium'>
										Parking & Storage Services:
									</span>{" "}
									Modern parking facilities operate with 24/7 security, CCTV
									monitoring, and controlled access systems. Vehicle storage
									services include indoor and outdoor options with varying
									security levels and insurance coverage options.
								</li>
								<li>
									<span className='font-medium'>Transportation Services:</span>{" "}
									Road transportation and logistics services include vehicle
									rental, cargo transport, and logistics coordination. All
									vehicles are properly licensed, insured, and maintained
									according to safety standards. Professional drivers are
									licensed and background-checked.
								</li>
								<li>
									<span className='font-medium'>Vehicle Assessment:</span>{" "}
									Pre-service vehicle inspection documents existing conditions
									and issues. Diagnostic fees apply for complex problem
									identification. Repair estimates provided before work
									commences, with client approval required for costs exceeding
									₦50,000.
								</li>
								<li>
									<span className='font-medium'>Parts & Materials:</span> We use
									OEM (Original Equipment Manufacturer) parts when available,
									with alternative quality parts offered as cost-effective
									options. All parts come with manufacturer warranties. Used or
									rebuilt parts clearly identified with appropriate warranties.
								</li>
								<li>
									<span className='font-medium'>Service Scheduling:</span>{" "}
									Automotive services scheduled based on urgency and complexity.
									Emergency roadside assistance available 24/7 within Lagos
									metro area. Parking reservations recommended during peak
									periods and special events.
								</li>
								<li>
									<span className='font-medium'>Payment Terms:</span> Automotive
									services require 50% deposit for major repairs over ₦100,000.
									Parking fees payable in advance for monthly subscriptions.
									Transportation services billed based on distance, time, and
									vehicle type with fuel surcharges when applicable.
								</li>
								<li>
									<span className='font-medium'>Vehicle Security:</span> While
									we maintain security measures, vehicle owners remain
									responsible for securing personal items. Parking and storage
									services include basic security monitoring, with premium
									security options available for valuable vehicles.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Warranty Coverage:</span>{" "}
								Automotive work guaranteed for 90 days or 5,000 kilometers,
								whichever comes first. Parts warranties as per manufacturer
								specifications. Transportation services covered by comprehensive
								commercial insurance.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Liability Limitations:</span> Our
								liability is limited to the value of services provided.
								Pre-existing vehicle conditions are documented but not covered
								under our warranties. Customer vehicles are serviced at
								owner&apos;s risk with appropriate insurance recommendations.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - NORM&apos;S INTEGRATED GARAGE LIMITED
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Norm&apos;s Integrated Garage Limited is committed to protecting
								the privacy of our customers while providing comprehensive
								automotive services, parking facilities, and transportation
								solutions. This policy explains our data practices across all
								service areas.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								AUTOMOTIVE SERVICES DATA COLLECTION
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									Customer identification (name, contact details, driver&apos;s
									license information)
								</li>
								<li>
									Vehicle information (make, model, year, VIN, license plate,
									mileage)
								</li>
								<li>
									Service history and maintenance records for warranty and
									reference
								</li>
								<li>
									Payment information and billing preferences for transaction
									processing
								</li>
								<li>
									Parking facility usage data including entry/exit times and
									duration
								</li>
								<li>
									Transportation service details including pickup/destination
									locations
								</li>
								<li>
									Insurance information for coverage verification and claims
									processing
								</li>
								<li>
									Emergency contact information for safety and communication
									purposes
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								DATA USAGE IN AUTOMOTIVE OPERATIONS
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To provide automotive services and maintain accurate service
									records
								</li>
								<li>
									To schedule and coordinate vehicle repairs, maintenance, and
									inspections
								</li>
								<li>To manage parking facility access and billing for usage</li>
								<li>
									To coordinate transportation services and logistics operations
								</li>
								<li>
									To process payments and maintain customer account information
								</li>
								<li>To provide warranty service and recall notifications</li>
								<li>To ensure facility security and monitor vehicle safety</li>
								<li>
									To improve service quality through feedback analysis and
									operational optimization
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								AUTOMOTIVE DATA SECURITY MEASURES
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement comprehensive security measures including secure
								storage of vehicle records, encrypted payment processing, and
								restricted access to customer information. Parking facilities
								use advanced security systems with CCTV monitoring and access
								control. Transportation records are maintained securely with
								driver background verification and vehicle tracking systems.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								VENDOR & INSURANCE RELATIONSHIPS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Parts suppliers and service partners operate under
								confidentiality agreements protecting customer vehicle
								information. Insurance companies receive necessary information
								for coverage verification and claims processing only.
								Manufacturer warranty claims include required vehicle and
								service data with customer consent. All partnerships maintain
								strict privacy protection standards.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CUSTOMER RIGHTS & VEHICLE DATA
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Customers have the right to access their vehicle service
								records, request data corrections, and understand how
								information supports our services. Service documentation can be
								provided for warranty, insurance, or vehicle sale purposes.
								Parking and transportation records are available upon request.
								For automotive privacy inquiries, contact
								privacy@normsgarage.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								SERVICE DELIVERY & GUARANTEE POLICY - NORM&apos;S INTEGRATED
								GARAGE LIMITED
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Norm&apos;s Integrated Garage Limited provides comprehensive
								automotive services with professional standards, reliable
								parking solutions, and dependable transportation services backed
								by quality guarantees and customer satisfaction commitments.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Automotive Service Delivery
								</h4>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Repair & Maintenance
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Same-day service for minor repairs and routine
												maintenance
											</li>
											<li>
												3-7 business days for major repairs depending on parts
												availability
											</li>
											<li>
												24/7 emergency roadside assistance within Lagos metro
												area
											</li>
											<li>
												Free vehicle pickup and delivery for repairs over
												₦200,000
											</li>
										</ul>
									</div>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Diagnostics & Inspection
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Computer diagnostic service within 2 hours of arrival
											</li>
											<li>
												Comprehensive vehicle inspection reports provided same
												day
											</li>
											<li>
												Pre-purchase inspection services available by
												appointment
											</li>
											<li>
												Emissions testing and certification services included
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Parking & Storage Facilities
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										24/7 secure parking with CCTV monitoring and access control
									</li>
									<li>
										Hourly, daily, weekly, and monthly parking options available
									</li>
									<li>
										Covered and uncovered parking spaces to suit different needs
									</li>
									<li>
										Vehicle washing and detailing services available on-site
									</li>
									<li>Long-term storage for classic and seasonal vehicles</li>
									<li>
										Valet parking services for special events and premium
										customers
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Transportation & Logistics Services
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Professional drivers available for personal and business
										transportation
									</li>
									<li>
										Vehicle rental services with flexible daily, weekly, and
										monthly rates
									</li>
									<li>
										Cargo transportation and logistics coordination for
										businesses
									</li>
									<li>
										Airport transfer services with advance booking options
									</li>
									<li>
										Corporate transportation packages for regular business
										travel
									</li>
									<li>
										Special event transportation with customized service
										packages
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Service Guarantees & Quality Assurance
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Automotive Work Guarantee:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												90-day warranty on all repair work and installations
											</li>
											<li>
												Parts warranty according to manufacturer specifications
											</li>
											<li>
												Free re-inspection if issues arise within warranty
												period
											</li>
											<li>
												Customer satisfaction guarantee with corrective action
												commitment
											</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Service Quality Standards:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												All work performed by certified automotive technicians
											</li>
											<li>Quality control inspection before vehicle release</li>
											<li>
												Customer walkthrough and explanation of work performed
											</li>
											<li>
												Follow-up service calls to ensure continued satisfaction
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Customer Service & Support
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Service advisors provide detailed explanations and cost
										estimates
									</li>
									<li>
										Regular progress updates for complex repairs and maintenance
									</li>
									<li>
										Customer lounge with WiFi and refreshments during service
									</li>
									<li>
										Shuttle service to nearby locations during vehicle service
									</li>
									<li>
										Online appointment scheduling and service history access
									</li>
									<li>
										Mobile service units for on-site repairs and maintenance
									</li>
								</ul>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Service Department: service@normsgarage.com.ng</li>
									<li>Parking Operations: parking@normsgarage.com.ng</li>
									<li>Transportation Services: transport@normsgarage.com.ng</li>
									<li>Emergency Roadside: +234-801-234-5010 (24/7)</li>
									<li>Website: www.normsgarage.com.ng</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - NORM&apos;S INTEGRATED GARAGE LIMITED
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At Norm&apos;s Integrated Garage Limited, we are committed to
								delivering exceptional automotive services, reliable parking
								solutions, and dependable transportation services that meet
								professional standards and exceed customer expectations. Our
								refund policy ensures fair treatment across all service areas.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. Automotive Services Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Full refund if repair work fails to resolve the diagnosed
											problem
										</li>
										<li>
											Prorated refunds for incomplete work due to parts
											unavailability or technical issues
										</li>
										<li>
											No-cost remedial work for any defects within 90-day
											warranty period
										</li>
										<li>
											Diagnostic fee refund if problem cannot be identified or
											resolved
										</li>
										<li>
											Client-initiated service cancellation subject to work
											completed and parts ordered
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Parking Services Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Prorated refunds for unused monthly parking subscriptions
											with 7-day notice
										</li>
										<li>
											Full refund if parking facility is unavailable due to our
											operational issues
										</li>
										<li>
											Partial refunds for facility maintenance periods affecting
											parking availability
										</li>
										<li>
											No refund for daily parking once vehicle has entered
											facility
										</li>
										<li>
											Security incident refunds handled case-by-case with
											investigation
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. Transportation Services Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Full refund if transportation service is cancelled by our
											company
										</li>
										<li>
											Prorated refunds for incomplete transportation services
											due to vehicle breakdown
										</li>
										<li>
											Client cancellation refunds subject to timing and advance
											notice provided
										</li>
										<li>
											Alternative transportation provided at no cost for service
											failures
										</li>
										<li>
											Rental vehicle refunds for unused days with proper vehicle
											return condition
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										4. Non-Refundable Services & Situations
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Completed automotive work that meets professional
											standards and resolves issues
										</li>
										<li>
											Parts and materials already installed or used in vehicle
											repairs
										</li>
										<li>
											Diagnostic services that successfully identify vehicle
											problems
										</li>
										<li>Transportation services completed as contracted</li>
										<li>
											Parking fees for time periods when service was available
											and provided
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>5. Refund Request Process</span>
									<p className='mt-1'>
										To request a refund across any service area:
									</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@normsgarage.com.ng</li>
										<li>Phone: +234-801-234-5010</li>
										<li>
											Provide original service agreement, receipt, or parking
											ticket
										</li>
										<li>
											Include detailed explanation of the issue or problem
										</li>
										<li>
											Allow vehicle inspection for automotive service disputes
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. Refund Assessment Process
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Automotive refund requests reviewed by service manager
											within 2 business days
										</li>
										<li>
											Parking and transportation refunds assessed within 24
											hours
										</li>
										<li>
											Technical inspection may be required for automotive
											service disputes
										</li>
										<li>
											Customer consultation to explore alternative resolutions
										</li>
										<li>Approved refunds processed within 5-7 business days</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Alternative Resolution Options
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Corrective automotive work performed at no charge</li>
										<li>
											Service credits applied to future automotive, parking, or
											transportation services
										</li>
										<li>
											Parking facility upgrades or alternative arrangements
										</li>
										<li>
											Transportation service credits for future travel needs
										</li>
										<li>
											Extended warranty coverage for automotive work performed
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										8. Insurance & Liability Coverage
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Comprehensive commercial insurance covers automotive
											service operations
										</li>
										<li>
											Parking facility security and liability insurance for
											customer vehicles
										</li>
										<li>
											Transportation services covered by commercial vehicle
											insurance
										</li>
										<li>Third-party claims assistance for covered incidents</li>
									</ul>
								</li>
							</ul>

							{/* <div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For refunds and service resolution:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Norm's Integrated Garage Limited</li>
									<li>Email: refunds@normsgarage.com.ng</li>
									<li>Service Manager: service@normsgarage.com.ng</li>
									<li>Phone: +234-801-234-5010</li>
									<li>Website: www.normsgarage.com.ng</li>
								</ul>
							</div> */}
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
