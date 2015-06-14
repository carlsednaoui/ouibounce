# Contributing

Thank you so much for stopping by! It's great to know that you're interested in contributing to this project (or are at least taking the time to read the source).

If you have any questions or feedback don't hesitate to reach out via [Twitter](http://www.twitter.com/carlsednaoui).

### Getting OuiBounce to Work Locally
To get OuiBounce ready locally you'll need to:

 1. Clone the repo
 1. Run `npm install`
 1.  Make sure `gulp` is installed globally
    - You can do that by running `npm install -g gulp`
 1. Open the index file in the `/test/` folder --
    - Note: Cookies won't work if you simply open the file. You'll need to have a server ready to serve the page. The easiest way is to
      - run: `python -m SimpleHTTPServer`
      - [http://127.0.0.1:8000/test/index.html](http://127.0.0.1:8000/test/index.html)

### Dev Build
To minify OuiBounce run `gulp build` from the command line.
