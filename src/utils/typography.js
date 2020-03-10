import Typography from 'typography'
import Wordpress2012 from 'typography-theme-wordpress-2012'

Wordpress2012.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2012.googleFonts

const typography = new Typography(Wordpress2012)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
