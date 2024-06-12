
function mySpreadsheet2(){
  //0AkXL2ByPjrZ3dHQ0R1hwSkdFbjc5RkgyYVJhNXItT2c
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  Logger.log(ss.getNumSheets() + ' sheets');
  Logger.log('Viewers: ' + ss.getViewers());
  //SpreadsheetApp.setActiveSpreadsheet(ss);
  //SpreadsheetApp.setActiveSheet(ss.getSheets()[1]);
  var sheet = ss.getActiveSheet();
  Logger.log('Sheet Name: ' + sheet.getName());
  //range = sheet.getRange("d3:q44");
  
  var cell = ss.getActiveCell();
  Logger.log("Active cell : "+cell.getA1Notation());
  
  range = sheet.getRange(cell.getRow(),4,1,14);
  Logger.log(range.getA1Notation()+' selected');
  
  var values = range.getValues();
  var cols = range.getNumColumns(); 
  var rows = range.getNumRows();
  Logger.log('Randuri = '+ rows +',  Coloane = ' + cols);
  Logger.log("Values = "+values);

  var i;
  for (i=0;i<rows;i++) {
    var i1=i;
    var j;
    for (j=0;j<cols;j++) {
      var ok=0;
      var j1=j;
      var k2;
      var st = values[i][j];
      var ast = st.split("//");
      if(values[i][j]!="") {
        //Logger.log('('+i+','+j+');');
        for (var ii=0;ii<ast.length;ii++)
{
        var k;
        for (k=0;k<cols;k++) {
          
          if ((k==j) && (ast.length==1)){
            Logger.log("ast.length = "+ast.length+" ast = "+ast);
            continue;
          } 
          
          var k1=k;k2=k1;
          var stt = values[i][k];
          var astt = stt.split("//");
          if (stt!="") {
            for (var kk=0;kk<astt.length;kk++) 
  {
            // comparam daca st ~~~ stt
            if(similare(ast[ii],astt[kk])==true) 
            {
              range.getCell(i1+1,j1+1).setBackground("yellow");
              range.getCell(i1+1,k1+1).setBackground("yellow");
              k2=k1;
              ok=1;
            }
  }
          }
        }
}
      }
      if(ok==0) {
        range.getCell(i1+1,j1+1).setBackground("white");
        //range.getCell(i1+1,k2+1).setBackground("blue");
      }
    }
  }
 }

function mySpreadsheet2016(){
  //0AkXL2ByPjrZ3dHQ0R1hwSkdFbjc5RkgyYVJhNXItT2c
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Logger.log('Lucram in foaia : '+ss.getName());
  // Logger.log(ss.getNumSheets() + ' sheets');

  //Logger.log('Viewers: ' + ss.getViewers());
  //SpreadsheetApp.setActiveSpreadsheet(ss);
  //SpreadsheetApp.setActiveSheet(ss.getSheets()[1]);
  //var sheet = ss.getActiveSheet();
  var sheet = ss.getSheetByName("Collision");

  // Logger.log('Sheet Name: ' + sheet.getName());
  //range = sheet.getRange("d3:q44");
  
  var cell = ss.getActiveCell();
  // Logger.log("Active cell : "+cell.getA1Notation());
  
  var NumarColoane = 20;
  range = sheet.getRange(cell.getRow(),4,1,NumarColoane);
  // Logger.log(range.getA1Notation()+' selected. getRow() = ' + cell.getRow() + ' si getColumn() = ' + cell.getColumn());
  
  var values = range.getValues();
  var cols = range.getNumColumns(); 
  var rows = range.getNumRows();
  // Logger.log('Randuri = '+ rows +',  Coloane = ' + cols);
  // Logger.log("Values = "+values);
  
  var cc = cell.getValue();
  var acc = cc.toString().split("//");
  Logger.log("cc = "+cc+", acc = "+acc+", acc.length = "+acc.length);
  
  var k1=0;
    for (var i=0;i<rows;i++) {
      var ok=0;
      for (var j=0;j<cols;j++) {
        if (values[i][j]=="") continue;
        var sa = values[i][j].toString().split("//");
        for (var ii=0;ii<sa.length;ii++) {
          for (var k=0; k<cols; k++) {
            if (values[i][k]=="") continue;
            if (j==k) continue;
            var sb = values[i][k].toString().split("//");
            for (var jj=0;jj<sb.length;jj++) {
              if (similare(sa[ii],sb[jj])) {
                range.getCell(i+1,j+1).setBackground("yellow");
                range.getCell(i+1,k+1).setBackground("yellow");
                ok=1;k1=k;
              }
            }
          }
        }
      if (ok==0) {
        cell.setBackground("white");
        range.getCell(i+1,k1+1).setBackground("white");
        range.getCell(i+1,j+1).setBackground("white");
      }
    }
  }
  var k2=0;
    for (var i=0;i<rows;i++) {
      var ok2=0;
      for (var j=0;j<cols;j++) {
        if (values[i][j]=="") continue;
        var sa = values[i][j].toString().split("//");
        for (var ii=0;ii<sa.length;ii++) {
          for (var k=0; k<cols; k++) {
            if (values[i][k]=="") continue;
            if (j==k) continue;
            var sb = values[i][k].toString().split("//");
            for (var jj=0;jj<sb.length;jj++) {
              if (sim_profi(sa[ii],sb[jj])) {
                range.getCell(i+1,j+1).setBorder(true, true, true, true, null, null, '#ff0000', SpreadsheetApp.BorderStyle.DOUBLE);
                range.getCell(i+1,k+1).setBorder(true, true, true, true, null, null, '#ff0000', SpreadsheetApp.BorderStyle.DOUBLE);
                ok2=1;k2=k;
              }
            }
          }
        }
      if (ok2==0) {
        cell.setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);
        range.getCell(i+1,k2+1).setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);
        range.getCell(i+1,j+1).setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);
      }

    }
  }
} // mySpreadsheet2016

function mySpreadsheetProfi(){
  //0AkXL2ByPjrZ3dHQ0R1hwSkdFbjc5RkgyYVJhNXItT2c
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Logger.log('Lucram in foaia : '+ss.getName());
  // Logger.log(ss.getNumSheets() + ' sheets');

  //Logger.log('Viewers: ' + ss.getViewers());
  //SpreadsheetApp.setActiveSpreadsheet(ss);
  //SpreadsheetApp.setActiveSheet(ss.getSheets()[1]);
  //var sheet = ss.getActiveSheet();
  var sheet = ss.getSheetByName("Collision");

  // Logger.log('Sheet Name: ' + sheet.getName());
  //range = sheet.getRange("d3:q44");
  
  var cell = ss.getActiveCell();
  // Logger.log("Active cell : "+cell.getA1Notation());
  
  var NumarColoane = 20
  range = sheet.getRange(cell.getRow(),4,1,NumarColoane);
  // Logger.log(range.getA1Notation()+' selected. getRow() = ' + cell.getRow() + ' si getColumn() = ' + cell.getColumn());
  
  var values = range.getValues();
  var cols = range.getNumColumns(); 
  var rows = range.getNumRows();
  // Logger.log('Randuri = '+ rows +',  Coloane = ' + cols);
  // Logger.log("Values = "+values);
  
  var cc = cell.getValue();
  var acc = cc.toString().split("//");
  Logger.log("cc = "+cc+", acc = "+acc+", acc.length = "+acc.length);
  
  var k1=0;
    for (var i=0;i<rows;i++) {
      var ok=0;
      for (var j=0;j<cols;j++) {
        if (values[i][j]=="") continue;
        var sa = values[i][j].toString().split("//");
        for (var ii=0;ii<sa.length;ii++) {
          for (var k=0; k<cols; k++) {
            if (values[i][k]=="") continue;
            if (j==k) continue;
            var sb = values[i][k].toString().split("//");
            for (var jj=0;jj<sb.length;jj++) {
              if (similare(sa[ii],sb[jj])) {
                range.getCell(i+1,j+1).setBorder(true, true, true, true, null, null, '#ff0000', SpreadsheetApp.BorderStyle.SOLID);
                range.getCell(i+1,k+1).setBorder(true, true, true, true, null, null, '#ff0000', SpreadsheetApp.BorderStyle.SOLID);
//                range.getCell(i+1,j+1).setBackground("yellow");
//                range.getCell(i+1,k+1).setBackground("yellow");
                ok=1;k1=k;
              }
            }
          }
        }
      if (ok==0) {
        cell.setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);
      }
    }
  }
} // mySpreadsheetProfi

function mySpreadsheet8ore(){
  //0AkXL2ByPjrZ3dHQ0R1hwSkdFbjc5RkgyYVJhNXItT2c

  /*
    Cand editam o celula in Collision, punem:
    a. titlul disciplinei
    c. tipul activitatii:
      - C
      - L
      - S
    b. specializarea urmata de anul respectiv (info1, cs3, mvmod2)
    b1. daca tipul activitatii nu este C, atunci poate fi urmat de numarul grupei (gr1, gr5, etc) 
        daca sunt mai multe grupe in cadrul specializarii si anului respectiv.
    d. titlul si numele prenumele cadrului didactic
    e. urmat eventual de specificarea: IMPARA, PARA
    f. Daca se tine doar 1 ora din cele doua, atunci in fata se indica intervalul 
        orar separat de restul inregistrarii cu ':' (de ex.: 9-10:, 18-19:). 
    
    Etape de elaborare a programului de verificare a cel muolt 8 ore pe zi pentru grupa respectiva:
    1. Lucram initial cu specializarile care au doar o grupa.
      a. Nu ar trebui sa apara complicatii, caci ori C, ori L sunt la fel tratate.
    2. Lucram apoi cu seriile ce au cel putin 2 grupe:
      a. Diferentele care apar se refera la C sau L. 
        - Pentru L nu ar trebui sa fie diferente de abordare fata de cazul 1 de mai sus.
        - Pentru C ar trebui sa ne indice ce grupa e in pericol de incalcare a regulei de 8 ore pe zi.
    3. Nu mai e cazul in FMI, dar initial era tratat si cazul cu serii diferite la 
        aceeasi specializare si acelasi an.
    
    ALGORITMUL:
    1. Depistam initial carei zile ii corespunde celula editata (practic e facut). Adica 
        determinam in foaia Collision randul de start si randul de final.
    2. Stabilim in tablou de contoare pe grupe.
    3. Verificam in fiecare rand ca si in functia 'mySpreadsheet2016' daca se intalneste
        valoare similara cu ce avem in celula editata.
    4a. Afisam valorile contorului intr-o fereastra cu mesaje la DEBUG.
    4b. Coloram pozitiile grupei afectate in albastru.
  */

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var sheet = ss.getSheetByName("Collision");

  var cell = ss.getActiveCell();

  var x = cell.getRow();
  var y = cell.getColumn();
  x = x - 3;
  var a = x - x%6 + 3;
  var b = x - x%6 + 8;
  rangeZi = sheet.getRange(a,y,6,1);
  Logger.log("a = "+a+", b = "+b+", coloana = "+y);
  var valuesZi = rangeZi.getValues(); 
  var colsZi = rangeZi.getNumColumns(); 
  var rowsZi = rangeZi.getNumRows();
  Logger.log('Randuri = '+ rowsZi +',  Coloane = ' + colsZi);
  Logger.log("ValuesZi = " + valuesZi);
  
  // for (var i=0; i<6; i++) {
  //   Logger.log(""+valuesZi[i][0]+"|| ");
  // }

  // for (var j=0;j<b;j++)
  // var k3=0;
  //   for (var i=0;i<colsZi;i++) { 
  //     var ok3=0;
  //     for (var j=0;j<rowsZi;j++) {
  //       if (valuesZi[j][i]=="") continue;
  //       var sa = valuesZi[j][i].toString().split("//");
  //       for (var ii=0;ii<sa.length;ii++) {
  //         for (var k=a; k<b; k++) {
  //           if (valuesZi[k][i]=="") continue;
  //           if (j==k) continue;
  //           var sb = valuesZi[k][i].toString().split("//");
  //           for (var jj=0;jj<sb.length;jj++) {
  //             if (similare(sa[ii],sb[jj])) {
  //               rangeZi.getCell(j+1,i+1).setFontColor("blue");
  //               rangeZi.getCell(k+1,i+1).setFontColor("blue");
  //               ok=ok+1;k3=k;
  //             }
  //           }
  //         }
  //       }
  //     if (ok3 < 5) {
  //       // cell.setFontColor("blue");
  //       // cell.setBackground("black");
  //       rangeZi.getCell(k1+1,i+1).setFontColor("black");
  //       rangeZi.getCell(j+1,i+1).setFontColor("black");
  //     }
  //   }
  // }

} // mySpreadsheet8ore

function getWeek(s) {
  if (s.indexOf("IMPARA") !=- 1) {
    return 1;
  }
  if (s.indexOf(" PARA") != -1) {
    return 2;
  }
  return 0;
}

function getHour(s) {
  var ora = ["8-9:", "9-10:", "10-11:", "11-12:", "12-13:", "13-14:", "14-15:", "15-16:",
        "16-17:", "17-18:", "18-19:", "19-20:"];
  for (var i = 0; i < ora.length; i++) {
    if (s.indexOf(ora[i]) != -1) {
      return i+1;
    }
  }
  return 0;
}

function similare(st, stt) {
  var specializari = ["info1", "info2", "info3", "mi1", "mi2", "mi3", "mate1", "mate2", "mate3", 
    "mate1+mi1", "mate2+mi2", "mate3+mi3", "m1", "m2", "m3", "m1+mi1", "m2+mi2", "m3+mi3", 
    "cs1", "cs2", "cs3", "mvmod1", "mvmod2", "mti1", "mti2", "mmfae1", "mmfae2", "md1", 
    "md2", "mi1+m1", "mi2+m2", "mi3+m3", "mi1+mate1", "mi2+mate2", "mi3+mate3", "csml1", "csml2", "msa1", "msa2"];
  var serii = ["s1", "s2"];
  var grupe = ["gr1", "gr2", "gr3", "gr4", "gr5", "gr6"];
  var tip = ["C,", "L,", "S,"];
  var saptamana = ["IMPARA", " PARA"];
  var ora = ["8-9:", "9-10:", "10-11:", "11-12:", "12-13:", "13-14:", "14-15:", "15-16:",
        "16-17:", "17-18:", "18-19:", "19-20:"];
  //Logger.log(specializari);
  
  Logger.log("st = "+st+" \n stt = "+stt);
  
  //var st="Grafica pe calculator, info3, s2, C, prof. dr. D.M. Popovici";
  //var stt="Grafica pe calculator, info3, s1, C, prof. dr. D.M. Popovici";
  //var stt="Retele de calculatoare, info3, s2, gr4, L, conf. dr. E. Petac";
  //var st = "IAA, mvmod1, C, lect. dr. A. Rusu";
  //var stt = "Calcul distribuit, mvmod1, L, lect. dr. A. Nicola";
  
  //var st = "IAA, mi1, gr1, L, lect. dr. A. Rusu";
  //var stt = "Calcul distribuit, mi1, gr2, S, conf. dr. A. Nicola";
  
  var ast = st.split(", ");
  var astt = stt.split(", ");
  var cod=0;
  var cod2a=0;
  var cod2b=0;
  //Logger.log(astt+" ::: "+stt);
  ok = 0;
  for (i=0;i<specializari.length;i++) {
    if ((st.indexOf(specializari[i])!=-1)&&(stt.indexOf(specializari[i])!=-1)) // coincid specializarile
    {
      var raspuns=" : coincid specializarile "
      //Logger.log(specializari[i]+raspuns+ok);

      // Verificam ca sunt in sapt. PARA/IMPARA
      var weekA = 0; 
      weekA = getWeek(st); 
      var weekB = 0; 
      weekB = getWeek(stt);
      Logger.log("weekA = " + weekA + ",  //  weekB = " + weekB);
      if ((weekA > 0) && (weekB > 0) && (weekA != weekB)) { 
        return false;
      }

// Verificam ca orele sunt diferite
      var hourA = 0, hourB = 0;
      if ((st.indexOf(":") != -1) && (stt.indexOf(":") != -1)) {
        hourA = getHour(st);
        hourB = getHour(stt);
        if (hourA != hourB) {
          return false;
        }
      }

      for (j=0;j<serii.length;j++) {
        if (st.indexOf(serii[j])!=-1){
          cod2a+=(j+1)*100;
          s2a=(j+1)*100;
        }
        if (stt.indexOf(serii[j])!=-1){
          cod2b+=(j+1)*100;
          s2b=(j+1)*100;
        }
      }
      //Logger.log("cod2a = " + cod2a + " :: cod2b = " + cod2b);
      if (cod2a==cod2b) // sunt aceeasi serie
      {
        // verificam daca sunt aceeasi grupa
        for (j=0;j<grupe.length;j++) {
          if (st.indexOf(grupe[j])!=-1){
            cod2a+=(j+1)*10;
            g2a=(j+1)*10;
          }
        }  
        for (j=0;j<grupe.length;j++) {
          if (stt.indexOf(grupe[j])!=-1){
            cod2b+=(j+1)*10;
            g2b=(j+1)*10;
          }
        }
      //Logger.log("Grupe: cod2a = " + cod2a + " :: cod2b = " + cod2b);
        if (cod2a==cod2b) // sunt aceeasi grupa
        {
          //NOT ok
          ok=1;
          //Logger.log("Not ok !!! : 1");
          return true;
        }
        else
        {
          // verificam daca activitatile nu se subscriu S/L --> C
          if (((st.indexOf(tip[0])!=-1) && (stt.indexOf(tip[0])==-1)) || ((st.indexOf(tip[0])==-1) && (stt.indexOf(tip[0])!=-1)))
          {
            //Yes OK
            //ok=1;
            //Logger.log("Yes OK !!! : 1");
            
            //NOT ok
            ok=1;
            //Logger.log("Not ok !!! : 2");
            return true;
          }
          else
          {
          //Logger.log("Yes OK !!! : 2");
          return false;}
        }
        
      }
      else // nu sunt aceeasi serie
      {
      //Logger.log("Yes OK !!! : 3");
      return false;
      }
      
      
    }
  }
}

function sim_profi(st, stt) {
  //var profi = ["Boskoff W. G.", "Ene V.", "Popovici M. D.", "Costara C.", "Vernic R.-I.", "Flaut E. C.", "Pelican E.", "Petac E.", "Sburlan D.-F.", "Nicola A.", "Puchianu C.-M.", "Denis I.", "Bautu E.", "Serban C.", "Badea M. G.", "Bobe A.", "Ciuca M. G.", "Cirlig G.", "Iorgulescu F. G.", "Rusu A.", "Sburlan C.", "Iordache D.", "Ionescu A. F.", "Vacant", "Vintu I.-V."];
  var profi = ["Iordache", "Ionescu A", "Bautu", "Ibadula", "Denis", "Nicola", "Pelican", "Petac", "Puchianu", "Sburlan D", "Alexandrescu", "Badea M", "Bobe", "Cirlig", "Ciuca", "Iorgulescu", "Chelai", "Rusu", "Sburlan C", "Serban", "Boskoff", "Cosma", "Costara", "Ene", "Flaut", "Popovici", "Vernic", "Cojocaru A", "Tomescu", "Ionita", "Molomer Sibel", "Munteanu", "Rusescu", "Carp D.", "Deacu", "Georgescu", "Visan", "Popescu", "Tataru", "Ionescu V", "Mihailescu", "Racuciu", "Vintu", "drd. Badea Maria-Alexandra", "Cojocaru B", "CornerStone Technologies", "CST", "Istratie", "Rezeanu"];
  var serii = ["s1", "s2"];
  var grupe = ["gr1", "gr2", "gr3", "gr4", "gr5", "gr6"];
  var tip = ["C,", "L,", "S,"];
  var saptamana = ["IMPARA", " PARA"];
  var ora = ["8-9:", "9-10:", "10-11:", "11-12:", "12-13:", "13-14:", "14-15:", "15-16:",
        "16-17:", "17-18:", "18-19:", "19-20:"];
  //Logger.log(specializari);
  
  Logger.log("st = "+st+" \n stt = "+stt);
  
  //var st="Grafica pe calculator, info3, s2, C, prof. dr. D.M. Popovici";
  //var stt="Grafica pe calculator, info3, s1, C, prof. dr. D.M. Popovici";
  //var stt="Retele de calculatoare, info3, s2, gr4, L, conf. dr. E. Petac";
  //var st = "IAA, mvmod1, C, lect. dr. A. Rusu";
  //var stt = "Calcul distribuit, mvmod1, L, lect. dr. A. Nicola";
  
  //var st = "IAA, mi1, gr1, L, lect. dr. A. Rusu";
  //var stt = "Calcul distribuit, mi1, gr2, S, conf. dr. A. Nicola";
  
  var ast = st.split(", ");
  var astt = stt.split(", ");
  var cod=0;
  var cod2a=0;
  var cod2b=0;
  //Logger.log(astt+" ::: "+stt);
  ok = 0;
  for (i=0;i<profi.length;i++) {
    if ((st.indexOf(profi[i])!=-1)&&(stt.indexOf(profi[i])!=-1)) // coincid profii
    {
      var raspuns=" : coincid profii "
      //Logger.log(profi[i]+raspuns+ok);

      // Verificam ca sunt in sapt. PARA/IMPARA
      var weekA = 0; 
      weekA = getWeek(st); 
      var weekB = 0; 
      weekB = getWeek(stt);
      Logger.log("weekA = " + weekA + ",  //  weekB = " + weekB);
      if ((weekA > 0) && (weekB > 0) && (weekA != weekB)) { 
        return false;
      }

      // Verificam ca orele sunt diferite
      var hourA = 0, hourB = 0;
      if ((st.indexOf(":") != -1) && (stt.indexOf(":") != -1)) {
        hourA = getHour(st);
        hourB = getHour(stt);
        if (hourA != hourB) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}


function changeBackgr(){
  var sp = SpreadsheetApp.getActive();
  var sheet = sp.getActiveSheet(); 
  var range = sheet.getRange('d3:s44');
  //Logger.log(range.getBackgrounds());
  
  for (var i=0;i<range.getNumRows();i++){
    Logger.log('Da : '+i);
    for (var j=0;j<range.getNumColumns();j++){
      var cell = range.getCell(i+1,j+1);
      var bg = cell.getBackground();
      
      if ((bg!="#ffffff")&&(bg!="#ffff00")){ 
        Logger.log(bg+' : ');
        //cell.setBackground("white")
      }
    }
  }
}

function para_impara(st, stt) {
    // Contine PARA/IMPARA
    var i_st, istt;
    i_st = index_para_impara(st);
    i_stt = index_para_impara(stt);
    if ((i_st!=0)&&(i_stt!=0))
     { 
      if (i_st==i_stt) {
        return 1; // sunt impara/para simultan - nu se suprapun
      } else {
        return 0; // sunt impara/para diferite - se suprapun
      }
    }
    return 1; // se suprapun
}

function index_para_impara(s) {
  var saptamana = ["IMPARA", " PARA"];
  var index_s = 0;
  if (s.indexOf(saptamana[0])!=-1) {
      index_s = 1;
    } else if (s.indexOf(saptamana[1])!=-1) {
      index_s = 2;
    }
  return index_s; 
}

function similare_test() {
  var specializari = ["info1", "info2", "info3", "mi1", "mi2", "mi3", "mate1", "mate2", "mate3", "mate1+mi1", "mate2+mi2", "mate3+mi3", "m1", "m2", "m3", "m1+mi1", "m2+mi2", "m3+mi3", "cs1", "cs2", "cs3", "mvmod1", "mvmod2", "mti1", "mti2", "mmfae1", "mmfae2", "md1", "md2", "mi1+m1", "mi2+m2", "mi3+m3", "mi1+mate1", "mi2+mate2", "mi3+mate3"];
  var serii = ["s1", "s2"];
  var grupe = ["gr1", "gr2", "gr3", "gr4", "gr5", "gr6"];
  var tip = ["C,", "L,", "S,"];
  var saptamana = ["IMPARA", " PARA"];
  var ore = ["18-19:", "19-20:", "16-17:", "17-18:"];
  //Logger.log(specializari);
  
  //Logger.log("st = "+st+" ; stt = "+stt);
  
  //var st="Grafica pe calculator, info3, s2, C, prof. dr. D.M. Popovici";
  //var stt="Grafica pe calculator, info3, s1, C, prof. dr. D.M. Popovici";
  //var stt="Retele de calculatoare, info3, s2, gr4, L, conf. dr. E. Petac";
  //var st = "IAA, mvmod1, C, lect. dr. A. Rusu";
  //var stt = "Calcul distribuit, mvmod1, L, lect. dr. A. Nicola";
  
  var st = "IAA, mi1, gr2, L, lect. dr. A. Rusu, PARA";
  var stt = "Calcul distribuit, mi1, C, conf. dr. A. Nicola, IMPARA";
  
  //var st = "18-19: Sisteme distribuite, mti2, L, conf.dr. D.Sburlan";
  //var stt = "19-20: Modelare cu algoritmi genetici, mti2, C, lect.dr. A.Rusu";
  
  var ast = st.split(", ");
  var astt = stt.split(", ");
  var cod=0;
  var cod2a=0;
  var cod2b=0;
  Logger.log(ast+" :-: "+st);
  Logger.log(astt+" :=: "+stt);
  ok = 0;
  for (i=0;i<specializari.length;i++) {
    if ((st.indexOf(specializari[i])!=-1)&&(stt.indexOf(specializari[i])!=-1)) // coincid specializarile
    {
      var raspuns=" : coincid specializarile "
      Logger.log(specializari[i]+raspuns+ok);

      for (j=0;j<serii.length;j++) {
        if (st.indexOf(serii[j])!=-1){
          cod2a+=(j+1)*100;
          s2a=(j+1)*100;
        }
        if (stt.indexOf(serii[j])!=-1){
          cod2b+=(j+1)*100;
          s2b=(j+1)*100;
        }
      }
      Logger.log("--- Coincid Spec+Seriile ? ---")
      Logger.log("cod2a = " + cod2a + " :: cod2b = " + cod2b);
      if (cod2a==cod2b) // sunt aceeasi serie
      {
        // verificam daca sunt aceeasi grupa
        for (j=0;j<grupe.length;j++) {
          if (st.indexOf(grupe[j])!=-1){
            cod2a+=(j+1)*10;
            g2a=(j+1)*10;
          }
        }  
        for (j=0;j<grupe.length;j++) {
          if (stt.indexOf(grupe[j])!=-1){
            cod2b+=(j+1)*10;
            g2b=(j+1)*10;
          }
        }
      Logger.log("Grupe: cod2a = " + cod2a + " :: cod2b = " + cod2b);
        if ((cod2a==cod2b)&&(para_impara(st,stt)==1)) // sunt aceeasi grupa
        {
          //NOT ok
          ok=1;
          Logger.log("Not ok !!! : 1");
          return true;
        }
        else
        {
          // verificam daca activitatile nu se subscriu S/L --> C
          if ((((st.indexOf(tip[0])!=-1) && (stt.indexOf(tip[0])==-1)) || ((st.indexOf(tip[0])==-1) && (stt.indexOf(tip[0])!=-1)))&&(para_impara(st,stt)==1))
          {
            //Yes OK
            //ok=1;
            //Logger.log("Yes OK !!! : 1");
            
            //NOT ok
            ok=1;
            Logger.log("Not ok !!! : 2");
            return true;
          }
          else
          {
          Logger.log("Yes OK !!! : 2");
          return false;}
        }
        
      }
      else // nu sunt aceeasi serie
      {
      Logger.log("Yes OK !!! : 3");
      return false;
      }
      
      
    }
  }
}
