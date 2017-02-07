import React from 'react';
import Navbar from './NavBar'
import  Footer from './Footer'


require('../../styles/welcome.less');

class WelcomePage extends React.Component {
    render() {
        return (
            <div className="welcome-page">
                <div className="cover">
                    <div className="cover-image">
                        <div className="container">
                            <Navbar/>
                        </div>
                    </div>
                </div>
                <section>
                    Some News
                </section>
                <Footer/>
            </div>

        )
    }
}
export default WelcomePage



