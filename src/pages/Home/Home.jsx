import Boxes from '../../components/boxes/Boxes'
import Filter from '../../components/filter/Filter'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar' 

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Filter />
            <Boxes />
            <Footer />
        </>
    )
} 
