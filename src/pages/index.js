import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import css from "./index.module.scss"
import Img from "gatsby-image"
import logo from "../images/ddcode-black.png"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { date: { eq: "2019-07-26" } }) {
        fields {
          slug
        }
        frontmatter {
          date
          title
          featuredImage {
            childImageSharp {
              sizes(maxWidth: 350, maxHeight: 200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
        excerpt(pruneLength: 100, format: PLAIN)
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <div className={css.wrapper}>
        <div className={css.welcomeText}>
          <h2>DING DONG!</h2>
          <p>
            Hey, Nice to see you here! please have a seat and enjoy discover my
            blog
            <br />
          </p>
        </div>
        <div>
          <h2>Lastest Post</h2>
          <div className={css.card}>
            <Link to={`/ddcode/${data.markdownRemark.fields.slug}`}>
              <Img
                sizes={
                  data.markdownRemark.frontmatter.featuredImage.childImageSharp
                    .sizes
                }
              />
            </Link>
            <div className={css.cardContainer}>
              <h2>{data.markdownRemark.frontmatter.title}</h2>
              <p>{data.markdownRemark.frontmatter.date}</p>
              {data.markdownRemark.excerpt}
              <div className={css.buttonWrapper}>
                <Link to={`/ddcode/${data.markdownRemark.fields.slug}`}>
                  <button className={css.viewButton}>View Post</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css.goto}>
        <div>Go To</div>
        <Link className={css.linkDdcode} to="/ddcode">
          <img src={logo}></img>
        </Link>
        <div>for more code</div>
      </div>
    </Layout>
  )
}

export default IndexPage
