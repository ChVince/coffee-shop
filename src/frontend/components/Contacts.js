import React from 'react'
import translate from '../utils/translate'


require('../styles/newStyles/contacts.less');


class Contacts extends React.Component {
    render() {
        let strings = this.props.strings;
        return (
            <div className="container contacts-wrapper">
                <div className="row">
                    <div className="

                    contact-text
                    col-lg-4 col-lg-offset-4
                    col-md-4 col-md-offset-4
                    col-sm-8 col-sm-offset-2
                    col-xs-8 col-xs-offset-2
">
                      <span>
                      {strings.index}
                     </span>
                    </div>
                </div>
                <div className="row">
                    <div className="

                    container
                    contacts
                    col-lg-8 col-lg-offset-2
                    col-md-8 col-md-offset-2
                    col-sm-10 col-sm-offset-1
                    col-xs-10  col-xs-offset-1">
                        <div className="row">

                            <div className="contact-left
                    container
                    col-lg-5
                    col-md-5
                    col-sm-offset-0 col-sm-5
                     col-xs-offset-2 col-xs-8 ">

                                <div className="row">

                                        <div className="

                                        contact
                                        icon
                    col-lg-3
                    col-md-3
                    col-sm-offset-0  col-sm-3
                      col-xs-2
">
                                            <span><i className="fa fa-mobile fa-4x"/></span>
                                        </div>
                                        <div className="
                                        contact
                    col-lg-9
                    col-md-9
                  col-sm-offset-0  col-sm-9
                   col-xs-offset-1  col-xs-9
                    contact-text-wrapper">
                                            <span>
                                            {strings.phoneNumber}
                                            </span>
                                        </div>
                                </div>

                                <div className="row">
                                    <div className="

                                        contact
                                        icon
                                        icon-address
                    col-lg-3
                    col-md-3

                    col-sm-offset-0  col-sm-3
                     col-xs-2
">
                                        <span><i className="fa fa-map-marker fa-4x"/></span>
                                    </div>
                                    <div className="
                                        contact
                    col-lg-9
                    col-md-9
                 col-sm-offset-0  col-sm-9
                   col-xs-offset-1  col-xs-9
                    contact-text-wrapper address-text-wrapper">
                                            <span>
                                            {strings.address}
                                            </span>
                                    </div>


                                </div>


                            </div>

                            <div className="

                    col-lg-2
                    col-md-2
                    col-sm-2
                    hidden-xs
">
                                <div className="contacts-border"/>

                            </div>

                            <div className="contact-right
                            contact
                                 container
                                 col-lg-5
                                 col-md-5
                                 col-sm-offset-0 col-sm-5
                                 col-xs-offset-2 col-xs-8"
                            >
                                <div className="row">
                                    <div className="

                                        contact
                                        icon
                                        icon-mail
                    col-lg-3
                    col-md-3
                     col-sm-offset-0  col-sm-3
                      col-xs-2
">
                                        <span><i className="fa fa-envelope"/></span>
                                    </div>
                                    <div className="
                                        contact
                    col-lg-9
                    col-md-9
                    col-sm-offset-0  col-sm-9
                   col-xs-offset-1  col-xs-9
                    contact-text-wrapper
                    mail-text-wrapper
">
                                            <span>
                                             newrec@gmail.com
                                            </span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="

                                        contact
                                        icon
                                        icon-vk
                    col-lg-3
                    col-md-3
                    col-sm-offset-0
                     col-sm-3
                      col-xs-2
">
                                        <span><i className="fa fa-vk fa-4x"/></span>
                                    </div>
                                    <div className="
                                        contact
                    col-lg-9
                    col-md-9
                   col-sm-offset-0  col-sm-9
                   col-xs-offset-1  col-xs-9
                    contact-text-wrapper
                    vk-text-wrapper
">
                                            <span>
                                           <a href="https://vk.com/newreccom"><span>vk.com/newreccom</span></a>
                                            </span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


export default translate('Contacts')(Contacts);
