function doGet(e) {
    Logger.log( Utilities.jsonStringify(e) );
    if (!e.parameter.page) {
        return HtmlService.createTemplateFromFile('index').evaluate();
    }  
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function doPost(postdata){

var sh=SpreadsheetApp.openById('1juOUKCyip7z0EBwVFSLriP30whTEBvB_lYJV12ZtEuw');
var time=new Date();

var namae=postdata.parameters.namae.toString();
var gender=postdata.parameters.gender.toString();

sh.appendRow([time,namae,gender]);

  return HtmlService.createTemplateFromFile("result").evaluate();
}

function getScriptUrl() {
    var url = ScriptApp.getService().getUrl();
    return url;
}