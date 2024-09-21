"use client"

import { useRouter } from 'next/router';
import product from '../../db/products'; 
import RootLayout from '../../layout'; 
import CustomCarousel from '../../component/carousel'; // Adjust path if necessary
// import { useCart } from '../../../context/CartContext'; // Adjust path if necessary

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${index < filledStars ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
    </div>
  );
};

const ProductDetailPage = ({ productDetail }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!productDetail) {
    return (
      <RootLayout>
        <div className="container mx-auto p-4">
          <div className="text-center">Product not found</div>
        </div>
      </RootLayout>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...productDetail, quantity: 1 });
  };

  const handleBuyNow = () => {
    alert('Redirecting to checkout');
  };

  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-start justify-center">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <CustomCarousel images={productDetail.images} />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h1 className="text-2xl font-bold mb-2">{productDetail.product_name}</h1>
            <p className="text-lg font-semibold mb-2">Price: ₦{productDetail.sale_price.toFixed(2)}</p>
            <p className="text-sm text-gray-600 mb-4">Vendor: {productDetail.vendor_name}</p>
            <StarRating rating={productDetail.rating} />
            <p className="text-sm text-gray-600 mb-4">{productDetail.description}</p>
            <div className="flex space-x-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                // onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

// Fetch product details during build
export async function getStaticProps({ params }) {
  const productId = params.id;

  // Simulating product data fetching from a database or API
  const productDetail = product.find((p) => p.product_id === Number(productId));

  if (!productDetail) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDetail,
    },
    revalidate: 10,
  };
}

// Define all the possible paths for product pages
export async function getStaticPaths() {
  const paths = product.map((p) => ({
    params: { id: p.product_id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
