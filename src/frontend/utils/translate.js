
import { default as React } from 'react';
import en from '../i18n/msg_en';
import ru from '../i18n/msg_ru';

const languages = {
    en,
    ru
};

export default function translate(key) {
    return Component => {
        class TranslationComponent extends React.Component {
            render() {
                console.log('current language: ', this.context.currentLanguage);
                let strings = languages[this.context.currentLanguage][key];
                return <Component {...this.props} {...this.state} strings={strings} />;
            }
        }

        TranslationComponent.contextTypes = {
            currentLanguage: React.PropTypes.string
        };

        return TranslationComponent;
    };
}