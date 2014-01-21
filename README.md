<!-- Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
Follow me on [![alt text][1]][1.1]

[1]: http://i.imgur.com/tXSoThF.png (twitter)
[1.1]: http://www.twitter.com/carlsednaoui
<!-- Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

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

## Contributions
Check out [contributing.md](contributing.md).

## Dependencies and credit
OuiBounce depends on jQuery and uses [Bootstrap's](http://getbootstrap.com/javascript/#modals) modal JS & CSS.

Thanks to [Zertosh](https://github.com/zertosh) for the help.