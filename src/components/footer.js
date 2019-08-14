import React from "react"
import css from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerText}>
        <p>Footer</p>
      </div>
      <div className={css.name}>
        <p>@gregoriusjimmy</p>
      </div>
    </div>
  )
}

export default Footer
