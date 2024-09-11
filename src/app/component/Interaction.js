import React from 'react';

// Component for customer feedback
const CustomerFeedback = ({ reviews }) => (
  <div className="my-4">
    <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
    {reviews.length > 0 ? (
      reviews.map((review, index) => (
        <div key={index} className="border p-4 mb-2">
          <h3 className="font-semibold">{review.author}</h3>
          <p className="text-gray-600">{review.comment}</p>
          <p className="text-yellow-500">Rating: {review.rating} ★</p>
        </div>
      ))
    ) : (
      <p>No reviews yet.</p>
    )}
  </div>
);

// Component for similar products
const SimilarProducts = ({ similarProducts }) => (
  <div className="my-4">
    <h2 className="text-xl font-bold mb-2">Similar Products</h2>
    <div className="flex overflow-x-auto space-x-4">
      {similarProducts.map((product) => (
        <div key={product.product_id} className="w-1/4 p-2">
          <img src={product.images[0]} alt={product.product_name} className="w-full h-32 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{product.product_name}</h3>
          <p className="text-gray-600">₦{product.sale_price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

// Component for products from the same vendor
const VendorProducts = ({ vendorProducts }) => (
  <div className="my-4">
    <h2 className="text-xl font-bold mb-2">More from this Vendor</h2>
    <div className="flex overflow-x-auto space-x-4">
      {vendorProducts.map((product) => (
        <div key={product.product_id} className="w-1/4 p-2">
          <img src={product.images[0]} alt={product.product_name} className="w-full h-32 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{product.product_name}</h3>
          <p className="text-gray-600">₦{product.sale_price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

const CustomerInteraction = ({ reviews, similarProducts, vendorProducts }) => (
  <div className="container mx-auto p-4">
    <CustomerFeedback reviews={reviews} />
    <SimilarProducts similarProducts={similarProducts} />
    <VendorProducts vendorProducts={vendorProducts} />
  </div>
);

export default CustomerInteraction;
