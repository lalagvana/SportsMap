import React from "react";
import AnimationRevealPage from "client/helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "client/components/headers/light.js";
import Footer from "client/components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "client/components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "client/components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Санкт-Петербург",
            description: (
              <>
                <Address>
                  <AddressLine>
                    {" "}
                    Администрация Красногвардейского района Сектор физической
                    культуры и спорта
                  </AddressLine>
                  <AddressLine> Среднеохтинский пр., д. 50</AddressLine>
                </Address>
                <Email></Email>
                <Phone>+7 (812) 576-86-15</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
