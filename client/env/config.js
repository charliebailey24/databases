// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rfp';

