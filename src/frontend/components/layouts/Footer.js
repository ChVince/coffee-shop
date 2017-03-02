import React from 'react'
require('../../styles/refactoredStyles/footer.less');

class Footer extends React.Component {
    render() {
        return (
            <footer>
     <div className="info-block-wrapper">
                 <div className="social-networks">
                        <a className="social-network" href="#">
                            <i className="fa fa-vk fa-2x"></i>
                        </a>
                        <a className="social-network" href="#">
                            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        </a>
                        <a id="social-network-id" className="social-network" href="#">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="i18n-line"/>
                    <div className="i18n">
                        © NEW RECORD 2015
                    </div>
                </div>
            <div className="footer-logo"></div>
            </footer>
        )
    }
}

export default Footer
