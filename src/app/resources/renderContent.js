import { person, newsletter, social, home, about, blog, work, gallery } from './content';

import { i18n } from './config';

const renderContent = (t) => {
    if ( i18n ) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            home,
            about,
            blog,
            work,
            
        }
    }
};

export { renderContent };