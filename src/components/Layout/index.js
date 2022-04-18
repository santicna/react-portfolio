import { Outlet } from 'react-router-dom'
import TopNavbar from '../TopNavbar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <TopNavbar />
      <div className="page">
        <span className="tags top-tags"></span>
        <Outlet />
        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  )
}

export default Layout
