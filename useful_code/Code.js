//Adding stylesheet to the existing page
const sheet = new CSSStyleSheet();
sheet.repaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];