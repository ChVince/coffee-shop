import React from 'react'

/*require('../styles/new-styles/contacts.less');*/
require('../styles/refactoredStyles/contacts.less');


class Contacts extends React.Component {
    render() {
        return (
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
                            <div className="contact-text-wrapper">
                                    +375(29)638-71-21
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icon">
                                <i className="fa fa-map-marker fa-3x"/>
                            </div>
                            <div className="address-text-wrapper">
                                Gorodetskaya.st 100,500 Minsk,Belarus
                            </div>
                        </div>
                    </div>
                    <div className="contacts-border"/>
                    <div className="contact-right">
                        <div className="contact-mail">
                            <div className="mail-icon">
                                <i className="fa fa-envelope-o fa-2x"/>
                            </div>
                            <div className="contact-text-wrapper">
                                agent_link_48loh.ru
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


export default Contacts;
/*
{/!* <div className="location">
 <div className="location-icon">
 <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
 </div>
 <div className="location-address">
 Gorodetskaya st. 58 Minsk. Belarus
 </div>
 </div>*!/}*/
