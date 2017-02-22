import React from 'react'
/*require('../../styles/new-styles/footer.less');*/
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
                            <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a id="social-network-id" className="social-network" href="#">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="i18n-line"/>
                    <div className="i18n">
                        © New Record
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
