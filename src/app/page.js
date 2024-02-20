import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Icons from "./components/Icon";
import CardList from "./components/CardList";
import Icon from "./components/Icon";
import BannerCarousel from "./components/BannerCarousel";


const slides = [
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1707875671502-메인배너_PC_센터_음향기기빅세일.png",
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702276829496-메인배너_PC_리턴리뉴프로모션_1101.png",
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1702277056711-메인배너_MO_리턴리뉴프로모션_1101.png",
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1694695101074-메인배너_PC_기본_이어폰유닛기획전.png",
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1703051964861-메인배너_MO.png",
  "https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1706760272311-메인배너_PC_갤럭시브랜드관.png",
];

const getHotDealData = async () => {
  const response = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data , Please reload the page.");
  }
  return response.json();
};

const getBannerData = async () => {
  const response = await fetch(" https://api.testvalley.kr/main-banner/all");
  if (!response.ok) {
    throw new Error("Failed to fetch data , Please reload the page.");
  }
  return response.json();
};

const getIconsData = async () => {
  const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
  if (!response.ok) {
    throw new Error("Failed to fetch data , Please reload the page.");
  }
  return response.json();
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

const Home = async () => {
  const HotDealData = await getHotDealData();
  const IconsData = await getIconsData();
  const bannerData = await getBannerData();
  const CardsData = await getCardsData();

  const mappedData = HotDealData.items
    .filter((item) => item.publication)
    .map((item) => {
      const publication = item.publication;

      console.log("item", publication);

      const { title, subtitle, items } = item;

      // Extract the desired properties from the nested object
      // const cardTitle = publication.title;
      // const mediaUrl = publication.media[0].uri; // Assuming the media array has at least one item
      // const priceInfo = publication.priceInfo;
      // const applyCoupon = publication.applyCoupon;
      // const rating = publication.rating;
      return {
        title,
        subtitle,
        items,
        // cardTitle,
        // mediaUrl,
        // priceInfo,
        // applyCoupon,
        // rating,
      };
    });

  const filteredCards = CardsData.items.filter(
    (card) => card.title === "저렴한 거격과 보장된 성능, 더함 TV"
  );

  const filteredCardsPublications = filteredCards.map((card) => card.items);

  const publicationKeys = filteredCardsPublications.flatMap((array) =>
    array.map((obj) => obj.publication)
  );

  // const cardListData = {
  //   titles: publicationKeys.map((publication) => publication.title),
  //   ratings: publicationKeys.map((publication) => publication.rating),
  //   applyCoupons: publicationKeys.map((publication) => publication.applyCoupon),
  //   uris: publicationKeys.flatMap((publication) =>
  //     publication.media ? publication.media.map((media) => media.uri) : []
  //   ),
  // };

  const cardListData = {
    cardList: publicationKeys.map((publication) => ({
      title: publication.title,
      rating: publication.rating,
      applyCoupon: publication.applyCoupon,
      uri: publication.media ? publication.media.map((media) => media.uri) : [],
    })),
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[1000px] mx-auto flex justify-between items-center p-4">
        <div className="max-h-[350px]   overflow-hidden">
          <BannerCarousel autoSlide={true} autoSlideInterval={25000}>
            {bannerData.map((banner, i) => (
              <Image
                width={1000}
                height={10}
                src={banner.pcImageUrl}
                key={i}
                alt="Banner Image"
                objectFit="cover"
              />
            ))}
          </BannerCarousel>
        </div>
      </div>
      {/* <div className="">{JSON.stringify({ ...cardListData })}</div> */}
      <div className="max-w-[1000px] my-2 mx-auto flex justify-between items-center p-4">
        <div className="grid grid-cols-5 mx-auto md:grid-cols-10 gap-6">
          {IconsData.map((icon, index) => (
            <Icon key={index} imageUrl={icon.imageUrl} title={icon.title} />
          ))}
        </div>
      </div>{" "}
      <CardList title={"HOT DEAL"} subtitle={"HAPPY HOUR"} />
      <CardList title={"New In"} subtitle={"#주목할만한신상품"} />
      {/* Left One section here */}
      {/* Mouse section */}
      <CardList
        title={"로지텍 AS보장 정품 마우스/키보드 단독특가"}
        subtitle={"#병행수입 아닌 정품 제품으로 확실한  AS보장! "}
      />
      {/* LG Section left */}
      <CardList
        title={"맥북 클리어런스 세일!"}
        subtitle={"오직 테스트밸리에서만! 30일 체험해보고 구매하자"}
      />
      <CardList
        title={"성능보장, PC주변기기 & 스피커 추천"}
        subtitle={"#LG #앱코 #BOSE"}
      />
      <CardList
        title={"저렴한 거격과 보장된 성능, 더함 TV"}
        subtitle={"사은품 증정이벤트"}
      />
      <CardList
        title={"판매량 TOP7  가성비 인기가전 모음"}
        subtitle={"가격,성능,디자인까지 "}
      />
    </>
  );
};

export default Home;
