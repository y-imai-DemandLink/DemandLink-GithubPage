// 背景変更
function changePage(pageName){
    switch(pageName){
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
        console.log("time")
        $('body').css('background-image', 'url(../DemandLink-gitpages/common/img/back-ground-'+ pageName + '.jpg)');
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



