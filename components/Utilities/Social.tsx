import React from 'react';
import Link from 'next/link';
import { Direction } from 'styles/styled-components/global';
import { ReactComponent as IconFacebook } from 'styles/assets/icon-facebook.svg';
import { ReactComponent as IconLinkedIn } from 'styles/assets/icon-linked-in.svg';

const FACEBOOK_URL = process.env.FACEBOOK_URL;
const LINKEDIN_URL = process.env.LINKEDIN_URL;

const Social: React.FC = () => (
  <Direction.Row>
    <Link href={{ pathname: FACEBOOK_URL || '' }}>
      <a target="_blank">
        <IconFacebook className="icon icon-socials" />
      </a>
    </Link>
    <Link href={{ pathname: LINKEDIN_URL || '' }}>
      <a target="_blank">
        <IconLinkedIn className="icon icon-socials" />
      </a>
    </Link>
  </Direction.Row>
);

export default Social;
