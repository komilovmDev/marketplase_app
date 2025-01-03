import Boxes from '../../components/boxes/Boxes'
import Filter from '../../components/filter/Filter'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'

export default function Home({ setBoxData, boxData }) {
    return (
        <>
            <Navbar />
            <Header />
            <div className="home_main">
                <Filter />
                <Boxes boxData={boxData} setBoxData={setBoxData} />
            </div>
            <Footer />
        </>
    )
} 