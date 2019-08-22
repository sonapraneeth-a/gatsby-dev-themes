import React from "react";
import PropTypes from "prop-types";

import {Grid, GridItem} from "@sonapraneeth/gatsby-plugin-themed-components";

import FigureBio from "../components/bio/figure";
import SocialBio from "../components/bio/social";
import DescriptionBio from "../components/bio/description";
import {widget} from "../../utils/debug";

/**
 *
 * @param {*} author - Main Author information
 * @param {*} details - Main author Bio
 * @return {JSX}
 */
function HomeWidget({author, details}) {
  if (typeof window !== "undefined") {
    // If environment is development, attach debug package
    if (process.env.NODE_ENV === "development") {
      // To enable debugging information in browser
      localStorage.setItem(
        "debug",
        "@sonapraneeth/gatsby-plugin-themed-components:*," +
          "@sonapraneeth/gatsby-theme-bio:*"
      );
    }
  }
  widget("Home Widget");
  return (
    <>
      <Grid noCols={2} nSizes={[1, 2]}>
        <GridItem
          id="figureBio"
          css={{
            margin: "0 10%",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
          }}
        >
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
        </GridItem>
        <GridItem id="descriptionBio" css={{padding: "0 1rem 1rem 1rem"}}>
          <DescriptionBio description={details.body} />
        </GridItem>
      </Grid>
    </>
  );
}

HomeWidget.propTypes = {
  author: PropTypes.any.isRequired,
  details: PropTypes.any.isRequired,
};

HomeWidget.defaultProps = {};

export default HomeWidget;
