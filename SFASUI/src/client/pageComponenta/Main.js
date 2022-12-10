import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "client/helpers/AnimationRevealPage.js";
import HeaderLight from "client/components/headers/light";

import Features from "client/components/features/ThreeColSimple.js";
import MainFeature from "client/components/features/TwoColWithButton.js";
import Footer from "client/components/footers/FiveColumnWithInputForm.js";

import SearchIcon from "client/images/search-icon-home.svg";
import LikeIcon from "client/images/like.svg";
import StatIcon from "client/images/stats.svg";
import EventIcon from "client/images/events.svg";
import { default as Hero } from "client/components/hero/TwoColumnWithVideo.js";
import { default as Testimonial } from "client/components/testimonials/ThreeColumnWithProfileImage.js";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export const Main = () => {
  return (
    <AnimationRevealPage>
      <HeaderLight />
      <Hero
        heading={
          <>
            Заниматься <br /> спортом легко!
          </>
        }
        description="Администрация Санкт-Петербурга представляет интерактивную карту, где каждый может найти для себя и своих близких идеальное место для занятий спортом"
        imageSrc="../images/sapiens-main.png"
        imageDecoratorBlob={true}
        primaryButtonText="На карту"
        gotoSearchButton="Поиск"
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Чем хорош <HighlightedText>SportsMap?</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: SearchIcon,
            title: "Удобный поиск",
            description:
              "Теперь найти удобное место для занятий спортом еще проще, ведь все объекты собраны в одном месте",
          },
          {
            imageSrc: LikeIcon,
            title: "Актуальность",
            description:
              "За актуальностью информации следит Администрация Санкт-Петербурга",
          },
          {
            imageSrc: StatIcon,
            title: "Статистика",
            description:
              "Скоро вы сможете узнать, в какое время суток объект наиболее загружен, а в какое - свободен",
          },
          {
            imageSrc: EventIcon,
            title: "Мероприятия",
            description:
              "Об анонсах спортивных мероприятий можно будет узнать благодаря нашей рассылке",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature />
      <Footer />
    </AnimationRevealPage>
  );
};
