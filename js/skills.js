$(document).ready(function () {
  $('div.skills button').click(function () {
    var button = $(this);
    $('#skill-description').load(pathToTemplate(button.data("tag")));
  });

  function pathToTemplate(skillTag) {
    return 'includes/' + skillTag + '.html';
  }
});