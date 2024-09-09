import { Link } from 'react-router-dom'
import './Navbar.css';

// Navbar do site, com links para diferentes as páginas do mesmo:
const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/my-posts`}>My Posts</Link>
          </li>
          <li>
            <Link to={`/new`} className='new-read-more'>
              New Post
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar