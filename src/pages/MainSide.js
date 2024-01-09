import { Routes, Route } from "react-router-dom";
import MainSideHome from "../components/MainSideHome";
import MainSideContactSup from "../components/MainSideContactSup";
import MainSideFaq from "../components/MainSideFaq";

function MainSide() {
    return (
        <div className="basis-5/6 p-4 overflow-y-auto">
            <Routes>
                <Route exact path="/" element={<MainSideHome />} />
                <Route exact path="/contact-support" element={<MainSideContactSup />} />
                <Route exact path="/faq" element={<MainSideFaq />} />
            </Routes>
        </div>
    )
}

export default MainSide