import Link from 'next/link'
//imported Link to use to navigate through pages

//this function is my header component that each page uses
//and i used the link component to navigate through pages
const Header = () => (
    <div>
        <nav>
            <Link href="/">
            <p >Home</p>
            </Link>
            <Link href="/about">
            <p >About</p>
            </Link>
            <Link href="/contact">
            <p >Contact</p>
            </Link>
            <Link href="/projects">
            <p >Projects</p>
            </Link> 
        </nav>
        
        <hr/>
    </div>
)

export default Header