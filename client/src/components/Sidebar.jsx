import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside className={'sideboard'}>
      <p className={'logo'}>
        <img className={'logo-image'} src={logo} alt={'Logo of Insightful company.'}/>
        <span className={'logo-text'}>Insightful</span>
      </p>
      <nav>
        <ul className={'navigation-menu'}>
          <li className={'navigation-item'}>
            <button className={'navigation-dropdown'} type={'button'}>Dashboard</button>
            <ul className={'dashboard-menu'}>
              <li className={'dashboard-item'}>
                <Link to={'/overview'}>Overview</Link>
              </li>
              <li className={'dashboard-item'}>
                <Link to={'/seo-traffic'}>SEO traffic</Link>
              </li>
              <li className={'dashboard-item'}>
                <Link to={'/ppc-traffic'}>PPC traffic</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;