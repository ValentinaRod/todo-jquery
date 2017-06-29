//crear elementos
$(document).ready(inicio);
(function($){
    $('#myform').submit(function(e){
        var val = $(this).find('#in').val();
        $('ul.list').append('<li>' + val + '</li>');
        e.preventDefault();
    });
})(jQuery);

/*checkbox*/

$('#isAgeSelected').click(function() {
    $("#txtAge").toggle(this.checked);
});
	



