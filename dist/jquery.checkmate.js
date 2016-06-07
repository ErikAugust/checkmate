"use strict";

/**
 * jQuery.fn.checkmate
 * @author Erik August Johnson <erik@erikaugust.com>
 * Plugin finds all input boxes in parent, adds growl event handler
 * @returns {*}
 */
jQuery.fn.checkmate = function() {
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
          title: jQuery(this).attr('data-checkmate') || "Checkmate",
          message: completed + " out of " + total + " completed!",
          duration: "2000",
          location: "br"
        });
      });
    })
  });
};