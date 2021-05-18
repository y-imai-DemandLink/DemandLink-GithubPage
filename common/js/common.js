// 背景変更
function changePage(e){
    switch(e){
        case "top": // top背景
            $('body').css('background-image', 'url(../DemandLink-gitpages/common/img/back-ground-top.jpg)');
            setValue(e);
        break;

        case "appli": // アプリ一覧背景
            $('body').css('background-image', 'url(../DemandLink-gitpages/common/img/back-ground-appli.jpg)');
            setValue(e);
        break;

        case "Inquiry": // 問い合わせ背景
            $('body').css('background-image', 'url(../DemandLink-gitpages/common/img/back-ground-inquiry.jpg)');
            setValue(e);
        break;

        case "help": // ヘルプ背景
            $('body').css('background-image', 'url(../DemandLink-gitpages/common/img/back-ground-help.jpg)');
            setValue(e);
        break;
    }
}

function setValue(e){
    console.log("setvalue");
    console.log(e);

}


function fade() {
    var target = document.getElementById("fadeLayer");
    target.style.visibility = "visible";
  }



function changeBoxColor( newColor ) {
    document.getElementById('sakurabox').style.backgroundColor = newColor;
}


const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT*2);