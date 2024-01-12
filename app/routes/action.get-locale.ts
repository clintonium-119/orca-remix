import acceptLanguage from 'accept-language-parser';
import { type Locale } from 'react-aria';

export default function getLocale(request: Request) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  const languages = acceptLanguage.parse(
    request.headers.get('Accept-Language') as string,
  );

  const locale: Locale = {
    locale: 'en-US',
    // TODO: implement way to detect rtl. React-aria porvider does this automatically,
    // but doesn't work properly - perhap can leverage their detection utility
    direction: 'ltr',
  };

  if (languages?.length > 0) {
    locale.locale = !languages[0].region
      ? languages[0].code
      : `${languages[0].code}-${languages[0].region}`;
  }

  return locale;
}
