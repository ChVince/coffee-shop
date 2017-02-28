import React from 'react'

require('../styles/refactoredStyles/contacts.less');


class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <div className="contacts-wrapper">
                  <span className="contact-text">
                        Свяжитесь с нами:
                     </span>
                    <div className="contact-left">
                        <div className="phone-number">
                            <div className="phone-icon">
                                <i className="fa fa-mobile fa-4x"/>
                            </div>
                            <div className="contact-text-wrapper">
                                    +375 (29) 638-71-21
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icon">
                                <i className="fa fa-map-marker fa-3x"/>
                            </div>
                            <div className="address-text-wrapper">
                                ул. Городецкая 63,42 Минск,Беларусь
                            </div>
                        </div>
                    </div>
                    <div className="contacts-border"/>
                    <div className="contact-right">
                        <div className="contact-mail">
                            <div className="mail-icon">
                                <i className="fa fa-envelope fa-2x"/>
                            </div>
                            <div className="contact-text-wrapper">
                                newrec@gmail.com
                            </div>
                        </div>
                        <div className="contact-mail social">
                            <div className="contact-social-networks">
                                <div className="social-icon"> <i className="fa fa-vk fa-1x"></i></div>
                                <div className="social-icon"><i className="fa fa-facebook fa-1x"></i></div>
                                <div className="social-icon"><i className="fa fa-instagram fa-1x"></i></div>
                            </div>
                            <div className="social-text-wrapper">
                                <div className="social-text">
                                    <a href="https://vk.com/newreccom"><span>vk.com/newreccom</span></a>
                                </div>
                                <div className="social-text">
                                    <a href="https://facebook.com/newreccom"><span>facebook.com/newreccom</span></a>
                                </div>
                                <div className="social-text">
                                    <a href="https://instagram/ars_bog"><span>ars_bog</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


export default Contacts;
