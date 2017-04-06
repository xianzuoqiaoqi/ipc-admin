/**
 * Created by zzq on 2017/3/17.
 */
define(function(){
    var loadCss = function(url){
        var link,head;
        link=document.createElement('link');
        link.rel='stylesheet';
        link.href=url;
        head=document.querySelector('head');
        head.appendChild(link);
    }
    
    return {
        loadCss:loadCss
    }
})