import React from 'react'
require ('./../../../styles/article.less');

class Article extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        const article = this.props.article;
        return(
            <article className="tile col-sm-4">
                <figure>
                    <img className="lazy" src={article.imgURL}/>
                    <figcaption>
                        <h4>
                            <small>
                                {article.title}
                            </small>
                        </h4>
                        {article.annotation}
                        <br/>
                        <br/>
                    </figcaption>
                </figure>
            </article>
        )
    }

}

Article.protoTypes ={
    article : React.PropTypes.object.isRequired
};


export default Article;
