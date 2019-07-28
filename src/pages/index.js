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
              sizes(maxWidth: 630) {
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
            this website was made for store and explain my project that i have
            created when i feels bored. I hope this website can be helpful, feel
            free to use the source code and ask me if u have a question
          </p>
        </div>
        <div>
          <h2>Lastest Post</h2>
          <div className={css.card}>
            <div className={css.cardContainer}>
              <Link to={`/ddcode/${data.markdownRemark.fields.slug}`}>
                <Img
                  sizes={
                    data.markdownRemark.frontmatter.featuredImage
                      .childImageSharp.sizes
                  }
                />
              </Link>
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
