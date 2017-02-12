import React from 'react'
import Clip from './Clip'


class VideoLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let clipList = [
            {
                "title": "Особо опасный ПРОГРАММИСТ",
                "url": "https://youtu.be/28_t-IPRiEo"
            },
            {
                "title": "МАКСИМУС ДОДЕЛАЛ ВИДЕО",
                "url": "https://youtu.be/iwOY3HU7LZM"
            },
            {
                "title": "Лео устраивается в Macdonald's",
                "url": "https://youtu.be/2j6drwpNVOs"
            },
            {
                "title": "Пираты Карибского моря на зачетных берегах",
                "url": "https://youtu.be/bXmW1wydFP4"
            },
            {
                "title": "Бесславные студенты",
                "url": "https://youtu.be/Iico_VqS8Qw"
            },
            {
                "title": "«Хоббит: Сдача Пяти Сессий» Наушник",
                "url": "https://youtu.be/IWCE8kYaSYw"
            },
            {
                "title": "Архиллес прогуливает пары!",
                "url": "https://youtu.be/3zvIVclRfoo"
            },
            {
                "title": "МСТИТЕЛИ В КАЧАЛКЕ",
                "url": "https://youtu.be/VDbpqUwazzQ"
            },
            {
                "title": "Темный препод: Восхождение СТУДЕНТОВ",
                "url": "https://youtu.be/DUzeQzUyXYA"
            },
            {
                "title": "Гарри Поттер и дары ПРЕПОДУ",
                "url": "https://youtu.be/66su9XysM3A"
            },
            {
                "title": "Лиам Нисон ПОКУПАЕТ ПРЕЗЕРВАТИВЫ",
                "url": "https://youtu.be/Bd4AQGP9r60"
            },
            {
                "title": "Бёрдмен",
                "url": "https://youtu.be/uB1B06X5yNQ?list=PLvr6cpCwGuSJSsarQK2P2xB82X6gFbEXr"
            }
        ];

      /*  if (this.props.clipList) {
            clipList = this.props.clipList.map((clip, index) => {
                return <Clip clip={clip} key={index}/>
            });
        }*/
        return (
            <div className="clip-list-wrapper">
                <div className="clip-list">
                    <Clip clip={clipList[0]}/>
                    <Clip clip={clipList[1]}/>
                    <Clip clip={clipList[2]}/>
                    <Clip clip={clipList[3]}/>
                </div>
            </div>
        )
    }
}


VideoLayout.propTypes = {
    view: React.PropTypes.string.isRequired,
    clipList: React.PropTypes.array.isRequired
};

export default VideoLayout;