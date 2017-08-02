/**
 * Created by peter joseph on 7/20/2017.
 */

function onHide(){
    document.getElementById("list").style.visibility="hidden";
}

function onShow(){
    document.getElementById("list").style.visibility="visible";
}


function onBtnClick(){
    var ele= document.getElementsByTagName('li');
    var listLen= ele.length;
    for(i=0;i<listLen;i++)
    {
      ele[i].style.fontSize = "22px";
        ele[i].style.color = "red";
    }
}
