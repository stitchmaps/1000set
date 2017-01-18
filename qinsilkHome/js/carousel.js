$(document).ready(function() {
    var item = $('.list li');
    size = item.length;
    var f = 0; //first指向显示元素的第一个元素
    var l = 5; //last直线显示元素的最后一个元素
    var $first = $(item.get(f));
    var $last = $(item.get(l));
    // $('.list li:first').css("display",'none');

    var isMoving = false; //同步click方法
    $('.next').click(function() {

        if (isMoving == true) return false;
        if (f >= 6) return false;
        // if(f>=6){
        //   $first.hide(500, function() {
        //       $first = $(item.get(++f));
        //       $last = $(item.get(0));
        //       $last.show(500,function(){
        //       });
        //   });
        // }
        //动画效果

        //隐藏显示元素
        // $first.removeClass("display");
        // $first.addClass("hide");
        // $first = $(item.get(++f));
        // $last = $(item.get(++l));
        //  $last.removeClass('hide');
        //  $last.addClass('display');
        isMoving = true;
        $first.hide(500, function() {
            $first = $(item.get(++f));
            $last = $(item.get(++l));

            $last.show(500, function() {
                isMoving = false;
                $last.removeClass('hide');
            });
        });


    });

    $('.prev').click(function() {
        if (isMoving == true) return false;
        if (f == 0) return false;
        // $last.removeClass('display');
        // $last.addClass('hide');
        // $last = $(item.get(--l));
        // $first = $(item.get(--f));
        // $first.removeClass("hide");
        // $first.addClass("display");
        isMoving = true;
        $last.hide(500, function() {
            $last = $(item.get(--l));
            $first = $(item.get(--f));
            $first.show(500, function() {
                isMoving = false;
            });
        });
    });



});
