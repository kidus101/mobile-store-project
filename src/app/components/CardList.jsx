import Card from "./Card";
import CardsCarousel from "./Carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const getCardsData = async () => {
  const response = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data , Please reload the page.");
  }
  return response.json();
};

const CardList = async ({ title, subtitle }) => {
  const CardsData = await getCardsData();

  const filteredCards = CardsData.items.filter((card) => card.title === title);

  const filteredCardsPublications = filteredCards.map((card) => card.items);

  const publicationKeys = filteredCardsPublications.flatMap((array) =>
    array.map((obj) => obj.publication)
  );

  const cardListData = {
    cardList: publicationKeys.map((publication) => ({
      title: publication.title,
      rating: publication.rating,
      applyCoupon: publication.applyCoupon,
      uri: publication.media ? publication.media.map((media) => media.uri) : [],
      price: publication.priceInfo.price,
      discountRate: publication.priceInfo.discountRate,
    })),
  };

  return (
    <div className="max-w-[1000px] mx-auto flex justify-between items-center p-4">
      <div className="flex flex-wrap">
        {/* First Column */}
        <div className="w-full md:w-1/2 lg:w-1/5 p-4">
          <div className="bg-white rounded-lg p-4 h-full">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-[11px] text-gray-400">{subtitle}</p>
          </div>
        </div>

        {/* Remaining Columns */}
        <div className="w-full lg:w-4/5 p-4">
          <div className="grid grid-cols-4 gap-4">
            <CardsCarousel autoSlide={true} autoSlideInterval={25000}>
              {cardListData.cardList.map((card, index) => (
                <Card
                  key={index}
                  imageUrl={card.uri[0]}
                  title={card.title}
                  coupon={card.applyCoupon}
                  rating={card.rating}
                  price={card.price}
                  discountRate={card.discountRate}
                />
              ))}
            </CardsCarousel>
          </div>
        </div>
      </div>
    </div>);
};

export default CardList;

// import React from "react";
// import Card from "./Card";

// const getCardsData = async () => {
//   const response = await fetch(
//     "https://api.testvalley.kr/main-shortcut/all"
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch data , Please reload the page.");
//   }

//   return response.json();
// };

// const CardList = ({ title, subtitle }) => {
//   const cardsData = getCardsData();
//   return (
//     <div className="max-w-[1000px] mx-auto flex justify-between items-center p-4">
//       <div className="flex flex-wrap">

//         <div className="">{JSON.stringify(cardsData)}</div>

//         {/* First Column */}
//         <div className="w-full md:w-1/2 lg:w-1/5 p-4">
//           <div className="bg-white rounded-lg p-4 h-full">
//             <h2 className="text-xl font-bold mb-2">{title}</h2>
//             <p className="text-[11px] text-gray-400">{subtitle}</p>
//           </div>
//         </div>

//         {/* Remaining Columns */}
//         <div className="w-full lg:w-4/5 p-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
//             {/* Map through the cards array
//             {cardsData.map((card, index) => (
//               <Card
//                 key={index}
//                 imageUrl={card.imageUrl}
//                 title={card.title}
//                 returnable={card.returnable}
//                 discountRate={card.discountRate}
//                 price={card.price}
//                 coupon={card.coupon}
//                 rating={card.rating}
//               />
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardList;

// // /* eslint-disable @next/next/no-img-element */
// // import React from "react";
// // import { FaStar } from "react-icons/fa";

// // const CardList = () => {
// //   return (
// //     <div className="max-w-[1000px] mx-auto flex justify-between items-center p-4">
// //       {" "}
// //       <div className="flex flex-wrap">
// //         {/* First Column */}
// //         <div className="w-full md:w-1/2 lg:w-1/5 p-4">
// //           <div className="bg-white rounded-lg p-4 h-full">
// //             <h2 className="text-xl font-bold mb-2">HOT DEAL</h2>
// //             <p className="text-[11px] text-gray-400">HAPPY HOUR</p>
// //           </div>
// //         </div>

// //         {/* Remaining Columns */}
// //         <div className="w-full lg:w-4/5 p-4">
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
// //             {/* Card 1 */}
// //             <div className="p-0">
// //               <div className="bg-white rounded-lg p-1 h-full relative">
// //                 <img
// //                   src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/a7899bf9-2e6a-4709-aa99-12af022abcb3.jpeg"
// //                   alt="Card 1"
// //                   className="w-full h-auto mb-2 object-contain"
// //                 />
// //                 <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
// //                   리턴 가능
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <p className="text-sm my-2">
// //                     다이슨 에어스트레이트 스트레이트너 (블루/코퍼)
// //                   </p>
// //                   <div className="flex items-center my-2">
// //                     <span className="text-red-500 font-bold mr-2">7%</span>
// //                     <p className="">62,775</p>
// //                     <p className="text-[10px]">원</p>
// //                   </div>
// //                   {/*  Conditionally Rendering A Coupon  */}
// //                   <div>
// //                     <p className="text-[10px] my-1">coupon</p>
// //                   </div>
// //                   <div className="flex">
// //                     <FaStar className="text-[10px] mt-2 mr-[2px] text-gray-400" />
// //                     <p>4.5</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 2 */}
// //             <div className="p-0">
// //               <div className="bg-white rounded-lg p-1 h-full relative">
// //                 <img
// //                   src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/a7899bf9-2e6a-4709-aa99-12af022abcb3.jpeg"
// //                   alt="Card 1"
// //                   className="w-full h-auto mb-2 object-contain"
// //                 />
// //                 <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
// //                   리턴 가능
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <p className="text-sm my-2">
// //                     다이슨 에어스트레이트 스트레이트너 (블루/코퍼)
// //                   </p>
// //                   <div className="flex items-center my-2">
// //                     <span className="text-red-500 font-bold mr-2">7%</span>
// //                     <p className="">62,775</p>
// //                     <p className="text-[10px]">원</p>
// //                   </div>
// //                   {/*  Conditionally Rendering A Coupon  */}
// //                   <div>
// //                     <p className="text-[10px] my-1">coupon</p>
// //                   </div>
// //                   <div className="flex">
// //                     <FaStar className="text-[10px] mt-2 mr-[2px] text-gray-400" />
// //                     <p>4.5</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 3 */}
// //             <div className="p-0">
// //               <div className="bg-white rounded-lg p-1 h-full relative">
// //                 <img
// //                   src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/a7899bf9-2e6a-4709-aa99-12af022abcb3.jpeg"
// //                   alt="Card 1"
// //                   className="w-full h-auto mb-2 object-contain"
// //                 />
// //                 <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
// //                   리턴 가능
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <p className="text-sm my-2">
// //                     다이슨 에어스트레이트 스트레이트너 (블루/코퍼)
// //                   </p>
// //                   <div className="flex items-center my-2">
// //                     <span className="text-red-500 font-bold mr-2">7%</span>
// //                     <p className="">62,775</p>
// //                     <p className="text-[10px]">원</p>
// //                   </div>
// //                   {/*  Conditionally Rendering A Coupon  */}
// //                   <div>
// //                     <p className="text-[10px] my-1">coupon</p>
// //                   </div>
// //                   <div className="flex">
// //                     <FaStar className="text-[10px] mt-2 mr-[2px] text-gray-400" />
// //                     <p>4.5</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Card 4 */}
// //             <div className="p-0">
// //               <div className="bg-white rounded-lg p-1 h-full relative">
// //                 <img
// //                   src="https://dvd6ljcj7w3pj.cloudfront.net/media/PUBLICATION/a7899bf9-2e6a-4709-aa99-12af022abcb3.jpeg"
// //                   alt="Card 1"
// //                   className="w-full h-auto mb-2 object-contain"
// //                 />
// //                 <div className="absolute bottom-[160px] left-2 bg-green-400 text-white px-[6px] py-[2px] text-sm rounded-md">
// //                   리턴 가능
// //                 </div>
// //                 <div className="flex flex-col">
// //                   <p className="text-sm my-2">
// //                     다이슨 에어스트레이트 스트레이트너 (블루/코퍼)
// //                   </p>
// //                   <div className="flex items-center my-2">
// //                     <span className="text-red-500 font-bold mr-2">7%</span>
// //                     <p className="">62,775</p>
// //                     <p className="text-[10px]">원</p>
// //                   </div>
// //                   {/*  Conditionally Rendering A Coupon  */}
// //                   <div>
// //                     <p className="text-[10px] my-1">coupon</p>
// //                   </div>
// //                   <div className="flex">
// //                     <FaStar className="text-[10px] mt-2 mr-[2px] text-gray-400" />
// //                     <p>4.5</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardList;
