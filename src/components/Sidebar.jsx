import { FaWindowClose, FaRegWindowClose } from '../../node_modules/react-icons/fa';
import logo from '../logo.svg';
import { links, social } from '../data'
import { useGlobalContext } from '../utils/context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? 'sidebar-container show' : 'sidebar-container hide'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button type="button" className='close-menu-btn' onClick={closeSidebar}><FaWindowClose /></button>
      </div>
      <div className="sidebar-links-container">
        <ul className='sidebar-links'>
          {links && links.map((link) => {
            const { id, url, text, icon } = link;
            return <li key={id}>{icon}<a href={url}>{text}</a></li>
          })}
        </ul>
      </div>
      <div className="social-links-container">
        <ul className="social-links">
          {social && social.map((link) => {
            const { id, url, icon } = link;
            return <li key={id}><a href={url}>{icon}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar