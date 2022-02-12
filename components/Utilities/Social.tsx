import React from "react";
import Link from "next/link";
import { Direction } from "styles/styled-components/global";
import { ReactComponent as IconFacebook } from "styles/assets/icon-facebook.svg";
import { ReactComponent as IconLinkedIn } from "styles/assets/icon-linked-in.svg";

const { FACEBOOK_URL } = process.env;
const { LINKEDIN_URL } = process.env;

const Social: React.FC = () => (
  <Direction.Row>
    <Link passHref href={FACEBOOK_URL || ""}>
      <a href="replace" target="_blank">
        <IconFacebook className="icon icon-socials" />
      </a>
    </Link>
    <Link passHref href={LINKEDIN_URL || ""}>
      <a href="replace" target="_blank">
        <IconLinkedIn className="icon icon-socials" />
      </a>
    </Link>
  </Direction.Row>
);

export default Social;
