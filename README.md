# Bounce Exchange Alternative [![alt text][1]][1.1]
### (aka OuiBounce)

A small library enabling you to display a modal before a user leaves your website. This was inspired by [BounceExchange](http://bounceexchange.com/).


### The philosophy behind this project
This library helps you increase your landing page conversion rates. From my experience, you can expect a lift of 7% to 15% depending on your audience, traffic type (paid or unpaid) and offer.

Talking about offers... __please__ use OuiBounde to __provide value__ to your visitors. With tools like these __it's very easy to create something spammy-looking__ that provides little value to prospective customers yet ensures a terrible experience.

Not sure what I mean by "provide value"? Here are a few ideas to get your creative juices flowing:

- Free ebook
- Upcoming webinar invite
- Exclusive access to XYZ
- [A full educational course](http://do.thelandingpagecourse.com/)
- [Valuable content](https://training.kalzumeus.com/)

### Installation
Download the minified script located in the "source" folder and include it in your HTML head.

### Usage
OuiBounce is a jQuery plugin, make sure you load it _after_ jQuery.

To use it simply:
- Create a hidden modal
- Select the modal with jQuery and call ouibounce. Here's an example:

```js
$('#ouibounce-modal').ouibounce();
```

##### Options
OuiBounce offers a few options, such as:

- Sensitivity
- Aggressive mode
- Timer

__Configuring sensitivity:__ Use it to define how far your mouse has to be from the window breakpoint. The higher value the more sensitive. _Defaults to 20._

Example    
```js
$('#ouibounce-modal').ouibounce({sensitivity: 40});
```

__Enabling aggressive mode:__ By default, OuiBounce will only fire once. When OuiBounce fires a cookie is created to ensure an _non obtrusive_ experience. There are cases, however, when you may want to be more aggressive (as in, you want the modal to be elegible to fire anytime the page is loaded). A perfect example is Paid landing pages.

Here's how to enable aggressive mode:    
```js
$('#ouibounce-modal').ouibounce({aggressive: true});
```

__Set a min time before OuiBounce fires:__ By default, OuiBounce won't fire in the first second. You can pass a timer option like so:
```js
$('#ouibounce-modal').ouibounce({timer: 0});
```

__To remove ouibounce:__ Call    
```js
$('html').off('mouseout.ouibounce');
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
<!-- Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
