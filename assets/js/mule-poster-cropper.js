/*This javascript snippet was originally coded by the fine folks at Mule http://muledesign.com/. I tweaked it a bit to fit my needs.*/
!(function(root, $, undefined) {
  "use strict";
  var Posters = {
    MINRATIO: 0.75,
    
    init: function() {
      // Gather our deck of posters
      this.$els = $('.poster');
      // Set initial poster size
      this.respond();
      // Set up our events
      this.bind();
    },

    bind: function() {
      this.$els.find('img').on('load', this.respond.bind(this));
      $(window).on('resize', this.respond.bind(this));
    },
    
    resize: function() {
      var self = this;
      
      self.$els.each(function() {
        var $this, $image;
        
        // Get our elements
        $this = $(this);
        $image = $this.find('.poster-image');
        // Set the poster's max-height
        $this.css({ 'max-height': 525 + 'px' });
        
        self.centerImage($image);
      });
    },
    
    centerImage: function($image) {
      var containerHeight, imageHeight, position;
      
      // Get the position as half the difference between the heights 
      containerHeight = $('.poster').height();
      imageHeight = $image.find('img').height();
      position = (imageHeight - containerHeight) * -0.5;
      // Center image in the container
      $image.find('img').css({
        'position': 'relative',
        'top': position + 'px'
      });
    },
    
    reset: function() {
      this.$els.each(function() {
        var $image = $(this).find('.poster-image');
        
        $image.removeAttr('style');
        $image.find('img').removeAttr('style');
      });
    },
    
    respond: function() {
      this.pageWidth = $(window).width();
      this.pageHeight = $(window).height();
      this.aspectRatio = this.pageWidth / this.pageHeight;
      
      if(this.aspectRatio > this.MINRATIO) {
        this.resize();
      } else {
        this.reset();
      }
    }
  };
    
  $(function() {
    Posters.init();
  });
  
  root.Posters = Posters || {};
})(this, jQuery);
