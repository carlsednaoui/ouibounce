Ouibounce
---------

[![tests](http://img.shields.io/travis/carlsednaoui/ouibounce.svg?style=flat)](https://travis-ci.org/carlsednaoui/ouibounce) [![twitter](http://img.shields.io/badge/twitter-@carlsednaoui-blue.svg?style=flat)](http://twitter.com/carlsednaoui) [![gittip](http://img.shields.io/gittip/carlsednaoui.svg?style=flat)](https://www.gittip.com/carlsednaoui/)

A small library enabling you to display a modal before a user leaves your website.

> **Quick note**: [Let me know](https://twitter.com/carlsednaoui) if you end up using Ouibounce. I'd love to hear about your project / see Ouibounce in the wild :)

### The philosophy behind this project

This library helps you increase landing page conversion rates. From my experience, you can expect a lift of 7% to 15% depending on your audience, traffic type (paid or unpaid) and copy.

Talking about copy... __please__ use Ouibounce to __provide value__ to your visitors. With tools like these __it's very easy to create something spammy-looking__.

Not sure what I mean by _provide value_? Here are a few ideas to get your creative juices flowing:

- Free ebook
- Upcoming webinar invite
- Exclusive access to XYZ
- [A full educational course](http://do.thelandingpagecourse.com/)
- [Valuable content](https://training.kalzumeus.com/)

## Demo / Examples

- [Example #1](http://carlsednaoui.github.io/ouibounce/)
- [Example #2](http://colors.carlsednaoui.com/)


## Installation

Download the [minified](build/ouibounce.min.js) or [unminified](build/ouibounce.js) script and include it on your page. Ouibounce is wrapped by a [umd wrapper](https://github.com/ForbesLindesay/umd), so if you are using _requirejs/amd_ or _commonjs/browserify_, it will still work fine.

You can also get Ouibounce from [cdnjs.com](http://cdnjs.com/libraries/ouibounce/).

## Usage

1. Create a hidden modal
1. Select the modal with vanilla JavaScript (or jQuery) and call `ouibounce`
1. Optional: Save the function's return value to use the public API, allowing you to `fire` or `disable` Ouibounce on demand

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'));
```

_Example with jQuery:_    
```js 
ouibounce($('#ouibounce-modal')[0]);
```

_Example using the public api:_    
```js
var modal = ouibounce(document.getElementById('ouibounce-modal'));
modal.fire()
```

### Options

Ouibounce offers a few options, such as:

- [Sensitivity](#sensitivity)
- [Aggressive mode](#aggressive-mode)
- [Timer](#set-a-min-time-before-ouibounce-fires)
- [Callback](#callback)
- [Cookie expiration](#cookie-expiration)
- [Sitewide cookie](#sitewide-cookie)
- [Chaining options](#chaining-options)

##### Sensitivity
Define how far the mouse has to be from the window breakpoint. The higher value, the more sensitive, and the more quickly the event will fire. _Defaults to 20._

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { sensitivity: 40 });
```

##### Aggressive mode
By default, Ouibounce will only fire once for each visitor. When Ouibounce fires, a cookie is created to ensure a _non obtrusive_ experience.

There are cases, however, when you may want to be more aggressive (as in, you want the modal to be elegible to fire anytime the page is loaded/ reloaded). An example use-case might be on your paid landing pages. If you enable `aggressive`, the modal will fire any time the page is reloaded, for the same user.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { aggressive: true });
```

##### Set a min time before Ouibounce fires
By default, Ouibounce won't fire in the first second to prevent false positives, as it's unlikely the user will be able to exit the page within less than a second. If you want to change the amount of time that firing is surpressed for, you can pass in a number of milliseconds to `timer`.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { timer: 0 });
```

##### Callback
You can add a callback, which is a function that will run once Ouibounce has been triggered, by using the `callback` option.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { callback: function() { console.log('Ouibounce fired!'); } });
```

##### Cookie expiration
Ouibounce sets a cookie by default to prevent the modal from appearing more than once per user. You can add a cookie expiration (in days) using `cookieExpire` to adjust the time period before the modal will appear again for a user. By default, the cookie will expire at the end of the session, which for most browsers is when the browser is closed entirely.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { cookieExpire: 10 });
```

##### Sitewide cookie
You can drop sitewide cookies by using this option.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), { sitewide: true });
```

##### Chaining options
The options are just javascript objects, you can therefore combine multiple options.

_Example:_    
```js
ouibounce(document.getElementById('ouibounce-modal'), {
  aggressive: true,
  sitewide: true,
  timer: 0,
  callback: function() { console.log('ouibounce fired!'); }
});
```

### Ouibounce API

If you save the object returned by the `ouibounce` function, you get access to a small public API. Use this API to `fire` or `disable` Ouibounce on demand.

_Example:_    
```js
var modal = ouibounce(document.getElementById('ouibounce-modal'));
modal.fire(); // fire the ouibounce event
modal.disable() // disable ouibounce, it will not fire on page exit
modal.disable({ cookieExpire: 50, sitewide: true }) // disable ouibounce sitewide for 50 days. 
```

### Using Ouibounce with other libraries
If you want to use this library with other plugins — such as [Vex](http://github.hubspot.com/vex/docs/welcome/) — you can call ouibounce with `false`. See [#30](https://github.com/carlsednaoui/ouibounce/issues/30) for discussion.


```js
var _ouibounce = ouibounce(false, {
  callback: function() { console.log('ouibounce fired!'); }
});
```

### Miscellaneous

- This library provides no guarantees.
- If you are intersted in contributing, make sure to check out [contributing.md](contributing.md).
- Licensed under [MIT](license.md).
- Special thanks to [Zertosh](https://github.com/zertosh), [Jenius](https://github.com/jenius) and all other [contributors](//github.com/carlsednaoui/ouibounce/graphs/contributors).

[![Analytics](https://ga-beacon.appspot.com/UA-49243488-1/ouibounce/readme)](https://github.com/igrigorik/ga-beacon)
