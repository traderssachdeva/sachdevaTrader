import React from "react";

const Products8 = [
  {
    id: 1,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Tukda rice is known for its small, round grains and its ability to absorb flavors well. It has a soft and sticky texture when cooked, making it ideal for dishes that require a slightly sticky rice.`,
    src: "/rice.jpg",
  },
  {
    id: 2,
    name: `Basmati Rice`,
    price: `Rs 80`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie.`,
    src: "/rice2.jpg",
  },
  {
    id: 3,
    name: `Premium Rice`,
    price: `Rs 120`,
    desc: ` A high-quality variety of rice that is considered to be superior to other types of rice in terms of its taste, texture, appearance, and nutritional value. Premium rice is grown under strict quality control.`,
    src: "/rice3.jpg",
  },
  {
    id: 4,
    name: `Golden Stella Rice`,
    price: `Rs 75`,
    desc: `Golden Sella basmati has the delicious taste and visual appeal of pure Basmati, but with improved holding ability and resilience to over cooking. We simply parboil our signature basmati in its husk .`,
    src: "/rice4.jpg",
  },
  {
    id: 5,
    name: `Double chabi Rice`,
    price: `Rs 50`,
    desc: ` It is rich in various nutrients such as carbohydrates, fibres, and many more that balances the body in optimal conditions. It absorbs nutrients and easily changes starches to make less sticky dish.`,
    src: "/img5.jpg",
  },
  {
    id: 6,
    name: `Premium Tukda  Rice`,
    price: `Rs 50`,
    desc: `tukda is a grain popular in Indian cooking. Rice is a low-fat complex carbohydrate that is quickly digested and rapidly made available to the muscles and other body systems and is therefore a perfect source of energy. Nutritional Facts. `,
    src: "/img6.jpg",
  },
  {
    id: 7,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie intake or managing their blood pressure.`,
    src: "/img7.jpg",
  },
  {
    id: 8,
    name: `Brown Rice`,
    price: `Rs 50`,
    desc: `Brown rice is a whole grain rice that has not been stripped of its outer bran layer, unlike white rice. This means that brown rice retains more of its nutritional value, including fiber, vitamins, and minerals such as magnesium and selenium.`,
    src: "/img8.jpg",
  },
];

function Products() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className=" flex justify-center flex-row my-10 text-black text-3xl md:text-5xl">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Products8.map((product) => (
              <a key={product.id} href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.src}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-black font-semibold ">
                  {product.name}
                </h3>
                <p className="mt-4">{product.desc}</p>
                <p className="mt-4 text-justify text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
