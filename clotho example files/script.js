$(document).ready(function(){
    var html = $('<div>Hello, you&#39;re awesome!</div>');
    $("body").append(html);
    obj = {"name":"MyNewPart", "sequence":"GGGGGG"};
    var jsonObj = JSON.parse(obj);
    var newhtml = '<div>'+jsonObj.name+'</div>';
    $("body").append(newhtml);
    //Clotho.create(jsonObj);
});
