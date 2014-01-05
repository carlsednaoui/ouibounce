# OuiBounce
OuiBounce is ~~an open sourced library~~ a small project that turned up easier than expected thanks to [Zertosh](https://github.com/zertosh).

This project was inspired by [BounceExchange](http://bounceexchange.com/). With OuiBounce you can fire an event (usually display a modal with a marketing message + email capture form) before a user leaves your website.

## Notes
This was quickly hacked together and may not behave as expected.

Pull requests welcome :)

## Using OuiBounce
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