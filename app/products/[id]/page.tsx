import { Coffee } from "@/components/Products/Coffee";
import { Pdetails } from "@/components/Products/Pdetails";
import { SimilarItems } from "@/components/categories/SimilarItems";
import { SingleProductTab } from "@/components/categories/SingleProductTab";
import Support from "@/components/common/Support";

export default function ProductDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<div className="container mx-auto px-4 py-8">
			<Pdetails />
			<SingleProductTab />
			<SimilarItems
				title="Similar items Viewed products"
				gridColumns={{ mobile: 2, tablet: 2, desktop: 4 }}
			/>
			<SimilarItems
				title="You may also like"
				gridColumns={{ mobile: 2, tablet: 2, desktop: 4 }}
			/>

			<Coffee />
			<Support />
		</div>
	);
}
