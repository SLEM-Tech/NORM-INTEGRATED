"use client";
import React, { useState } from "react";
import Picture from "../picture/Picture";
import { norm_bg } from "@public/images";
import { usePathname, useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "@node_modules/react-icons/fi";

const AllCategorySection = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [isSearchLoading, setIsSearchLoading] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const handleSearch = () => {
		setIsSearchLoading(true);
		if (pathname === "/search") {
			setIsSearchLoading(false);
			router.push(`/search?${searchValue}`);
		} else {
			router.push(`/search?${searchValue}`);
		}
	};

	return (
		<>
			<section className='grid place-items-center relative overflow-hidden min-h-screen'>
				<div className='absolute inset-0'>
					<div className='relative w-full h-full'>
						<Picture
							src={norm_bg}
							alt='norm bg'
							loading='eager'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
				<div className='z-10 text-white w-[90%] md:w-4/5 lg:w-3/5 text-center space-y-3 sm:space-y-5 lg:space-y-8'>
					{/* Heading */}
					<h3 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight md:leading-[1.2]'>
						Premium Auto Parts, Built for Performance.
					</h3>

					{/* Subheading */}
					<p className='text-base md:text-lg lg:text-2xl leading-6 sm:leading-7 lg:leading-8 text-white/80 px-2 sm:px-0'>
						Find high-quality, durable auto parts for every make and model.
					</p>

					{/* Search Bar */}
					<div className='flex justify-center items-center mx-auto w-[90%] lg:w-fit h-14 py-1 px-2 backdrop-blur-lg bg-white/40 rounded-full border border-white/80'>
						<input
							type='text'
							placeholder='Search Spare Parts'
							className='text-sm lg:text-base text-white px-4 sm:w-[300px] xl:w-[400px] py-1 bg-transparent rounded-l-sm outline-none focus:ring-0 transition'
							value={searchValue}
							onChange={handleInputChange}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									handleSearch();
								}
							}}
						/>

						{isSearchLoading ? (
							<button
								type='button'
								className='flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full font-semibold transition-[.5] focus:outline-none focus:ring text-xl'
							>
								<ImSpinner2 className='animate-spin' />
							</button>
						) : (
							<button
								type='submit'
								className='flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full font-semibold transition-[.5] hover:text-primaryColor-200 focus:outline-none focus:ring text-xl'
								onClick={handleSearch}
							>
								<FiSearch />
							</button>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default AllCategorySection;
