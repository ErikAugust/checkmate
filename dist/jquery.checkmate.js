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
    growlDuration: 2000,
    saveProgress: false
  };

  // Setup Options:
  var opts = jQuery.extend({}, jQuery.fn.checkmate.defaults, options);

  // If saveProgress is set to true, load from local storage:
  if (opts.saveProgress) {
    var progress = loadProgress(window.location.pathname);
  }

  return this.each(function() {
    var completed = typeof progress !== 'undefined' ? Object.keys(progress).length : 0;
    var checkboxes = jQuery(this).find('input[type="checkbox"]');
    var total = checkboxes.length;

    checkboxes.each(function() {

      var setId = jQuery(this).attr('data-checkmate-id') || jQuery(this).attr('id');

      if (opts.saveProgress) {
        if (progress[setId]) {
          jQuery(this).prop('checked', true);
        }
      }

      jQuery(this).change(function() {


        if(jQuery(this).is(':checked')) {
          completed++;
          saveCheckboxProgress(setId, progress);
        } else {
          completed--;
          removeCheckboxProgress(setId, progress);
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

  // Private methods:

  /**
   * loadProgress
   * If Local Storage is available, will try to load progress object via pathname as key
   * @param pathname string
   * @returns {{}}
   */
  function loadProgress(pathname) {
    if (typeof localStorage !== 'undefined' && opts.saveProgress) {
      return localStorage.getItem(pathname) ? jQuery.parseJSON(localStorage.getItem(pathname)) : {};
    }
  }

  /**
   * saveCheckboxProgress
   * @param id string
   */
  function saveCheckboxProgress(id) {
    if (typeof id !== 'undefined' && opts.saveProgress) {
      progress[id] = true;
      localStorage.setItem(window.location.pathname, JSON.stringify(progress));
    }
  }

  /**
   * removeCheckboxProgress
   * @param id string
   */
  function removeCheckboxProgress(id) {
    if (typeof id !== 'undefined' && opts.saveProgress) {
      delete progress[id];
      localStorage.setItem(window.location.pathname, JSON.stringify(progress));
    }
  }

};