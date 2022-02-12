import React from "react";
import { format } from "date-fns";
import { Footer } from "styles/styled-components/components/app.styled";
import { Text } from "styles/styled-components/global";

const FooterComponent: React.FC = () => (
  <Footer.Wrapper>
    <Footer.Body>
      <Text.SubTitle className="light ground">
        Copyright &copy; Ryan M. Torino {format(new Date(), "yyyy")}
      </Text.SubTitle>
    </Footer.Body>
  </Footer.Wrapper>
);

export default FooterComponent;
