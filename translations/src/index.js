// import { language } from './locales/LOCALE';

const language = {
    "translation": "översättning"
};

function getLocale() {
    if (navigator.languages != undefined) {
        return navigator.languages[0];
    }
    return navigator.language;
}

// export default function (locale = getLocale()) {
const translate = (key) => {
    if (key in language) {
        return language[key];
    }
    throw new Error(`Translation key: ${key} missing in bundle for locale: LOCALE`);
};

export default translate;
