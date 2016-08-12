 $("#tableOne thead tr th:first input:checkbox").click(function() {
    var checkedStatus = this.checked;
    $("#tableOne tbody tr td:first-child input:checkbox").each(function() {
        this.checked = checkedStatus;
    });
});

$('td input:checkbox').change(function(){
 $('th.checkbox :checkbox').prop('checked', $('td input:checkbox:checked').length == $('td input:checkbox').length);
});
