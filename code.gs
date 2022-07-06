function doGet(e) {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .setTitle("Consultar notas de Matemática - Prof. Matheus Jonatha")
  .addMetaTag('viewport', 'width=device-width,initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/* PROCESS FORM */
function processForm(formObject){  
  var concat = formObject.searchtext+formObject.searchtext2;
  var result = "";
  if(concat){//Execute if form passes search text
      result = search(concat);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = '1mysxEznvooatDHyvUWbAKWEsDvybavyYN2cq4JQnhm4'; //** CHANGE !!!
  // var sheetName = 'Data!A2:W';
  var dataRage  = 'Data!A2:W';                                    //** CHANGE !!!
  // var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  // var data = range.getDisplayValues();
  var ar = [];
  
  data.forEach(function(f) {
    if (~f[4].indexOf(searchtext)) {
      ar.push([f[0],f[1],f[5],f[10],f[11],f[12],f[13]]);
    }
  });
  return ar;
};