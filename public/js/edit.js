$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    // $('#step1-form').validate({
    //     rules: {
    //         inputName: {
    //           minlength: 3,
    //           required: true
    //         },
    //         inputHeadline: {
    //           minlength: 3,
    //           required: true
    //         },
    //         twitterAcc:{
    //           maxlength:15
    //         },
    //         facebookAcc:{
    //           maxlength:15
    //         }
    //     },
    //     highlight: function(element) {
    //         $(element).closest('.form-group').addClass('has-error');
    //     },
    //     unhighlight: function(element) {
    //         $(element).closest('.form-group').removeClass('has-error');
    //     },
    //     errorElement: 'span',
    //     errorClass: 'help-block',
    //     errorPlacement: function(error, element) {
    //         if(element.parent('.input-group').length) {
    //             error.insertAfter(element.parent());
    //         } else {
    //             error.insertAfter(element);
    //         }
    //     }
    // });


});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
