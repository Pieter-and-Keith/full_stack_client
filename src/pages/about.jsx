import { Link } from "react-router-dom"

const About = () => {
    return(
        <>
            <header style={{display:"flex", justifyContent:"center"}}>
                <h1 style={{margin:"0px"}}><u>Sydney Motor Service Centre</u></h1>
            </header>

            <nav style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <Link to="/"><h2 style={{padding:"20px", margin:"0px"}}>Car Services</h2></Link>
                <Link to="/about"><h2 style={{padding:"20px", margin:"0px"}}>About Us</h2></Link>
                <Link to="/make_booking"><h2 style={{padding:"20px", margin:"0px"}}>Booking</h2></Link>
            </nav>

            <main style={{marginLeft:"300px", marginRight:"300px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis sapien quis nibh cursus blandit. Etiam ullamcorper lacus sed lacus condimentum rhoncus. Donec quis eros nec eros tristique sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris malesuada urna quis vulputate tempor. Nulla hendrerit egestas scelerisque. Pellentesque ac odio sit amet eros aliquet lacinia. Curabitur euismod justo et dui egestas, in vulputate sapien tincidunt. Nulla eleifend felis a augue egestas gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus non massa turpis. Curabitur in bibendum ligula, at laoreet augue. Quisque lorem diam, iaculis sed ultrices quis, venenatis at eros.</p>
            
                <section>
                    <p><strong>Contact: 0412 345 678</strong></p>
                </section>
            </main>

        </>
    )
}

export default About