'use strict';

module.exports = {
  name: 'ember-cli-tachyons-sass',

  included(/*app*/) {
    // For ember-cli-sass
    this._super.included.apply(this, arguments);
  },

  // isDevelopingAddon() {
  //   return true;
  // },
};
