function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'it',
        includedLanguages: 'en,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}
