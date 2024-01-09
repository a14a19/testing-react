import Header from "../components/Header"
import MainSide from "./MainSide"
import SideNav from "../components/SideNav"

function Home() {
    return (
        <>
            <Header />
            <div className="flex" style={{ height: `calc(100vh - 40px)` }}>
                <SideNav />
                <MainSide />
            </div>
        </>
    )
}

export default Home