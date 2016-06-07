"use strict";

/**
 * jQuery.fn.checkmate
 * @author Erik August Johnson <erik@erikaugust.com>
 * Plugin finds all input boxes in parent, adds growl event handler
 * @param options object
 * @returns {*}
 */
jQuery.fn.checkmate = function(options) {
  // Merge passed options with defaults:
  jQuery.fn.checkmate.defaults = {
    defaultTitle: "Checkmate",
    growlPlacement: "br",
    growlDuration: 2000
  };

  var opts = jQuery.extend({}, jQuery.fn.checkmate.defaults, options);

  return this.each(function() {
    var completed = 0;
    var checkboxes = jQuery(this).find('input[type="checkbox"]');
    var total = checkboxes.length;

    checkboxes.each(function() {
      jQuery(this).change(function() {

        if(jQuery(this).is(":checked")) {
          completed++;
        } else {
          completed--;
        }

        jQuery.growl({
          title: jQuery(this).attr('data-checkmate') || opts.defaultTitle,
          message: completed + " out of " + total + " completed!",
          duration: opts.growlDuration,
          location: opts.growlPlacement
        });
      });
    })
  });

};