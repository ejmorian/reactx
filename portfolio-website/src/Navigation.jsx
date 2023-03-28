import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className='navigation'>
            <Link to=''> About </Link>
            <Link to='/projects'> Project </Link>
            <Link to='/code'> Code </Link>
            <Link to='/contact'> Contact </Link>
        </div>
    )
}