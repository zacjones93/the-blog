import React from "react"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Header from './Header'

export default ({ children }) => (
    <div
      className={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      {children}
    </div>
)