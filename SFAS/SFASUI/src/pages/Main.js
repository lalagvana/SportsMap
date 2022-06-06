import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import SearchIcon from "images/search-icon-home.svg";
import LikeIcon from "images/like.svg";
import StatIcon from "images/stats.svg";
import EventIcon from "images/events.svg";

export default Main;
function Main () {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Заниматься <br/> спортом легко!</>}
        description="Администрация Санкт-Петербурга представляет интерактивную карту, где каждый может найти для себя и своих близких идеальное место для занятий спортом"
        imageSrc="../images/sapiens-main.png"
        imageDecoratorBlob={true}
        primaryButtonText="На карту"
        gotoSearchButton="Поиск"
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
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
            description: "Теперь найти удобное место для занятий спортом еще проще, ведь все объекты собраны в одном месте"
          },{
            imageSrc: LikeIcon,
            title: "Актуальность",
            description: "За актуальностью информации следит Администрация Санкт-Петербурга"
        },{
              imageSrc: StatIcon,
              title: "Статистика",
              description: "Скоро вы сможете узнать, в какое время суток объект наиболее загружен, а в какое - свободен"
        },{
                imageSrc: EventIcon,
                title: "Мероприятия",
                description: "Об анонсах спортивных мероприятий можно будет узнать благодаря нашей рассылке"
              }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature
      />
      <Footer />
    </AnimationRevealPage>
  );
}