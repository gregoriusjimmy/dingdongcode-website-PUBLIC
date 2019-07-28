import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./header.module.scss"

// const Title = styled.h1`
//   font-size: 5rem;
//   color: black;
//   text-align: center;
// `

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div className={css.cover}></div>
      <ul className={css.navigation}>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.activeNavItem}
            to="/ddcode"
          >
            DDCode
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={css.navItem}
            activeClassName={css.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
