import React from 'react';
import NavBar from '../NavBar'
import  Footer from '../Footer'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getArticles} from '../../../actions'
import {getArticlesPageNum} from '../../../actions'
import VideoBar from '../video'


require('../../../styles/new-styles/global.less');


class PortfolioClip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <iframe className="portfolio-clip" frameBorder="0" allowFullScreen
                    src="https://www.youtube.com/embed/3jT_q7dt-cM">

            </iframe>)
    }
}


class WelcomePage extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="welcome-page">
                <NavBar/>
                <PortfolioClip/>
                <Footer/>
            </div>
        )
    }
}


WelcomePage.propTypes = {
    page: React.PropTypes.number.isRequired,
    articles: React.PropTypes.array.isRequired,
    articlesSpinner: React.PropTypes.bool.isRequired,
    getArticles: React.PropTypes.func.isRequired,
    getArticlesPageNum: React.PropTypes.func.isRequired,
    pageNum: React.PropTypes.number.isRequired,
    notification: React.PropTypes.object.isRequired,
    spinner: React.PropTypes.bool.isRequired,
    view: React.PropTypes.string.isRequired,
    clipList: React.PropTypes.array.isRequired
};


function mapStateToProps(state) {
    return {
        page: state.welcomePage.page,
        articles: state.welcomePage.articles,
        articlesSpinner: state.welcomePage.spinner,
        pageNum: state.welcomePage.pageNum,
        notification: state.welcomePage.notification,
        spinner: state.welcomePage.spinner,
        view: state.welcomePage.view,
        clipList: state.welcomePage.clipList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: bindActionCreators(getArticles, dispatch),
        getArticlesPageNum: bindActionCreators(getArticlesPageNum, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);



