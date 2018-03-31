/* eslint-env node */
module.exports = {
  description: '',
  normalizeEntityName: function() {},

  afterInstall(/*options*/) {
    return this.addPackagesToProject([
      {name: 'tachyons-sass', target: '^4.9.2'},
    ]);
  },
};
