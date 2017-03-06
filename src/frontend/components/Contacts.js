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
                                ул. Городецкая 36/1,39 Минск,Беларусь
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
                                <div className="social-icon"><i className="fa fa-vk fa-1x"></i></div>
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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.1626763060303!2d27.6732372113842!3d53.946618292932975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbceccdb180257%3A0x6f9e4d2b83024b2f!2z0YPQuy4g0JPQvtGA0L7QtNC10YbQutCw0Y8gMzYvMSwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sru!4v1488790429992"
                    width="100%" height="325" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
        )
    }


}


export default Contacts;
