$(document).ready(function () {
    //이차배열 패턴 = ["이미지파일", "타이틀", "context", "가격정보", "업데이트날자", "좋아요 횟수"]
    var $pd_arr = [
        ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"],
        ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20190202", "57"],
        ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "190000", "20171002", "13"],
        ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "50000", "20200105", "52"],
        ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20200802", "83"],
        ["img6.jpg", "침실 인테리어 5", "합리주의 실용 인테리어 5", "20000", "20160802", "24"],
        ["img7.jpg", "서재 인테리어 8", "아르데코 실용 인테리어 8", "80000", "20100824", "34"],
        ["img8.jpg", "욕실 인테리어 5", "합리주의 실용 인테리어 5", "40000", "20110801", "42"],
        ["img9.jpg", "거실 인테리어 2", "합리주의 실용 인테리어 2", "56000", "20100430", "11"]
    ];
    var $pd_box = `
    <div class="pd_box">
        <div class="pd_photo">
            <img src="img/img1.jpg" alt="">
        </div>
        <div class="pd_info">
            <h3 class="pd_title">title</h3>
            <p class="pd_text">Context</p>
            <div class="pd_etc">
                <span class="pd_price">가격정보</span>
                <span class="pd_date">업데이트 날짜</span>
            </div>
            <p class="fav">좋아요&nbsp;<span>100</span></p>
        </div>
    </div>
    `;

    var $btn_index;

    for (i = 0; i < $pd_arr.length; i++) {
        $(".pd_frame").append($pd_box);
    };

    function pd_sort() {
        $(".pd_box").each(function (index) {
            $(this).find(".pd_photo img").attr("src", "img/" + $pd_arr[index][0]);
            $(this).find(".pd_title").text($pd_arr[index][1]);
            $(this).find(".pd_text").text($pd_arr[index][2]);
            $(this).find(".pd_price").text($pd_arr[index][3]);
            $(this).find(".pd_date").text($pd_arr[index][4]);
            $(this).find(".fav span").text($pd_arr[index][5]);
        });
        $(".sort_button button").removeClass("active");
        $(".sort_button button").eq($btn_index).addClass("active");

        $(".sort_button button").prop("selected", false);
        $(".sort_sel option").eq($btn_index+1).prop("selected", true);

    }
    pd_sort(); // 브라우저가 로딩되면서 함수문을 호출(sort가 적용되지 않은 상태)

    // 최신순 버튼을 클릭했을때
    $(".date_sort").click(function () {
        // sort() 메서드 : 순차적으로 나열시키는 메서드. 오름차순으로 나열(기본)
        $pd_arr.sort(function (a, b) {
            return a[4] - b[4]; //숫자가 작은 순으로 차례대로 정렬   [a[index_num] - b[index_num]];         *4 = 가격순 인덱스 번호..
            return b[4] - a[4]; //숫자가 큰 순으로 차례대로 정렬     [b[index_num] - a[index_num]];         *4 = 가격순 인덱스 번호..
            /*
                0: (6) ["img9.jpg", "거실 인테리어 2", "합리주의 실용 인테리어 2", "56000", "20100430", "11"]
                1: (6) ["img7.jpg", "서재 인테리어 8", "아르데코 실용 인테리어 8", "80000", "20100824", "34"]
                2: (6) ["img8.jpg", "욕실 인테리어 5", "합리주의 실용 인테리어 5", "40000", "20110801", "42"]
                3: (6) ["img6.jpg", "침실 인테리어 5", "합리주의 실용 인테리어 5", "20000", "20160802", "24"]
                4: (6) ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "190000", "20171002", "13"]
                5: (6) ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20190202", "57"]
                6: (6) ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "50000", "20200105", "52"]
                7: (6) ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"]
                8: (6) ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20200802", "83"]
            */
        });
        console.log($pd_arr); //배열의 순서가 변경된것을 확인
        $pd_arr.reverse(); // reverse() 메서드 : 현재 배열을 역순으로 변경 → 숫자가 큰 순서대로 나옴
        /*
            0: (6) ["img5.jpg", "주방 인테리어 1", "포스트 모더니즘 인테리어 1", "90000", "20200802", "83"]
            1: (6) ["img1.jpg", "거실 인테리어 4", "합리주의 실용 인테리어 4", "30000", "20200802", "23"]
            2: (6) ["img4.jpg", "침실 인테리어 2", "심플 실용 인테리어 2", "50000", "20200105", "52"]
            3: (6) ["img2.jpg", "거실 인테리어 1", "합리주의 실용 인테리어 1", "150000", "20190202", "57"]
            4: (6) ["img3.jpg", "침실 인테리어 8", "모더니즘 실용 인테리어 8", "190000", "20171002", "13"]
            5: (6) ["img6.jpg", "침실 인테리어 5", "합리주의 실용 인테리어 5", "20000", "20160802", "24"]
            6: (6) ["img8.jpg", "욕실 인테리어 5", "합리주의 실용 인테리어 5", "40000", "20110801", "42"]
            7: (6) ["img7.jpg", "서재 인테리어 8", "아르데코 실용 인테리어 8", "80000", "20100824", "34"]
            8: (6) ["img9.jpg", "거실 인테리어 2", "합리주의 실용 인테리어 2", "56000", "20100430", "11"]
        */
        console.log($pd_arr);

        /*
                $(".pd_box").each(function(index){
                    $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
                    $(this).find(".pd_title").text($pd_arr[index][1]);
                    $(this).find(".pd_text").text($pd_arr[index][2]);
                    $(this).find(".pd_price").text($pd_arr[index][3]);
                    $(this).find(".pd_date").text($pd_arr[index][4]);
                    $(this).find(".fav span").text($pd_arr[index][5]);
                });

                    ★★function pd_sort() 로 선언 해두어서  pd_sort(); 로 줄일수 있다
        */
        /*
                $(".sort_button button").removeClass("active");
                $(this).addClass("active");
        */
        $btn_index = $(this).index();
        pd_sort();
    });


    // 낮은가격순 클릭시
    $(".low_sort").click(function () {
        $pd_arr.sort(function (a, b) {
            return a[3] - b[3];
        });
        console.log($pd_arr);
        /*
                $(".pd_box").each(function(index){
                    $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
                    $(this).find(".pd_title").text($pd_arr[index][1]);
                    $(this).find(".pd_text").text($pd_arr[index][2]);
                    $(this).find(".pd_price").text($pd_arr[index][3]);
                    $(this).find(".pd_date").text($pd_arr[index][4]);
                    $(this).find(".fav span").text($pd_arr[index][5]);
                });

                    ★★function pd_sort() 로 선언 해두어서  pd_sort(); 로 줄일수 있다
        */
        /*
                $(".sort_button button").removeClass("active");
                $(this).addClass("active");
        */
        $btn_index = $(this).index();
        pd_sort();
    });

    // 높은가격순 클릭시
    $(".high_sort").click(function () {
        $pd_arr.sort(function (a, b) {
            return b[3] - a[3];
        });
        console.log($pd_arr);
        // $pd_arr.reverse();                [return a[3] - b[3];일 경우는 reverse필요..]
        /*
                $(".pd_box").each(function(index){
                    $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
                    $(this).find(".pd_title").text($pd_arr[index][1]);
                    $(this).find(".pd_text").text($pd_arr[index][2]);
                    $(this).find(".pd_price").text($pd_arr[index][3]);
                    $(this).find(".pd_date").text($pd_arr[index][4]);
                    $(this).find(".fav span").text($pd_arr[index][5]);
                });

                    ★★function pd_sort() 로 선언 해두어서  pd_sort(); 로 줄일수 있다
        */
        /*
                $(".sort_button button").removeClass("active");
                $(this).addClass("active");
        */
        $btn_index = $(this).index();
        pd_sort();
    });


    // 인기순 클릭시
    $(".fav_sort").click(function () {
        $pd_arr.sort(function (a, b) {
            return a[5] - b[5];
        });
        console.log($pd_arr);
        $pd_arr.reverse();
        /*
                $(".pd_box").each(function(index){
                    $(this).find(".pd_photo img").attr("src", "img/"+$pd_arr[index][0]);
                    $(this).find(".pd_title").text($pd_arr[index][1]);
                    $(this).find(".pd_text").text($pd_arr[index][2]);
                    $(this).find(".pd_price").text($pd_arr[index][3]);
                    $(this).find(".pd_date").text($pd_arr[index][4]);
                    $(this).find(".fav span").text($pd_arr[index][5]);
                });

                    ★★function pd_sort() 로 선언 해두어서  pd_sort(); 로 줄일수 있다
        */
        /*
                $(".sort_button button").removeClass("active");
                $(this).addClass("active");
        */
        $btn_index = $(this).index();
        pd_sort();
    });


    // 셀렉트 박스
    $(".sort_sel").change(function () {
        var $sel_val = $(this).val();
        console.log($sel_val);

        if ($sel_val == "date") {
            $pd_arr.sort(function (a, b) {
                return b[4] - a[4];
            });
            
            pd_sort();
            
        } else if ($sel_val == "low") {
            $pd_arr.sort(function (a, b) {
                return a[3] - b[3];
            });
            pd_sort();

        } else if ($sel_val == "high") {
            $pd_arr.sort(function (a, b) {
                return b[3] - a[3];
            });
            pd_sort();

        } else if ($sel_val == "fav") {
            $pd_arr.sort(function (a, b) {
                return b[5] - a[5];
            });
            pd_sort();
  
        }
        $(".sort_button").removeClass("active");
        $(".sort_button[class^='"+$sel_val+"']").addClass("active");

        $(".sort_button button").prop("selected", false);
        $(".sort_sel option").eq($btn_index+1).prop("selected", true);
        
    });



});

