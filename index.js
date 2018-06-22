/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-google-fonts',
  contentFor: function(type, { googleFonts }) {

    if (type === 'head') {
      if (typeof googleFonts == 'array') {
        var families = googleFonts.join('|');
        return '<link href="https://fonts.googleapis.com/css?family=' + families + '" rel="stylesheet" type="text/css" media="all">';
      } else if (typeof googleFonts == 'object') {
        var families = googleFonts.fonts.join('|');
        let head = '<link href="https://fonts.googleapis.com/css?family=' + families + '" rel="stylesheet" type="text/css" media="all">';

        /*
        if (googleFonts.preload) {
          head = '<link rel="preload" href="https://fonts.gstatic.com/s/hind/v8/5aU69_a8oxmIdGl4BA.woff2" as="font">' + head;
          head = '<link rel="preload" href="https://fonts.gstatic.com/s/hind/v8/5aU19_a8oxmIfJpbERySjQ.woff2" as="font">' + head;
          head = '<link rel="preload" href="https://fonts.gstatic.com/s/hind/v8/5aU19_a8oxmIfMJaERySjQ.woff2" as="font">' + head;
        }
        */

        if (googleFonts.preconnect) {
          head = '<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>\n' + head;
        }

        return head;
      }
    }
  }
};
