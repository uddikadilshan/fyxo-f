import { ProductForm } from "@/components/product/product-form"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Product</h1>
      <ProductForm productId={params.id} />
    </div>
  )
}
