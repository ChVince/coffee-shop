import React from 'react'

import {bindActionCreators} from 'redux'
import {getPartnersLogo} from '../actions/common'
import {connect} from 'react-redux'
import translate from '../utils/translate'
import * as _ from 'lodash'


require('../styles/refactoredStyles/about.less');

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
                    <div className="partner-logo" key={index} style={{backgroundImage: 'url(' + item.url + ')'}}/>
                )
            })
        }

        let productionItems = strings.productionItems;

        return (
            <div className="about-wrapper">
                  <span className="about-title">
                      {strings.index}
                     </span>
                <div className="about-decoration-blockborder"/>
                <div className="about-text">
                    {strings.text}
                </div>
                <div className="about-decoration-blockborder"/>


                <div className="production-items">
                    <div className="item">
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
                    <div className="item-border"/>
                    <div className="item">
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
                    <div className="item-border"/>
                    <div className="item">
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
                    <div className="item-border"/>
                    <div className="item">
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

                <span className="our-clients-text">
                    {strings.ourClients}
                     </span>
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