import { Link, useLocation } from "react-router-dom"

function SideNav() {

    const location = useLocation()

    return (
        <aside className="basis-1/6  p-4">
            <div className="p-2 flex flex-col  gap-3">
                <Link to={`/`} className={`${location.pathname === "/" ? `text-red-500` : ``} bg-blue-500`}>
                    Home
                </Link>
                <Link to={`/contact-support`} className={`${location.pathname === "/contact-support" ? `text-red-500` : ``} bg-blue-500`}>
                    Home
                </Link>
                <Link to={`/faq`} className={`${location.pathname === "/faq" ? `text-red-500` : ``} bg-blue-500`}>
                    Home
                </Link>
            </div>
        </aside>
    )
}

export default SideNav