import React from 'react'
require ('../../styles/footer.less');

class Footer extends React.Component {
    render (){
        return (
            <footer>
                <div className="autograph">
                    New Record
                </div>
                <div className="references"></div>
                <div className="copy">
                    © New Record
                </div>
            </footer>
        )
}
}

export default Footer