import React from 'react'
/*require('../../styles/refactoredStyles/footer.less');*/


require('../../styles/newStyles/footer.less');

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="
                    col-lg-4 col-lg-offset-4
                            col-md-4 col-md-offset-4
                            col-sm-4 col-sm-offset-4
                            col-xs-6 col-xs-offset-3 info-block-wrapper">


                        <div className="social-networks">

                            <a className="social-network" href="#">
                                <i className="fa fa-vk "></i>
                            </a>
                            <a className="social-network" href="#">
                                <i className="fa fa-facebook " aria-hidden="true"></i>
                            </a>
                            <a id="social-network-id" className="social-network" href="#">
                                <i className="fa fa-instagram " aria-hidden="true"></i>
                            </a>
                        </div>


                        <div className="row i18n-line"/>

                        <div className="row i18n">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nr-label">
                                <span>
                            © NEW RECORD 2015
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="

                            col-lg-2 col-lg-offset-2
                            col-md-3 col-md-offset-1
                            col-sm-3 col-sm-offset-1
                            col-xs-3

footer-logo-wrapper
">

                        <img src="./img/nr-footer-4.png" className="footer-logo" alt="footer-logo"/>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer


/*
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
 </footer>*/
