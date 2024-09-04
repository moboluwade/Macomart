// src/pages/buyer/product/[id]/index.js
import { useRouter } from 'next/router';
import product from '@/pages/db/products'; // Adjust path if necessary

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const productId = Array.isArray(id) ? id[0] : id;

  // Find the product by ID
  const productDetail = product.find((p) => p.product_id === Number(productId));

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{productDetail.product_name}</h1>
      <div className="flex">
        <img
          src={productDetail.Thumbnail}
          alt={productDetail.product_name}
          className="w-1/2 object-cover"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold">Price: ${productDetail.sale_price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Vendor: {productDetail.vendor_name}</p>
          <p className="text-sm text-gray-600">Description: {productDetail.description}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
