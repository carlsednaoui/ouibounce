# Bounce Exchange Alternative [![alt text][1]][1.1]
### (aka OuiBounce)

[![tests](https://travis-ci.org/carlsednaoui/bounce-exchange-alternative.png?branch=master)](https://travis-ci.org/carlsednaoui/bounce-exchange-alternative)

A small library enabling you to display a modal before a user leaves your website. This was inspired by [BounceExchange](http://bounceexchange.com/).


### The philosophy behind this project
This library helps you increase your landing page conversion rates. From my experience, you can expect a lift of 7% to 15% depending on your audience, traffic type (paid or unpaid) and offer.

Talking about offers... __please__ use OuiBounce to __provide value__ to your visitors. With tools like these __it's very easy to create something spammy-looking__ that provides little value to prospective customers yet ensures a terrible experience.

Not sure what I mean by "provide value"? Here are a few ideas to get your creative juices flowing:

- Free ebook
- Upcoming webinar invite
- Exclusive access to XYZ
- [A full educational course](http://do.thelandingpagecourse.com/)
- [Valuable content](https://training.kalzumeus.com/)

### Installation
Download the [minified](build/ouibounce.min.js) or [unminified](build/ouibounce.js) script and include it on your page. OuiBounce is wrapped by a [umd wrapper](https://github.com/ForbesLindesay/umd), so if you are using _requirejs/amd_ or _commonjs/browserify_, it will still work fine.

### Usage
To use it simply:

- Create a hidden modal
- Select the modal with vanilla JavaScript (or jQuery) and call ouibounce. Here's an example:

Without jQuery    
```js
ouiBounce(document.getElementById('ouibounce-modal'));
```

Using jQuery    
```js 
ouiBounce($('#ouibounce-modal')[0]);
```

##### Options
OuiBounce offers a few options, such as:

- Sensitivity
- Aggressive mode
- Timer
- Callback

__Configuring sensitivity:__ Use it to define how far your mouse has to be from the window breakpoint. The higher value the more sensitive. _Defaults to 20._

Example    
```js
ouiBounce(document.getElementById('ouibounce-modal'), { sensitivity: 40 });
```

__Enabling aggressive mode:__ By default, OuiBounce will only fire once. When OuiBounce fires a cookie is created to ensure an _non obtrusive_ experience. There are cases, however, when you may want to be more aggressive (as in, you want the modal to be elegible to fire anytime the page is loaded). A perfect example is Paid landing pages.

Here's how to enable aggressive mode:    
```js
ouiBounce(document.getElementById('ouibounce-modal'), { aggressive: true }});
```

__Set a min time before OuiBounce fires:__ By default, OuiBounce won't fire in the first second. You can pass a timer option like so:
```js
ouiBounce(document.getElementById('ouibounce-modal'), { timer: 0 }});
```

__Set callback:__ You can also add a callback which will fire once OuiBounce has been triggered:
```js
ouiBounce(document.getElementById('ouibounce-modal'), { callback: function() { console.log('fired !'); } });
```

__Multiple options:__ You can also combine multiple options. Here's an example
```js
ouiBounce(document.getElementById('ouibounce-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouiBounce fired!'); }
});
```

### Example
[Live example](http://colors.carlsednaoui.com/)

### Miscellaneous
- This library provides no guarantees.
- To contribute, check out [contributing.md](contributing.md).
- Licensed under [MIT](license.md).
- Special thanks to [Zertosh](https://github.com/zertosh), [Jenius](https://github.com/jenius) and [BounceExchange](http://bounceexchange.com/).

<!-- Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
[1]: http://i.imgur.com/tXSoThF.png (twitter)
[1.1]: http://www.twitter.com/carlsednaoui
