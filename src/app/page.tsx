import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import WhyChooseUs from "./(Home)/_components/WhyChooseUs";
import ExperiencesAndMaterial from "./(Home)/_components/ExperiencesAndMaterial";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
	title: title,
	description: description,
	icons: SEODATA.defaultOGImage,
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

const page = () => {
	return (
		<AppLayout>
			<AllCategorySection />
			<div className='py-6 mx-auto max-w-[1300px] '>
				<WhyChooseUs />
				<div className='mt-4 sm:mt-10 px-2 sm:px-0'>
					<SortedProducts />
				</div>
				<ExperiencesAndMaterial />
			</div>
		</AppLayout>
	);
};

export default page;
