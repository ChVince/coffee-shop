import React from 'react'

/*require('../styles/new-styles/contacts.less');*/
require('../styles/refactoredStyles/contacts.less');


class Contacts extends React.Component {
    render() {
        return (
            /*<div className="contacts-wrapper">
             <div className="contacts-wrapper2">
             <div className="contacts">
             <div> <span className="contact-text">Contact us</span></div>
             <div className="contact-left">
             <div className="phone-number">
             <div className="phone-icon">
             <i className="fa fa-mobile fa-3x">

             </i>
             </div>
             <div className="phone-text-number">
             <span className="number">+375(29)638-71-21</span>
             </div>
             </div>
             <div className="location">
             <div className="location-icon">
             <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
             </div>
             <div className="location-address">
             Gorodetskaya st. 58 Minsk. Belarus
             </div>
             </div>
             </div>
             <div className="contacts-border">

             </div>
             <div className="contact-right">
             <div className="mail">
             <div className="mail-icon">
             <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
             </div>
             <div className="mail-address">
             agent_link_48loh.ru
             </div>
             </div>
             </div>
             </div>
             </div>
             </div>*/
            <div className="contacts">
                <div className="contacts-wrapper">
                  <span className="contact-text">
                        Contact us:
                     </span>
                    <div className="contact-left">
                        <div className="phone-number">
                            <div className="phone-icon">
                                <i className="fa fa-mobile fa-4x"/>
                            </div>
                            <div className="phone-text-number-wrapper">
                                {/*<div className="phone-text-number">
                                    +375(29)638-71-21
                                </div>*/}
                            </div>
                        </div>

                        {/* <div className="location">
                         <div className="location-icon">
                         <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                         </div>
                         <div className="location-address">
                         Gorodetskaya st. 58 Minsk. Belarus
                         </div>
                         </div>*/}
                    </div>
                    <div className="contact-right">

                    </div>
                </div>
            </div>
        )
    }


}


export default Contacts;