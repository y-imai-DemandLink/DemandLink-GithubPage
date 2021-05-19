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
    
            case "help": // ヘルプ背景
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
        $("#main-content").children("." + stats).css("display","none");
        $("#main-content").children("." + pageName).removeClass("none")
    },2000);
}



