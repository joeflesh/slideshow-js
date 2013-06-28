// Slideshow.js

Slideshow = function(element, options){

  /* Initialize new slideshow */
  this.$el = $(element);    // <ul> element containing slideshow
  this.advance = 'auto';    // automatic vs. manual control over slideshow
  this.delay = 4000;        // delay between slides when advancing automatically
 
  // Do we have a <ul> slideshow element that exists?
  if (this.$el.length == 0) {
    throw('Slideshow: element "' + element + '" does not exist');
    return;
  }

  /* Parse options */
  if (typeof(options) == 'object') {
    if (typeof(options.delay) == 'number') {
      this.delay = options.delay;
    }
    if (typeof(options.advance) == 'string') {
      if (options.advance == 'auto' || options.advance == 'manual' ) {
        this.advance = options.advance;
      }
    }
    if (typeof(options.previous == 'string') {
      // TODO
      // Set up control to go to previous slide by manual user input
    }
    if (typeof(options.next == 'string') {
      // TODO
      // Set up control to go to next slide by manual user input
    }
  }


  this.start = function() {


  };

  this.next = function() {


  };

  this.previous = function () {

  };

  
  // Start if advancing automatically
  if (this.advance == 'auto') this.start();
};


