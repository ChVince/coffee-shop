import React from 'react';
import Header from '../Header'
import  Footer from '../Footer'
import Articles from '../Articles/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getArticles} from '../../../actions'
import {getArticlesPageNum} from '../../../actions'
import Annotation from '../Annotation'


require('../../../styles/welcome.less');

class WelcomePage extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="welcome-page">
                <Header/>
                <Annotation/>
                <Articles {...this.props}/>
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
    notification: React.PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
        page: state.welcomePage.page,
        articles: state.welcomePage.articles,
        articlesSpinner: state.welcomePage.spinner,
        pageNum: state.welcomePage.pageNum,
        notification: state.welcomePage.notification
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: bindActionCreators(getArticles, dispatch),
        getArticlesPageNum: bindActionCreators(getArticlesPageNum, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);



