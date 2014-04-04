# OuiBounce [![alt text][1]][1.1]
[![tests](https://travis-ci.org/carlsednaoui/ouibounce.png?branch=master)](https://travis-ci.org/carlsednaoui/ouibounce) [![Analytics](https://ga-beacon.appspot.com/UA-49243488-1/ouibounce/readme)](https://github.com/igrigorik/ga-beacon)

A small library enabling you to display a modal before a user leaves your website.

[![Support via Gittip](https://rawgithub.com/carlsednaoui/gittip-badge/master/dist/gittip.png)](https://www.gittip.com/carlsednaoui/)


### Quick note
[Let me know](https://twitter.com/carlsednaoui) if you end up using OuiBounce. I'd love to hear about your project / see OuiBounce in the wild :)

### The philosophy behind this project
This library helps you increase landing page conversion rates. From my experience, you can expect a lift of 7% to 15% depending on your audience, traffic type (paid or unpaid) and copy.

Talking about copy... __please__ use OuiBounce to __provide value__ to your visitors. With tools like these __it's very easy to create something spammy-looking__.

Not sure what I mean by _provide value_? Here are a few ideas to get your creative juices flowing:

- Free ebook
- Upcoming webinar invite
- Exclusive access to XYZ
- [A full educational course](http://do.thelandingpagecourse.com/)
- [Valuable content](https://training.kalzumeus.com/)

## Demo / Example
- [Example #1](http://carlsednaoui.github.io/bounce-exchange-alternative/)
- [Example #2](http://colors.carlsednaoui.com/)


## Installation
Download the [minified](build/ouibounce.min.js) or [unminified](build/ouibounce.js) script and include it on your page. OuiBounce is wrapped by a [umd wrapper](https://github.com/ForbesLindesay/umd), so if you are using _requirejs/amd_ or _commonjs/browserify_, it will still work fine.

You can also get OuiBounce from [cdnjs.com](http://cdnjs.com/libraries/ouibounce/).

### Usage
1. Create a hidden modal
1. Select the modal with vanilla JavaScript (or jQuery) and call ouibounce
1. Optional: Save the function to use the public API, allowing you to `fire` or `disable` OuiBounce on demand

Here's an example:

Without using jQuery    
```js
ouiBounce(document.getElementById('ouibounce-modal'));
```

Using jQuery    
```js 
ouiBounce($('#ouibounce-modal')[0]);
```

Saving the OuiBounce function with vanilla JavaScript    
```js
var _ouiBounce = ouiBounce(document.getElementById('ouibounce-modal'));
```

##### Options
OuiBounce offers a few options, such as:

- Sensitivity
- Aggressive mode
- Timer
- Callback
- Cookie expiration

__Sensitivity:__ Define how far the mouse has to be from the window breakpoint. The higher value, the more sensitive. _Defaults to 20._

Example    
```js
ouiBounce(document.getElementById('ouibounce-modal'), { sensitivity: 40 });
```

__Aggressive mode:__ By default, OuiBounce will only fire once for each visitor. When OuiBounce fires, a cookie is created to ensure a _non obtrusive_ experience.

There are cases, however, when you may want to be more aggressive (as in, you want the modal to be elegible to fire anytime the page is loaded/ reloaded). An example use-case would be on your Paid landing pages.

Here's how to enable aggressive mode:    
```js
ouiBounce(document.getElementById('ouibounce-modal'), { aggressive: true });
```

__Set a min time before OuiBounce fires:__ By default, OuiBounce won't fire in the first second. You can pass a timer option like so:
```js
ouiBounce(document.getElementById('ouibounce-modal'), { timer: 0 });
```

__Callback:__ You can add a callback, which will run once OuiBounce has been triggered:
```js
ouiBounce(document.getElementById('ouibounce-modal'), { callback: function() { console.log('OuiBounce fired!'); } });
```

__Cookie expiration:__ You can add a cookie expiration (in days). The default cookie expiration is 30 days.
```js
ouiBounce(document.getElementById('ouibounce-modal'), { cookieExpire: 10 });
```

__Multiple options:__ You can also combine multiple options:
```js
ouiBounce(document.getElementById('ouibounce-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouiBounce fired!'); }
});
```

##### OuiBounce API
If you save the OuiBounce function, you can use `fire` to show the modal whenever you want or `disable` to disable it.

Here's how to save the OuiBounce function with vanilla JavaScript    
```js
var _ouiBounce = ouiBounce(document.getElementById('ouibounce-modal'));
```

__Fire:__ To fire OuiBounce on demand use `_ouiBounce.fire()`

__Disable:__ To disable OuiBounce on demand use `_ouiBounce.disable()`

### Miscellaneous
- This library provides no guarantees.
- To contribute, check out [contributing.md](contributing.md).
- Licensed under [MIT](license.md).
- Special thanks to [Zertosh](https://github.com/zertosh) and [Jenius](https://github.com/jenius).

<!-- Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
[1]: http://i.imgur.com/tXSoThF.png (twitter)
[1.1]: http://www.twitter.com/carlsednaoui
