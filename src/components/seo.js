/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, altImg, url, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultAuthor: author
            defaultUrl: siteUrl
            defaultDescription: description
            defaultImage: image
            defaultAlt: altImg
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultAuthor,
    defaultUrl,
    defaultDescription,
    defaultImage,
    defaultAlt,
  } = site.siteMetadata

  const metaTitle = title || defaultTitle
  const metaAuthor = author || defaultAuthor
  const metaUrl = url || defaultUrl
  const metaDescription = description || defaultDescription
  const metaImage = `${defaultUrl}${image || defaultImage}`
  const metaAltImg = altImg || defaultAlt

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle ? `%s | ${metaTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor || ``,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:image:alt`,
          content: metaAltImg,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  image: ``,
  altImg: ``,
  url: ``,
  author: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  altImg: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
}

export default SEO
