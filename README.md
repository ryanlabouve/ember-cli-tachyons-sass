# ember-cli-tachyons-sass

Installs [tachyons](https://tachyons.io/), but the [SASS version](https://github.com/tachyons-css/tachyons-sass) with easy theming.

## Installation

```
ember install ember-cli-tachyons-sass
```

## Usage

Make sure you have [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) installed and setup first.

Then import `ember-cli-tachyons-sass` and over-ride any variables
for theming:

```sass
// Override any variables for theming: https://github.com/tachyons-css/tachyons-sass/blob/master/scss/_variables.scss
$font-size-headline: 9rem;

// Import ember-cli-tachyons-sass to your project
@import 'ember-cli-tachyons-sass';
```

## Contributing

Just make an issue and let's start a conversation!

### Installation

* `git clone <repository-url>`
* `cd ember-cli-tachyons-sass`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at by running `ember o`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
