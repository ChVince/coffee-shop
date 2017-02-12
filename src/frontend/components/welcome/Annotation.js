import React from 'react'
import {Button} from'react-bootstrap'
import {Link} from 'react-router'

require('../../styles/annotation.less');
class Annotation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="annotation">

                <div className="annotation-text-wrapper">
                    <div className="annotation-text">
                        Премьера четвертого сезона комедийного сериала «Силиконовая долина» состоится 23 апреля 2017 года на канале HBO. Об этом сообщает Deadline

                        Ситком от создателя «Бивиса и Баттхеда» Майка Джаджа рассказывает о друзьях-айтишниках, которые занимаются разработкой собственных стартапов в Силиконовой долине, также известной как Кремниевая. В новом сезоне, состоящем из 10 серий, будут по-прежнему сниматься Томас Миддлдитч, ТиДжей Миллер, Джош Бренер, Мартин Старр, Кумэйл Нанджиани и другие.
                    </div>

                </div>
                <div className="read-more-wrapper">
                    <div className="read-more">
                        <Link to="about">
                            <Button bsSize="large" bsStyle="custom-read-more">
                                Read More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }


}
export default Annotation;