!(function (win, doc) {
    /**初始化Hammer对象和参数
     * [pic description]
     * @type {[type]}
     */
    function setRem() {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 640 ? 100 : document.documentElement.clientWidth * 100 / 640) + 'px';
        var canvasImg = document.getElementById("canvas");
        canvasImg.style.height = (document.documentElement.clientHeight) + "px";
        canvasImg.style.width = (document.documentElement.clientHeight) * 0.69 + "px";
    }

    var pinchingInterval = 60;
    var lastPinchTime = 0;
    var currentIndex = 0;
    var folderName = 1;
    var picSeries = 1;
    var imgSrcArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg', '52.jpg', '53.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg', '58.jpg', '59.jpg', '60.jpg',
        '61.jpg', '62.jpg', '63.jpg', '64.jpg', '65.jpg', '66.jpg', '67.jpg'];

    var imgSrcArr2 = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg', '52.jpg', '53.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg', '58.jpg', '59.jpg', '60.jpg'];

    var imgSrcArr3 = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg', '52.jpg', '53.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg', '58.jpg', '59.jpg', '60.jpg'];

    var imgSrcArr4 = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg', '52.jpg', '53.jpg', '54.jpg', '55.jpg', '56.jpg', '57.jpg', '58.jpg', '59.jpg', '60.jpg', '61.jpg'];

    var imgSrcArr5 = ['01.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg', '52.jpg'];

    var imgSrcArr6 = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
        '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
        '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
        '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
        '51.jpg'];
    var size = imgSrcArr.length - 1;
    var imgArr = new Array(imgSrcArr.length);
    var imgArr2 = new Array(imgSrcArr2.length);
    var imgArr3 = new Array(imgSrcArr3.length);
    var imgArr4 = new Array(imgSrcArr4.length);
    var imgArr5 = new Array(imgSrcArr5.length);
    var imgArr6 = new Array(imgSrcArr6.length);
    var curImg = imgSrcArr;
    var imgLoaded1 = false;
    var imgLoaded2 = false;
    var imgLoaded3 = false;
    var imgLoaded4 = false;
    var imgLoaded5 = false;
    var imgLoaded6 = false;


    /**
     * 加载图片
     */
    function loadResource() {
        for (var i = 0; i < imgSrcArr.length; i++) {
            imgArr[i] = new Image();
            imgArr[i].src = 'images/' + folderName + '/' + imgSrcArr[i];

        }
        imgLoaded1 = true;
    }

    function loadResource2() {
        var folderName = 2;
        for (var i = 0; i < imgSrcArr2.length; i++) {
            imgArr2[i] = new Image();
            imgArr2[i].src = 'images/' + folderName + '/' + imgSrcArr2[i];
        }
        imgLoaded2 = true;
    }

    function loadResource3() {
        var folderName = 3;
        for (var i = 0; i < imgSrcArr3.length; i++) {
            imgArr3[i] = new Image();
            imgArr3[i].src = 'images/' + folderName + '/' + imgSrcArr3[i];
        }
        imgLoaded3 = true;
    }

    function loadResource4() {
        var folderName = 4;
        for (var i = 0; i < imgSrcArr4.length; i++) {
            imgArr4[i] = new Image();
            imgArr4[i].src = 'images/' + folderName + '/' + imgSrcArr4[i];
        }
        imgLoaded4 = true;
    }

    function loadResource5() {
        var folderName = 5;
        for (var i = 0; i < imgSrcArr5.length; i++) {
            imgArr5[i] = new Image();
            imgArr5[i].src = 'images/' + folderName + '/' + imgSrcArr5[i];
        }
        imgLoaded5 = true;
    }

    function loadResource6() {
        var folderName = 6;
        for (var i = 0; i < imgSrcArr6.length; i++) {
            imgArr6[i] = new Image();
            imgArr6[i].src = 'images/' + folderName + '/' + imgSrcArr6[i];
        }
        imgLoaded6 = true;
    }

    function load() {
        window.onload = function () {
            loadResource();
            loadResource2();
            loadResource3();
            loadResource4();
            loadResource5();
            loadResource6();
            isLoad();
        };
    }

    function isLoad() {
        if (imgLoaded1 && imgLoaded2 && imgLoaded3 && imgLoaded4 && imgLoaded5 && imgLoaded6) {
            $("#loading").css("display", "none");
            $(".bg2").css("display", "block");
            enter();
        } else {
            load();
        }
    }

    function enter() {
        $(".bg2").click(function () {
            $(this).css("display", "none");
            pic.setAttribute("src", "images/1/1.jpg");
//                if (picSeries == 1 && currentIndex == 0) {
//                    outInterval();
//                }
        })
    }

    function getTime() {
        return new Date().getTime();
    }

    function outInterval() {
        $(".show-out").css("display", "block");
        function changeOut() {
            $(".out-left").animate({
                left: '41%',
                top: '57%'
            }, 100).animate({
                left: '43%',
                top: '55%'
            }, 50);
            $(".out-right").animate({
                left: '62%',
                top: '44%'
            }, 100).animate({
                left: '60%',
                top: '46%'
            }, 50);
        }

        var outTime = window.setInterval(changeOut, 1000);

    }

    function inInterval() {
        $(".show-in").css("display", "block");
        $(".out-left").animate({
            left: '-1%',
            top: '-1%'
        }, 600)
    }

    function pinchHandler(increase) {
        $(".show-out").css("display", "none");
//           clearInterval(outTime);
        $(".show-in").css("display", "none");
        size = curImg.length - 1;
        var pinchTime = getTime();
        var pinchElapsed = pinchTime - lastPinchTime;  //每次手指动的间隔时间
        if (pinchElapsed <= pinchingInterval) return;
        lastPinchTime = pinchTime;
        if (increase) {
//                alert(currentIndex);
            if (picSeries == 1 || picSeries == 3 || picSeries == 5) {
                currentIndex++;
                if (currentIndex > size) {
                    currentIndex = 0;
                    picSeries++;
                }
            } else {
                currentIndex--;
                if (currentIndex < 0) currentIndex = 0;
            }

        }
        else {
            if (picSeries == 1 || picSeries == 3 || picSeries == 5) {
                currentIndex--;
                if (currentIndex < 0) currentIndex = 0;
            } else {
                currentIndex++;
                if (currentIndex > size) {
                    if (picSeries == 6) {
                        currentIndex = size;

                    } else {
                        currentIndex = 0;
                        picSeries++;
                    }
                }
            }
        }
        switch (picSeries) {
            case 1:
                curImg = imgSrcArr;
                break;
            case 2:
                curImg = imgSrcArr2;
                break;
            case 3:
                curImg = imgSrcArr3;
                break;
            case 4:
                curImg = imgSrcArr4;
                break;
            case 5:
                curImg = imgSrcArr5;
                break;
            case 6:
                curImg = imgSrcArr6;
                break;
        }
        pic.src = 'images/' + picSeries + '/' + curImg[currentIndex];
    }

    document.ontouchmove = function (e) {
        e.preventDefault();
    }

    /**
     * 函数执行
     */
    setRem();
    isLoad();
    var pic = doc.getElementById("canvas"),
    //实例化hammer添加容器方法
        mc = new Hammer.Manager(pic),
    //旋转，拖动，伸缩方法
        pinch = new Hammer.Pinch();
    mc.add([pinch]);
    mc.on("pinchout", function () {
        pinchHandler(true);
    });
    mc.on("pinchin", function () {
        pinchHandler(false);
    });
})(window, document)

