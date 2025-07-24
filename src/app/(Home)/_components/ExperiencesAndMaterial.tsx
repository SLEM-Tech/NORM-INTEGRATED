import { material_img, rectangle_3, tire_img, tools_img } from "@public/images";
import Picture from "@src/components/picture/Picture";
import React from "react";

const ExperiencesAndMaterial = () => {
	return (
		<div className='space-y-6'>
			{/* First Section - Image Left / Content Right */}
			<section className='w-full px-4 md:px-12 py-12 md:py-16 bg-white'>
				<div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 lg:gap-12'>
					{/* Left Image Box - Responsive */}
					<div className='relative w-full md:w-[80%] h-full order-2 md:order-1'>
						<div className='bg-primary rounded-2xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-[5/4]'>
							<Picture
								src={rectangle_3}
								alt='Experience'
								className='w-full h-full object-cover'
							/>
						</div>
						{/* Background card - Hidden on mobile */}
						<div className='hidden md:block absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-2xl z-[-1]' />
					</div>

					{/* Right Content */}
					<div className='space-y-4 md:space-y-5 order-1 md:order-2'>
						<p className='text-xs md:text-sm text-primary tracking-wide font-semibold uppercase'>
							Experiences
						</p>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug'>
							We Provide You The <br className='hidden sm:block' /> Best
							Experience
						</h2>
						<p className='text-gray-600 text-sm md:text-base leading-7 md:leading-8 max-w-lg'>
							Every interaction with us is designed for excellence. From
							intuitive interfaces to seamless workflows, we optimize every
							detail so you can focus on what matters most.
						</p>
					</div>
				</div>
			</section>

			{/* Second Section - Content Left / Images Right */}
			<section className='w-full px-4 md:px-12 py-12 md:py-16 bg-white'>
				<div className='max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 lg:gap-12'>
					{/* Left Content - Same order on all screens */}
					<div className='space-y-4 md:space-y-5'>
						<p className='text-xs md:text-sm text-primary tracking-wide font-semibold uppercase'>
							Materials
						</p>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug'>
							Authentic Parts
						</h2>
						<p className='text-gray-600 text-sm md:text-base leading-7 md:leading-8 max-w-lg'>
							Our products are crafted using only certified, high-grade
							materials sourced from trusted suppliers. Each component undergoes
							rigorous quality testing.
						</p>
					</div>

					{/* Right Images - Responsive Grid */}
					<div className='relative w-full max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center py-8 md:py-12 px-0 md:px-4 lg:px-8'>
						{/* Stacked Small Images - Now horizontal on mobile */}
						<div className='flex-row sm:flex-col gap-4 md:gap-6 w-full sm:w-auto hidden lg:flex'>
							<div className='rounded-2xl overflow-hidden shadow-md w-full sm:w-40 h-32 sm:h-40 flex-shrink-0'>
								<Picture
									src={tire_img}
									alt='Top small image'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='rounded-2xl overflow-hidden shadow-md w-full sm:w-40 sm:h-56 flex-shrink-0'>
								<Picture
									src={tools_img}
									alt='Bottom small image'
									className='w-full h-full object-cover'
								/>
							</div>
						</div>

						{/* Large Image */}
						<div className='relative w-full sm:w-auto'>
							<div className='rounded-2xl overflow-hidden shadow-xl w-full sm:w-[280px] lg:w-[340px] h-[300px] sm:h-[380px]'>
								<Picture
									src={material_img}
									alt='Large main image'
									className='w-full h-full object-cover'
								/>
							</div>
							{/* Background card - Hidden on mobile */}
							<div className='hidden md:block absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-2xl z-[-1]' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ExperiencesAndMaterial;
