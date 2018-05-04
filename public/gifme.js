$(function() {
  $.get('/gif', (data) => {
    $('#giphy').attr('src', data);
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var tag = $('input').val();
    var url = '/gif';
    console.log(tag);
    if (tag !== '') url = url + '?' + $.param({tag: tag});
    $.get(url, (data) => $("#giphy").attr('src', data));
  });
});