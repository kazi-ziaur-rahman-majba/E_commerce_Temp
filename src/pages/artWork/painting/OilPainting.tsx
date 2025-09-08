import digitalPaint from "../../../assets/digitalPaint.png";
import noImage from "../../../assets/noImage.png";
import ProductCard from "../../../Component/justForYouCard/ProductCard";
import Sidebar from "../../../Component/sidebar/Sidebar";


interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    image: noImage,
    title: "Beautiful Oil Painting",
    description: "A stunning oil painting with vibrant colors.",
    price: 299.99,
  },
  {
    id: 2,
    image: noImage,
    title: "Nature Scene",
    description: "Peaceful landscape oil painting.",
    price: 399.99,
  },
  {
    id: 3,
    image: noImage,
    title: "Abstract Art",
    description: "Modern abstract oil painting with rich textures.",
    price: 459.99,
  },
  {
    id: 4,
    image: noImage,
    title: "Classic Portrait",
    description: "Hand-painted portrait with exquisite details.",
    price: 349.99,
  },
];

const OilPainting = () => {
  const handleAddToCart = (id: number) => {
    alert(`Added product ${id} to cart`);
  };

  const handleBuyNow = (id: number) => {
    alert(`Proceeding to buy product ${id}`);
  };

  return (
    <>
      <div
        className="bg-blue-300 p-4 h-48 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${digitalPaint})` }}
      >
        <p className="text-4xl font-bold text-blue-800">Oil Painting</p>
      </div>

      <div className="flex w-fit max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto justify-between">
        <div className="lg:block hidden">
          <Sidebar />
        </div>

        <main className="px-6 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow"
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  onAddToCart={() => handleAddToCart(product.id)}
                  onBuyNow={() => handleBuyNow(product.id)}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default OilPainting;
