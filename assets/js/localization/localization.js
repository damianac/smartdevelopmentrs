function setLanguageView() {
  const activeLanguage = localStorage.getItem('language') ;
  let elem;
  if( activeLanguage ) {
    for( let element of localization ) {
      elem = document.getElementById(element.id);
      elem.innerHTML = element[activeLanguage];
    }
  }
}
setLanguageView();

function setLanguageSr() {
  localStorage.setItem('language', 'sr');
  setLanguageView();
}
function setLanguageEn() {
  localStorage.setItem('language', 'en');
  setLanguageView();
}

