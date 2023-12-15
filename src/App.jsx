import Navbar from "./components/Navbar/Navbar"
import Cover from "./components/Cover/Cover"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Service from "./components/Service/Service"
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Cover />
            <About />
            <Contact />
            <Service />
            <Footer />
        </>
    )
}

export default App
