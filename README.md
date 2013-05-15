# Leaflet.i18n

Internationalisation module for Leaflet plugins.

This module has been extracted from  [Leaflet.Storage](https://github.com/yohanboniface/Leaflet.Storage), in case it can be useful for others.

See https://github.com/Leaflet/Leaflet/pull/1232 for a discussion on the history of this.



## API

* to make a string translatable, just call `L._` (shortcut for `L.i18n`), like this:
```
L._("The phrase I want to be translatable");
L._("A complex sentence with a {variable}", {variable: "my value"});
```

* one or more `locale/{locale_code}.js` should be provided, something like:
```
var mylocale = {
    "Simple phrase to translate": "Une simple phrase à traduire",
    "A sentence with a {variable}": "Une phrase avec une {variable}",
};
```

* the locale must register itself, doing something like:
```
L.registerLocale('fr', mylocale);
```

 This can be done more than once. For example, every plugin can add it's translations for some locale without overriding all the already registered strings. However, if the same string for the same locale is registered twice, the last wins.

* end user must load the `locale/` files provided by Leaflet, or plugins

* end user must set his locale, doing so:
```
L.setLocale('fr');
```

## Generating locales files

A util script is provided in this module for extracting strings to translate from Leaflet plugins code and generating the locales files.

Example of use:

```
node bin/i18n.js --dir_path={somepath} --locale_dir_path={somepath} --locale_codes={nl,fr,es}
```

This will generate the locale files for `nl`, `fr` and `es`. Note: if the locale files already exist, they will be updated (and the previous translated strings will be kept).

## Tests

To run the unittests, just do, from the root of the module:

```
make test
```