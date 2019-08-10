import React from "react";
import PropTypes from "prop-types";

import FigureBio from "../components/bio/figure";
import SocialBio from "../components/bio/social";
import DescriptionBio from "../components/bio/description";

/**
 *
 * @param {*} author - Main Author information
 * @param {*} details - Main author Bio
 * @return {JSX}
 */
function HomeWidget({author, details}) {
  return (
    <>
      {author.cover != null && (
        <FigureBio image={author.cover.childImageSharp} />
      )}
      {
        <SocialBio
          linkedin={author.username.linkedin}
          github={author.username.github}
          twitter={author.username.twitter}
        />
      }
      <DescriptionBio description={details.body} />
    </>
  );
}

HomeWidget.propTypes = {
  author: PropTypes.any.isRequired,
  details: PropTypes.any.isRequired,
};

HomeWidget.defaultProps = {};

export default HomeWidget;
