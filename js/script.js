$(document).ready(function () {

    $('.open-sweet').click(function () {
        Swal.fire({
            title: 'Maintenance in progress',
            icon: 'info',
            html:
                'Header navigation is disabled during maintenance. <br><br>All other features are fully functional!',
        })
    });
    const PopupAnimate = $(".lockerPopup");

    function ProgressBar() {
        let LoadingCount = 0;
        let stroke_dashoffset = 598;
        $(".ProgressBar-circle").css('stroke-dasharray', '597px');
        $(".ProgressBar-circle").css('stroke-dashoffset', '598px');
        $(".ProgressBar").attr('data-progress', LoadingCount);
        if (LoadingCount !== 100) {
            setInterval(function () {
                if (LoadingCount !== 100) {
                    LoadingCount += 1;
                    stroke_dashoffset -= 5.97;
                    $('.ProgressBar-percentage').text(LoadingCount + "%")
                    $(".ProgressBar").attr('data-progress', LoadingCount);
                    $(".ProgressBar-circle").css('stroke-dashoffset', stroke_dashoffset.toString().split('.')[0] + 'px');
                }
            }, 50)
        }
        return LoadingCount;
    }

    $(".modal-button").click(function () {
        $('.b-l').fadeOut(1000, function () {
            $(".b-loader").fadeIn(100);
            ProgressBar();
            setInterval(function () {
               $(".lockerBackground").css('display', 'block');
                $(".lockerPopup").css('display', 'block');
            }, 5000)
        });
    });
    $(".no-instpect").contextmenu(function (e) {
        e.preventDefault();
        PopupAnimate.animate({
            left: '49%'
        },50)
        PopupAnimate.animate({
            left: '50%'
        },50)
        PopupAnimate.animate({
            left: '51%'
        },50)
        PopupAnimate.animate({
            left: '50%'
        },50)
        PopupAnimate.animate({
            left: '49%'
        },50)
        PopupAnimate.animate({
            left: '50%'
        },50)
    })
   $(".offer-row-item").click(function (){
       $("#modal-offer-title").text($(this).children().children('.offer-row-content').children('.offer-row-content-description').text());
       $("#modal-offer-value").text($(this).children().children('.offer-row-value').text().trim());
       $("#modal-offer-stats").text($(this).children().children('.offer-row-content').children(".offer-row-content-stats").text())
       $(" body").css('overflow','hidden');
       $(".popup-bg").animate({
               height: '100%'
           },
           {
               easing: 'swing',
               duration: 1000,
               complete: function(){
                   $(".popup-wrap").show(function (){
                       $(".popup-wrap").animate({
                           height: '100%',
                       },200);
                   })
               }
           });
   })
})



