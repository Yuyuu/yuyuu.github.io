$(document).ready(function () {
  $('div.skills button').click(function () {
    var button = $(this);

    hidePreviousDescription();
    showDescriptionWithTagId(button.data("tag-id"));
  });

  function showDescriptionWithTagId(tag) {
    $(tag).removeClass("hidden").addClass("current-description");
  }

  function hidePreviousDescription() {
    $(".current-description").removeClass("current-description").addClass("hidden");
  }
});