import React from 'react'

import {bindActionCreators} from 'redux'
import {getPartnersLogo} from '../actions/common'
import {connect} from 'react-redux'
import translate from '../utils/translate'
import * as _ from 'lodash'


/*require('../styles/refactoredStyles/about.less');*/
require('../styles/newStyles/about.less');

class About extends React.Component {


    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.getPartnersLogo();
    }


    render() {

        let partnersLogo;
        let strings = this.props.strings;
        if (this.props.partnersLogo && this.props.partnersLogo.length > 0) {
            partnersLogo = this.props.partnersLogo.map((item, index) => {
                return (
                    <img className="
                    col-lg-3
                    col-md-3
                    col-sm-3
                    col-xs-3
                     partner-logo img-responsive" key={index} src={item.url} />
                )
            })
        }

        let productionItems = strings.productionItems;

        return (
            <div className="container">
                <div className="row">
                    <div className="about-title
                    col-lg-offset-4 col-lg-4
                    col-md-offset-4 col-md-4
                    col-sm-offset-4 col-sm-4
                    col-xs-offset-4 col-xs-4
">
                     <span>
                      {strings.index}
                     </span>
                    </div>
                </div>
                <div className="row">
                    <div className="

                     col-lg-offset-1 col-lg-10
                     col-md-offset-1 col-md-10
                     col-sm-offset-1 col-sm-10
                     col-xs-offset-1 col-xs-10

                    about-decoration-blockborder"/>
                </div>

                <div className="row">
                    <div className="about-text
                    col-lg-offset-2 col-lg-8
                    col-md-offset-2 col-md-8
                    col-sm-offset-2 col-sm-8
                    col-xs-offset-2 col-xs-8
">
                     <span>
                      {strings.text}
                     </span>
                    </div>
                </div>
                <div className="row">
                    <div className="

                     col-lg-offset-1 col-lg-10
                     col-md-offset-1 col-md-10
                     col-sm-offset-1 col-sm-10
                     col-xs-offset-1 col-xs-10

                    about-decoration-blockborder"/>
                </div>

                <div className="row">
                    <div className="item
                     col-lg-3
                     col-md-3
                     col-sm-3
                     col-xs-6">

                        <div className="item-icon">
                           <span>
                            <i className="fa fa-industry fa-4x" aria-hidden="true"></i>
                        </span>
                        </div>
                        <div className="item-title">
                            <span>{productionItems.production[0]}</span>
                        </div>
                        <div className="item-text">
                            <ul>
                                <li>{productionItems.production[1]}</li>
                                <li>{productionItems.production[2]}</li>
                                <li>{productionItems.production[3]}</li>
                                <li>{productionItems.production[4]}</li>
                                <li>{productionItems.production[5]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item
                     col-lg-3
                     col-md-3
                     col-sm-3
                     col-xs-6">
                        <div className="item-icon">
                           <span>
                            <i className="fa fa-video-camera fa-4x" aria-hidden="true"></i>
                        </span>
                        </div>

                        <div className="item-title">
                            <span>{productionItems.videography[0]}</span>
                        </div>
                        <div className="item-text">
                            <ul>
                                <li>{productionItems.videography[1]}</li>
                                <li>{productionItems.videography[2]}</li>
                                <li>{productionItems.videography[3]}</li>
                                <li>{productionItems.videography[4]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item
                     col-lg-3
                     col-md-3
                     col-sm-3
                     col-xs-6">
                        <div className="item-icon">
                           <span>
                            <i className="fa fa-wrench fa-4x" aria-hidden="true"></i>
                        </span>
                        </div>

                        <div className="item-title">
                            <span>{productionItems.postproduction[0]}</span>
                        </div>
                        <div className="item-text">
                            <ul>
                                <li>{productionItems.videography[1]}</li>
                                <li>{productionItems.videography[2]}</li>
                                <li>{productionItems.videography[3]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item
                     col-lg-3
                     col-md-3
                     col-sm-3
                     col-xs-6">
                        <div className="item-icon">
                           <span>
                            <i className="fa fa-microphone fa-4x" aria-hidden="true"></i>
                        </span>
                        </div>

                        <div className="item-title">
                            <span>{productionItems.voice[0]}</span>
                        </div>
                        <div className="item-text">
                            <ul>
                                <li>{productionItems.voice[1]}</li>
                                <li>{productionItems.voice[2]}</li>
                                <li>{productionItems.voice[3]}</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="our-clients-title
                     col-lg-12
                     col-md-12
                     col-sm-12
                     col-xs-12
">
                       <span >
                    {strings.ourClients}
                     </span>
                    </div>
                </div>

                <div className="clients-logo">

                    {partnersLogo}

                </div>
            </div>


        )
    }
}


About.PropTypes = {
    strings: React.PropTypes.object
};


function mapStateToProps(state) {
    return {
        partnersLogo: state.common.partnersLogo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPartnersLogo: bindActionCreators(getPartnersLogo, dispatch)
    }
}

const decorators = _.flow([
    connect(mapStateToProps, mapDispatchToProps),
    translate('About')
]);


export default decorators(About);