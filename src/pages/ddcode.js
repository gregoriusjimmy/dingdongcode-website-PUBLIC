import Layout from "../components/layout"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./ddcode.module.scss"
import Img from "gatsby-image"
import Head from "../components/head"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            excerpt(pruneLength: 100, format: PLAIN)
            frontmatter {
              title
              date
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 350, maxHeight: 200) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="DDCode" />
      <ul className={css.wrapper}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <div className={css.card}>
                <Link to={`/ddcode/${edge.node.fields.slug}`}>
                  <Img
                    sizes={
                      edge.node.frontmatter.featuredImage.childImageSharp.sizes
                    }
                  />
                </Link>
                <div className={css.cardContainer}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                  {edge.node.excerpt}
                  <div className={css.buttonWrapper}>
                    <Link to={`/ddcode/${edge.node.fields.slug}`}>
                      <button className={css.viewButton}>View Post</button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
