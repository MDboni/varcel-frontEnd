
import AppNavbar from './AppNavbar'
import AppFooter from './AppFooter'

const Layout = ({children }) => {
  return (
    <>
        <AppNavbar/> 

          { children }

        <AppFooter/>
    </>
  )
}

export default Layout