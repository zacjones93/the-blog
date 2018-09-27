import React from "react"
import { graphql, Link} from 'gatsby'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          )
        })}
        <div>
          <Link to='/tags'>Browse by Tag</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default HomePage