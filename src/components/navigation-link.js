import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export const NavigationLinkPropTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};

function NavigationLink({ link, text }) {
  return (
    <Link href={link}>
      <a>{text}</a>
    </Link>
  );
}

NavigationLink.propTypes = NavigationLinkPropTypes;

export default NavigationLink;
