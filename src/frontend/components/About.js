import React from 'react'

import {bindActionCreators} from 'redux'
import {getPartnersLogo} from '../actions/common'
import {connect} from 'react-redux'


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

        if (this.props.partnersLogo && this.props.partnersLogo.length > 0) {
            partnersLogo = this.props.partnersLogo.map((item, index) => {
                return (
                    <div className="partner-logo" key={index} style={{backgroundImage: 'url(' + item.url + ')'}}/>
                )
            })
        }

        return (
            <div className="about-wrapper">
                  <span className="about-title">
                        О нас
                     </span>
                <div className="about-decoration-blockborder"/>
                <div className="about-text">
                    New record - это продакшн студия, которая основанна Арсением Богуновым и находится в городе Минске,
                    Беларусь.
                    Мы команда специалистов, которые создают различного рода видео, как для корпоративных клиентов, так
                    и для частных лиц.
                    Мы создаем эксклюзивное видео. Глядя на каждый проект мы имеем возможность вырастить творческие
                    идеи.
                    Мы гордимся дружественными отношениями с нашими клиентами и всегда открыты для нового
                    сотрудничества.
                </div>
                <div className="about-decoration-blockborder"/>
                <span className="our-clients-text">
                        Наши клиенты
                     </span>
                <div className="clients-logo">
                    {partnersLogo}
                </div>
            </div>
        )
    }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(About);