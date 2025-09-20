import { getSpecificSubCategory } from "@/app/actions/categories.action";

export default async function SubCategory({ params }: { params: { subcategory: string } }) {

    const { subcategory } = params;


    const categoryDetails = await getSpecificSubCategory(subcategory)
    return (
        <div className=" container mx-auto my-10">
            <h1 className="text-3xl font-bold text-center">{categoryDetails?.data.name}</h1>
        </div>
    )
}
