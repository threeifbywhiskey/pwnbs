$(function() {
    $('#msg').focus();
});

generate = function() {
    var msg = $('#msg').val();
    $.post('generate', {'msg': msg}, function(resp) {
        $('#output').text(resp['output']);
        $('#smoosh').text(resp['smoosh']);
        $('pre code').each(function(i, e) { hljs.highlightBlock(e); });
    }, 'json');
}
