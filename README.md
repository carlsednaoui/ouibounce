[![alt text][1]][1.1]
[![alt text][2]][2.1]
[![alt text][3]][3.1]
[![alt text][4]][4.1]
[![alt text][5]][5.1]
[![alt text][6]][6.1]

[1]: http://i.imgur.com/P3YfQoD.png (facebook)
[2]: http://i.imgur.com/tXSoThF.png (twitter)
[3]: http://i.imgur.com/yCsTjba.png (google plus)
[4]: http://i.imgur.com/YckIOms.png (tumblr)
[5]: http://i.imgur.com/1AGmwO3.png (dribbble)
[6]: http://i.imgur.com/0o48UoR.png (github)

[1.1]: http://www.facebook.com/sednaoui
[2.1]: http://www.twitter.com/carlsednaoui
[3.1]: https://plus.google.com/+CarlSednaoui
[4.1]: http://carlsed.tumblr.com
[5.1]: http://dribbble.com/carlsednaoui
[6.1]: http://www.github.com/carlsednaoui

# Bounce Exchange Alternative
This is ~~an open sourced library~~ a small project that turned up easier than expected thanks to [Zertosh](https://github.com/zertosh).

This project was inspired by [BounceExchange](http://bounceexchange.com/) and enables you to display a modal before a user leaves your website.

## The philosophy behind this project
**Please** use this project to provide value to your visitors. With tools like these it's very easy to create something spammy-looking that provides little value to prospective customers.

Quick disclaimer: I have nothing against Bounce Exchange. On the contrary, their business idea is brilliant... it's just that I would approach the banner's messaging very differently. Example:

![](http://i.imgur.com/ot2xNi4.png)
![](http://i.imgur.com/tpQNyOr.png)

This doesn't provide much value to the user. It would be **much** more valuable to offer a webinar teaching online marketing best practices to prospective customers. Towards the end of the webinar they could mention how other companies are benefiting by using their services.

If you're interested in this sort of 'value-driven marketing', here are a few examples to get you started:

- [Unbouce Landing Page Conversion Course](http://do.thelandingpagecourse.com/)
- [Patio11 Training Course](https://training.kalzumeus.com/)

## Implementation
[Live example](http://colors.carlsednaoui.com/)

- Include ouibounce.js
- Include bootstrap_modal.css
- Create your modal

        <!-- OuiBounce Modal -->
        <div class="modal fade" id="ouibounce-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                Place your marketing message here!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">No thanks</button>
              </div>
            </div>
          </div>
        </div>

- Et voila! :)

## Notes
This was quickly hacked together and may not behave as expected.


## Dependencies and credit
OuiBounce depends on jQuery and uses [Bootstrap's](http://getbootstrap.com/javascript/#modals) modal JS & CSS.

Thanks to [Zertosh](https://github.com/zertosh) for the help.

## License
MIT

    The MIT License (MIT)

    Copyright (c) <year> <copyright holders>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
