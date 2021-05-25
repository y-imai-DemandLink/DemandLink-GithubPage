// 背景変更
function changePage(pageName){
    var stats =  $("#page-stats").val();

    if (pageName !== stats) {

        switch(pageName){
            case "top": // top背景
                shutterFade(pageName);
                changePageContent(stats, pageName);
                setValue(pageName);
            break;
    
            case "appli": // アプリ一覧背景
                shutterFade(pageName);
                changePageContent(stats, pageName);
                setValue(pageName);
            break;
    
            case "Inquiry": // 問い合わせ背景
                shutterFade(pageName);
                changePageContent(stats, pageName);
                setValue(pageName);
            break;
    
            case "news": // ヘルプ背景
                shutterFade(pageName);
                changePageContent(stats, pageName);
                setValue(pageName);
            break;
    
            default: // それ以外の処理
                return false;
        }
    }
}

// pageステータスの値変更
function setValue(e){
    $("#page-stats").val(e);
}

// 背景切り替えシャッター切り替え
function shutterFade(pageName) {
    $('#shutter').removeClass('opne-shutter');
    $('#shutter').addClass('close-shutter');
    setTimeout(function(){
        $('body').css('background-image', 'url(../DemandLink-GithubPages/common/img/back-ground-'+ pageName + '.jpg)');
        $('#darkening').addClass('darkening');
    },2000);

    setTimeout(function(){
        $('#darkening').removeClass('darkening');
        $('#shutter').removeClass('close-shutter');
        $('#shutter').addClass('opne-shutter');
    },3100);
}

// pageコンテンツの表示変更
function changePageContent(stats, pageName){
    setTimeout(function(){
        $("#main-content").children("." + stats).addClass("none");
        console.log(pageName);
        $("#main-content").children("." + pageName).removeClass("none")
    },2000);
}

// mail送信
// $('form').submit( mailSubmit() );

// function mailSubmit() {
//     console.log("メール");
//     return false;
//         $.ajax({
//         url : "ajax.php",
//         type : "POST",
//         data : {post_data_1:"hoge", post_data_2:"piyo"}
//     }).done(function(response, textStatus, xhr) {
//         console.log("ajax通信に成功しました");
//         console.log(response[0]);
//         console.log(response[1]);
//     }).fail(function(xhr, textStatus, errorThrown) {
//         console.log("ajax通信に失敗しました");
//     });
//     return false;
// }

// mail送信
$(function () {
    $('#button').click(function () {
  
        // 一括してフォームデータを取得
        var formData = $('#inquiryMail').serialize();
        console.log("mail");
        console.log(formData);

        $.ajax({
            url: "./common/php/index.php",  //POST送信を行うファイル名を指定
            type: "POST",
            data: formData  //POST送信するデータを指定（{ 'hoge': 'hoge' }のように連想配列で直接書いてもOK）
        });
    });
});




