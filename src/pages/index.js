/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { useThemeUI, useColorMode } from 'theme-ui'
/** @jsx jsx */
import { jsx } from "theme-ui"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
   const [colorMode, setColorMode] = useColorMode()
 
   const { theme: { initialColorModeName, colors: { modes } } } = useThemeUI()
   const modeKeys = Object.keys(modes)
   const allModes = [initialColorModeName, ...modeKeys]
 
   return (
     <>
       <h3>Color Mode is: {colorMode}</h3>
       <select onChange={ e => {
         setColorMode(e.target.value)
       }} value={colorMode}>
         { allModes.map(mode => (
           <option value={mode} key={mode}>{ mode }</option>
         ))}
       </select> 
     
       <div>
       <div
    sx={{
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: 'secondary', // picks up value from `theme.colors.primary`
    }}>
    Hello ThemeUI with Gatsby and Sx prop
  </div>
         <footer>
           © {new Date().getFullYear()}, Built with
           {` `}
           <a href="https://www.gatsbyjs.org">Gatsby</a>
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout