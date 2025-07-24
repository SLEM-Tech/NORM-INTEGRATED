import React from "react";

const WhyChooseUs = () => {
	const features = [
		{
			title: "Expert Knowledge",
			description: "Our team understands what your vehicle needs.",
		},
		{
			title: "Reliable Support",
			description: "We’re always ready to help you make the right choice.",
		},
		{
			title: "Genuine Parts Only",
			description: "We supply only original and high-quality spare parts.",
		},
	];

	return (
		<section className='w-[80%] mx-auto lg:mx-0 lg:w-full px-4 md:px-0 py-4 lg:py-16 bg-white'>
			<div className='mx-auto grid md:grid-cols-4 gap-8'>
				<div className='md:col-span-1 flex items-center justify-center sm:justify-start w-full'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl text-center sm:text-start font-semibold text-gray-900 leading-snug'>
						Why
						<br /> <span className='font-bold inline-block'>Choosing Us</span>
					</h2>
				</div>

				<div className='md:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center lg:text-start'>
					{features.map((feature, index) => (
						<div key={index} className='space-y-2'>
							<h3 className='text-xl lg:text-2xl font-semibold text-gray-900'>
								{feature.title}
							</h3>
							<p className='text-sm lg:text-base text-gray-600'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
