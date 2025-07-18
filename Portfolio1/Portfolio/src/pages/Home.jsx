import Navbar from "../components/header_part"
import About_Me from "../components/About_Me"

 


function Home_page() {
    return (

        <div>
        <header>
            <Navbar />
        </header>
        <div>
            <About_Me />
        </div>

        </div>
    )
    
}

export default Home_page;