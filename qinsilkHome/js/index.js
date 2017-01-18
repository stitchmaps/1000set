$(document).ready(function() {
   $('#panelDownload1').click(function(){
     window.open('http://www.qinsilk.com/download.html');
   });
   $('#panelDownload2').click(function(){
     window.open('http://syt.qinsilk.com/download.html');
   });




    //  下载部分动画
    var moving=false;
    $('.proDownloadR').mouseenter(function() {
        if(moving==true) return false;
        moving =true;
        $('.proDownloadR #ewm2').show().addClass('animated zoomIn');
        setTimeout(function() {
            $('.proDownloadR #egg1').show().animate({
                'left': '54%'
            });
            $('.proDownloadR #egg2').show().animate({
                'top': '410px'
            });
            $('.proDownloadR #egg3').show().animate({
                'left': '25%'
            });
        }, 700);
         moving=false;

    }).mouseleave(function() {
     if(moving==true) return false;
     moving =true ;
        $('.proDownloadR #egg1').hide().css({
            'left': '45%'
        }).removeClass('animated zoomIn');
        $('.proDownloadR #egg2').animate({
            'top': '450px'
        }).removeClass('animated zoomIn').hide();
        $('.proDownloadR #egg3').animate({
            'left': '35%'
        }).removeClass('animated zoomIn').hide();
        setTimeout(function() {
            $('.proDownloadR #ewm2').hide().removeClass('animated zoomIn');
        },0);
        moving = false;
    });






    //样例轮播样式
    var isMoving = false;
    var current = 3;
    var timer = null;
    var isMoving = false;
    $('.list>li').eq(0).children().css('filter', ' blur(2px)');
    $('.list>li').eq(5).children().css('filter', ' blur(2px)');
   timer = window.setInterval("$('#next').click()", 3000);

    $('#next').click(function() {
        if (isMoving == true) return false;
        isMoving = true;
        clearInterval(timer);
        $('.list').animate({
            marginLeft: '-16.667%'
        }, 600, function() {
            $('.list>li').eq(0).appendTo($('.list'));
            $(".list").css('margin-left', '0px');
            $('.list>li').eq(1).children().removeClass('active');
            $('.list>li').eq(2).children().addClass('active');
            $('.list>li').eq(4).children().css('filter', ' blur(0px)');
            $('.list>li').eq(0).children().css('filter', ' blur(2px)');
        });



        current = (current % 6) + 1;
        switch (current) {
            case 1:
                $('.photo img').attr('src', 'img/example/sjsmb.png');
                $('.detail h2').text("我是手机数码");
                $('.detail .detailp').text("我是做手机的，不同于一般商品，手机每台机子都有自己的序列号，生意通的商品管理里面有我需要的这个功能，能够记录下来我每一台手机卖到了哪个客户手上。可以为用户提供更好的售后服务。");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').hide();
                break;
            case 2:
                $('.photo img').attr('src', 'img/example/scb.png');
                $('.detail h2').text("我是商超百货");
                $('.detail .detailp').text("以前用的收银系统很占地方，反应速度又慢，而且自带的软件又很不好用，后台管理很差，秦丝的一体机真的超适合我，扫码开单扫码支付，快速结账.")
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/sm.png');
                break;
            case 3:
                $('.photo img').attr('src', 'img/example/fzpfb.png');
                $('.detail h2').text("我是服装批发");
                $('.detail .detailp').text("我是做服装批发的，颜色、尺码多，商品管理、库存管理难度大。每天业务单据非常多，对销售员的记忆也是一个考验。秦丝真的帮了我大忙， 销售员只要用它来开单， 库存就可以同步， 相应的财务报表立马生成， 节省了员工很多时间， 也方便我和他们对账, 降低缺货率， 提高营收");
                $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
                $('.detail #img5').hide();
                break;
            case 4:
                $('.photo img').attr('src', 'img/example/wsb.png');
                $('.detail h2').text("我是微商");
                $('.detail .detailp').text("我是全国总代，下面有着很多级别的代理，每一级代理对应着不同的代理价，发货的经常弄错价格。秦丝的客户分类管理非常适合我的业务，而且快递单批量打印也解放了我的双手！");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/80qz.png');

                break;
            case 5:
                $('.photo img').attr('src', 'img/example/kxpb.png');
                $('.detail h2').text("我是快消品批发");
                $('.detail .detailp').text("以前都是业务员出去跑业务，拿着单子回来发货，也容易错弄乱，现在业务员拿着一体机出去，在客户店里就把单给开了，信息及时汇总到后台，有时候当天就能完成发货，业绩汇总也一清二楚。");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/sm.png');
                break;
            case 6:
                $('.photo img').attr('src', 'img/example/lsb.png');
                $('.detail h2').text("我是服装零售");
                $('.detail .detailp').text("我的店铺在商场里，以前的单子都是手写的，显得很没有档次。而且旺季的时候来买衣服的客人多，手写开单再按计算器，速度跟不上，用了秦丝之后，扫码开单自动结算，非常便捷。而且通过计客宝我可以得出我店铺的实时客流量，转化率，客单价等手写开单得不到的数据，让我可以精准的调整业务。");
                $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
                $('.detail #img5').show().children().attr('src', 'img/item/jhb.png');
                break;
            default:
        }


        timer = window.setInterval("$('#next').click()", 3000);
        isMoving = false;
    });

    $('#prev').click(function() {
        clearInterval(timer);
        if (isMoving == true) return false;
        isMoving = true;

        $('.list').css('margin-left', '-16.667%');
        $('.list>li').eq(5).prependTo($('.list'));
        $(".list").animate({
            marginLeft: "0px"
        }, 600, function() {
            $('.list>li').eq(3).children().removeClass('active');
            $('.list>li').eq(2).children().addClass('active');
        });

        current--;
        $('.list>li').eq(1).children().css('filter', ' blur(0px)');
        $('.list>li').eq(5).children().css('filter', ' blur(2px)');
        if (current == 0) current = 6;

        switch (current) {
            case 1:
                $('.photo img').attr('src', 'img/example/sjsmb.png');
                $('.detail h2').text("我是手机数码");
                $('.detail .detailp').text("我是做手机的，不同于一般商品，手机每台机子都有自己的序列号，生意通的商品管理里面有我需要的这个功能，能够记录下来我每一台手机卖到了哪个客户手上。可以为用户提供更好的售后服务。");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').hide();
                break;
            case 2:
                $('.photo img').attr('src', 'img/example/scb.png');
                $('.detail h2').text("我是商超百货");
                $('.detail .detailp').text("以前用的收银系统很占地方，反应速度又慢，而且自带的软件又很不好用，后台管理很差，秦丝的一体机真的超适合我，扫码开单扫码支付，快速结账.")
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/sm.png');
                break;
            case 3:
                $('.photo img').attr('src', 'img/example/fzpfb.png');
                $('.detail h2').text("我是服装批发");
                $('.detail .detailp').text("我是做服装批发的，颜色、尺码多，商品管理、库存管理难度大。每天业务单据非常多，对销售员的记忆也是一个考验。秦丝真的帮了我大忙， 销售员只要用它来开单， 库存就可以同步， 相应的财务报表立马生成， 节省了员工很多时间， 也方便我和他们对账, 降低缺货率， 提高营收");
                $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
                $('.detail #img5').hide();
                break;
            case 4:
                $('.photo img').attr('src', 'img/example/wsb.png');
                $('.detail h2').text("我是微商");
                $('.detail .detailp').text("我是全国总代，下面有着很多级别的代理，每一级代理对应着不同的代理价，发货的经常弄错价格。秦丝的客户分类管理非常适合我的业务，而且快递单批量打印也解放了我的双手！");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/80qz.png');
                break;
            case 5:
                $('.photo img').attr('src', 'img/example/kxpb.png');
                $('.detail h2').text("我是快消品批发");
                $('.detail .detailp').text("以前都是业务员出去跑业务，拿着单子回来发货，也容易错弄乱，现在业务员拿着一体机出去，在客户店里就把单给开了，信息及时汇总到后台，有时候当天就能完成发货，业绩汇总也一清二楚。");
                $('.detail #img1 img').attr('src', 'img/footer-syt.png');
                $('.detail #img5').show().children().attr('src', 'img/item/sm.png');
                break;
            case 6:
                $('.photo img').attr('src', 'img/example/lsb.png');
                $('.detail h2').text("我是服装零售");
                $('.detail .detailp').text("我的店铺在商场里，以前的单子都是手写的，显得很没有档次。而且旺季的时候来买衣服的客人多，手写开单再按计算器，速度跟不上，用了秦丝之后，扫码开单自动结算，非常便捷。而且通过计客宝我可以得出我店铺的实时客流量，转化率，客单价等手写开单得不到的数据，让我可以精准的调整业务。");
                $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
                $('.detail #img5').show().children().attr('src', 'img/item/jhb.png');
                break;
            default:
        }
        timer = window.setInterval("$('#next').click()", 5000);
        isMoving = false;
    });


    $('.detail #img1').click(function() {
        window.location.href = "index.html#proDownload";
    });
    $('.detail #img2').click(function() {
        window.open('http://www.qinsilk.com/ws/index.html');
    });
    $('.detail #img3').click(function() {
        window.open('https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-14451975334.24.fG00Wf&id=532097850680');
    });
    $('.detail #img4').click(function() {
        window.open('https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-14451975334.9.fG00Wf&id=522196993884');
    });
    $('.detail #img5').click(function() {
        var str = $('.detail #img5 img').attr("src");
        if (str == 'img/item/jhb.png') {
            window.open('https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-14451975345.68.RhPSAx&id=525948544231');
        }
        if (str == 'img/item/sm.png'){
          window.open('https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-14451975345.34.RhPSAx&id=542293965609');
        }
        if (str=='img/item/80qz.png'){
          window.open('https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-14451975345.50.RhPSAx&id=540517620181');
        }
    });




    // 产品功能模块动画
    $('.fcont').mouseover(function() {
        $(this).addClass('animated tada');
    });
    $('.fcont').mouseout(function() {
        $(this).removeClass('animated tada');
    });







    //底部栏目关闭
    $('#close').click(function() {
        $('.footer').animate({
            height: 'hide'
        });
        // $('.footer').hide(500);
    });
    // //底部二维码动画
    // $('#footerLogo1').mouseover(function() {
    //     $('#footerEwm1').animate({
    //         top: '-130px',
    //         width: '115px',
    //         height: '115px',
    //         left: '225px'
    //     });
    // });
    //
    // $('#footerLogo1').mouseout(function() {
    //     $('#footerEwm1').animate({
    //         top: '0',
    //         width: '0',
    //         height: '0',
    //         left: '245px'
    //     });
    // });
    //
    // $('#footerLogo2').mouseover(function() {
    //     $('#footerEwm2').animate({
    //         top: '-130px',
    //         width: '115px',
    //         height: '115px',
    //         left: '430px'
    //     });
    // });
    //
    // $('#footerLogo2').mouseout(function() {
    //     $('#footerEwm2').animate({
    //         top: '0',
    //         width: '0',
    //         height: '0',
    //         left: '450px'
    //     });
    // });
    //
    //
    //
    // $('.footer .downloadbtn p').mouseover(function() {
    //     $('#footerEwm1').animate({
    //         top: '-130px',
    //         width: '115px',
    //         height: '115px',
    //         left: '225px'
    //     });
    //     $('#footerEwm2').animate({
    //         top: '-130px',
    //         width: '115px',
    //         height: '115px',
    //         left: '430px'
    //     });
    // });
    //
    //   $('.footer .downloadbtn p').mouseout(function(){
    //     $('#footerEwm1').animate({
    //         top: '0',
    //         width: '0',
    //         height: '0',
    //         left: '245px'
    //     });
    //     $('#footerEwm2').animate({
    //         top: '0',
    //         width: '0',
    //         height: '0',
    //         left: '450px'
    //     });
    //   });


    // 商户实例轮播

    // var p = 1;
    // offset = 2.8;
    // var isMoving = false; //同步click方法
    // $('.next').click(function() {
    //
    //     if (isMoving == true) return false;
    //     if(p>=6){
    //       p=p%6;
    //     }
    //
    //     offset = 2.8+(p)*(2.8*2+10.665);
    //     str = new String(offset + '\%');
    //     isMoving = true;
    //     $('.libox').animate({
    //         'left': str,
    //         'opacity': 0.01,
    //         'border-width': '0.5px'
    //     }).animate({
    //         'opacity': 1,
    //         'border-width': '1px'
    //     });
    //     p++;
    //     isMoving = false;
    //
    //     switch (p) {
    //         case 1:
    //             $('.photo img').attr('src', 'img/example/fzpfb.png');
    //             $('.detail h2').text("我是服装批发");
    //             $('.detail .detailp').text("我是做服装批发的，颜色、尺码多，商品管理、库存管理难度大。每天业务单据非常多，对销售员的记忆也是一个考验。秦丝真的帮了我大忙， 销售员只要用它来开单， 库存就可以同步， 相应的财务报表立马生成， 节省了员工很多时间， 也方便我和他们对账, 降低缺货率， 提高营收 ");
    //
    //             break;
    //         case 2:
    //         $('.photo img').attr('src', 'img/example/scb.png');
    //         $('.detail h2').text("我是商超百货");
    //         $('.detail .detailp').text("以前用的收银系统很占地方，反应速度又慢，而且自带的软件又很不好用，后台管理很差，秦丝的一体机真的超适合我，扫码开单扫码支付，快速结账.");
    //         break;
    //         case 3:
    //             $('.photo img').attr('src', 'img/example/sjsmb.png');
    //             $('.detail h2').text("我是手机数码");
    //             $('.detail .detailp').text("我是做手机的，不同于一般商品，手机每台机子都有自己的序列号，生意通的商品管理里面有我需要的这个功能，能够记录下来我每一台手机卖到了哪个客户手上。可以为用户提供更好的售后服务。");
    //             $('.detail #img1 img').attr('src','img/footer-syt.png');
    //             break;
    //         case 4:
    //             $('.photo img').attr('src', 'img/example/wsb.png');
    //             $('.detail h2').text("我是微商");
    //             $('.detail .detailp').text("我是全国总代，下面有着很多级别的代理，每一级代理对应着不同的代理价，发货的经常弄错价格。秦丝的客户分类管理非常适合我的业务，而且快递单批量打印也解放了我的双手！");
    //             break;
    //         case 5:
    //             $('.photo img').attr('src', 'img/example/kxpb.png');
    //             $('.detail h2').text("我是快消品批发");
    //             $('.detail .detailp').text("以前都是业务员出去跑业务，拿着单子回来发货，也容易错弄乱，现在业务员拿着一体机出去，在客户店里就把单给开了，信息及时汇总到后台，有时候当天就能完成发货，业绩汇总也一清二楚。");
    //             $('.detail #img5').show();
    //             break;
    //         case 6:
    //             $('.photo img').attr('src', 'img/example/lsb.png');
    //             $('.detail h2').text("我是服装零售");
    //             $('.detail .detailp').text("我的店铺在商场里，以前的单子都是手写的，显得很没有档次。而且旺季的时候来买衣服的客人多，手写开单再按计算器，速度跟不上，用了秦丝之后，扫码开单自动结算，非常便捷。而且通过计客宝我可以得出我店铺的实时客流量，转化率，客单价等手写开单得不到的数据，让我可以精准的调整业务。");
    //             $('.detail #img1 img').attr('src','img/footer-jxc.png');
    //             break;
    //         default:
    //
    //     }
    //
    // });
    //
    // $('.prev').click(function() {
    //
    //     if (isMoving == true) return false;
    //     if (p <= 1){
    //       p=6;
    //
    //     }
    //     offset=(2.8 * 2 + 10.6665)*(p-1)+2.8;
    //     str = new String(offset + '\%');
    //     isMoving = true;
    //     $('.libox').animate({
    //         left: str,
    //         opacity: 0.2
    //     }).animate({
    //         opacity: 1
    //     });
    //     p--;
    //     isMoving = false;
    //
    //     switch (p) {
    //         case 1:
    //             $('.photo img').attr('src', 'img/example/fzpfb.png');
    //             $('.detail h2').text("我是服装批发");
    //             $('.detail .detailp').text("我是做服装批发的，颜色、尺码多，商品管理、库存管理难度大。每天业务单据非常多，对销售员的记忆也是一个考验。秦丝真的帮了我大忙， 销售员只要用它来开单， 库存就可以同步， 相应的财务报表立马生成， 节省了员工很多时间， 也方便我和他们对账, 降低缺货率， 提高营收");
    //             break;
    //         case 2:
    //         $('.photo img').attr('src', 'img/example/scb.png');
    //         $('.detail h2').text("我是商超百货");
    //         $('.detail .detailp').text("以前用的收银系统很占地方，反应速度又慢，而且自带的软件又很不好用，后台管理很差，秦丝的一体机真的超适合我，扫码开单扫码支付，快速结账.")
    //             break;
    //         case 3:
    //             $('.photo img').attr('src', 'img/example/sjsmb.png');
    //             $('.detail h2').text("我是手机数码");
    //             $('.detail .detailp').text("我是做手机的，不同于一般商品，手机每台机子都有自己的序列号，生意通的商品管理里面有我需要的这个功能，能够记录下来我每一台手机卖到了哪个客户手上。可以为用户提供更好的售后服务。");
    //             break;
    //         case 4:
    //             $('.photo img').attr('src', 'img/example/wsb.png');
    //             $('.detail h2').text("我是微商");
    //             $('.detail .detailp').text("我是全国总代，下面有着很多级别的代理，每一级代理对应着不同的代理价，发货的经常弄错价格。秦丝的客户分类管理非常适合我的业务，而且快递单批量打印也解放了我的双手！");
    //             $('.detail #img5').hide();
    //             break;
    //         case 5:
    //             $('.photo img').attr('src', 'img/example/kxpb.png');
    //             $('.detail h2').text("我是快消品批发");
    //             $('.detail .detailp').text("以前都是业务员出去跑业务，拿着单子回来发货，也容易错弄乱，现在业务员拿着一体机出去，在客户店里就把单给开了，信息及时汇总到后台，有时候当天就能完成发货，业绩汇总也一清二楚。");
    //                         $('.detail #img1 img').attr('src','img/footer-syt.png');
    //             break;
    //         case 6:
    //             $('.photo img').attr('src', 'img/example/lsb.png');
    //             $('.detail h2').text("我是服装零售");
    //             $('.detail .detailp').text("我的店铺在商场里，以前的单子都是手写的，显得很没有档次。而且旺季的时候来买衣服的客人多，手写开单再按计算器，速度跟不上，用了秦丝之后，扫码开单自动结算，非常便捷。而且通过计客宝我可以得出我店铺的实时客流量，转化率，客单价等手写开单得不到的数据，让我可以精准的调整业务。");
    //
    //             break;
    //
    //         default:
    //
    //     }
    //
    // });
    //
    //
    // $('#wrap li').click(function(){
    //      p=  $(this).index();
    //     alert(p);
    //     if (isMoving == true) return false;
    //     offset = 2.8+(p-1)*(2.8*2+10.665);
    //     str = new String(offset + '\%');
    //     isMoving = true;
    //     $('.libox').animate({
    //         left: str,
    //         opacity: 0.2
    //     }).animate({
    //         opacity: 1
    //     });
    //     isMoving = false;
    //
    //
    //
    //       switch (p) {
    //           case 1:
    //
    //               $('.photo img').attr('src', 'img/example/fzpfb.png');
    //               $('.detail h2').text("我是服装批发");
    //               $('.detail .detailp').text("我是做服装批发的，颜色、尺码多，商品管理、库存管理难度大。每天业务单据非常多，对销售员的记忆也是一个考验。秦丝真的帮了我大忙， 销售员只要用它来开单， 库存就可以同步， 相应的财务报表立马生成， 节省了员工很多时间， 也方便我和他们对账, 降低缺货率， 提高营收");
    //               $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
    //               $('.detail #img5').hide();
    //               break;
    //           case 2:
    //               $('.photo img').attr('src', 'img/example/scb.png');
    //               $('.detail h2').text("我是商超百货");
    //               $('.detail .detailp').text("以前用的收银系统很占地方，反应速度又慢，而且自带的软件又很不好用，后台管理很差，秦丝的一体机真的超适合我，扫码开单扫码支付，快速结账.")
    //               $('.detail #img1 img').attr('src', 'img/footer-syt.png');
    //               $('.detail #img5').hide();
    //               break;
    //           case 3:
    //               $('.photo img').attr('src', 'img/example/sjsmb.png');
    //               $('.detail h2').text("我是手机数码");
    //               $('.detail .detailp').text("我是做手机的，不同于一般商品，手机每台机子都有自己的序列号，生意通的商品管理里面有我需要的这个功能，能够记录下来我每一台手机卖到了哪个客户手上。可以为用户提供更好的售后服务。");
    //               $('.detail #img1 img').attr('src', 'img/footer-syt.png');
    //               $('.detail #img5').hide();
    //               break;
    //
    //           case 4:
    //               $('.photo img').attr('src', 'img/example/wsb.png');
    //               $('.detail h2').text("我是微商");
    //               $('.detail .detailp').text("我是全国总代，下面有着很多级别的代理，每一级代理对应着不同的代理价，发货的经常弄错价格。秦丝的客户分类管理非常适合我的业务，而且快递单批量打印也解放了我的双手！");
    //               $('.detail #img1 img').attr('src', 'img/footer-syt.png');
    //               $('.detail #img5').hide();
    //               break;
    //           case 5:
    //               $('.photo img').attr('src', 'img/example/kxpb.png');
    //               $('.detail h2').text("我是快消品批发");
    //               $('.detail .detailp').text("以前都是业务员出去跑业务，拿着单子回来发货，也容易错弄乱，现在业务员拿着一体机出去，在客户店里就把单给开了，信息及时汇总到后台，有时候当天就能完成发货，业绩汇总也一清二楚。");
    //               $('.detail #img1 img').attr('src', 'img/footer-syt.png');
    //               $('.detail #img5').show();
    //               break;
    //           case 6:
    //               $('.photo img').attr('src', 'img/example/lsb.png');
    //               $('.detail h2').text("我是服装零售");
    //               $('.detail .detailp').text("我的店铺在商场里，以前的单子都是手写的，显得很没有档次。而且旺季的时候来买衣服的客人多，手写开单再按计算器，速度跟不上，用了秦丝之后，扫码开单自动结算，非常便捷。而且通过计客宝我可以得出我店铺的实时客流量，转化率，客单价等手写开单得不到的数据，让我可以精准的调整业务。");
    //               $('.detail #img1 img').attr('src', 'img/footer-jxc.png');
    //               $('.detail #img5').show();
    //               break;
    //           default:
    //
    //       }
    // });
    //




});
