# Underscore.String for Meteor

The [underscore.string](http://epeli.github.io/underscore.string/) string manipulation library repackaged for Meteor.

## Usage

Non-conflicting functions are available in `_` directly. All functions,
including conflicting functions, are available in `_s` and `_.str`.

Example:

````javascript
_.str.include('Underscore.string', 'string'); // => true
````

## NOTE

Based off https://github.com/TimHeckel/meteor-underscore-string/ but updated for
0.9.0 compatibility.

## Author

This Meteor package was published by
[WizOne Solutions](http://www.wizonesolutions.com), a Meteor and Drupal CMS
developer.

My largest Meteor app so far is
[https://github.com/spendflow/spendflow](Spendflow). It has a private beta.
Check it out.
