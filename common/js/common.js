// 背景変更
function changePage(pageName){
    var stats =  $("#page-stats");
    console.log(stats);

    switch(pageName){
        case "a":
            console.log("temp");

        case "top": // top背景
            setValue(pageName);
            shutterFade(pageName);
        break;

        case "appli": // アプリ一覧背景
            setValue(pageName);
            shutterFade(pageName);
        break;

        case "Inquiry": // 問い合わせ背景
            setValue(pageName);
            shutterFade(pageName);
        break;

        case "help": // ヘルプ背景
            setValue(pageName);
            shutterFade(pageName);
        break;

        default: // それ以外の処理
            return false;
    }
}

function setValue(e){
    console.log("setvalue");
}

// page切り替え
function shutterFade(pageName) {
    $('#shutter').removeClass('opne-shutter');
    $('#shutter').addClass('close-shutter');
    setTimeout(function(){
        $('body').css('background-image', 'url(../DemandLink-githubpage/common/img/back-ground-'+ pageName + '.jpg)');
        $('#darkening').addClass('darkening');
    },2000);

    setTimeout(function(){
        $('#darkening').removeClass('darkening');
        $('#shutter').removeClass('close-shutter');
        $('#shutter').addClass('opne-shutter');
    },3100);
}

// pageコンテンツの表示変更
function changePageContent(pageName){
    console.log("changePage");
}



