
var inmueblesObject = {
    "Guardias intramuros no armados": {
      "12 x 12 5 días a la semana (Sueldo $8,000 Mensual)":[
        "17600", 
      ]
      
      ,
  
  
      "Guardias intramuros no armados(por evento)": [
          "Intramuro No Armado de 12 a 24 Horas",
           "Intramuro No Armado  de 1 a 12 Horas",
            "Transporte de personal Armado o No Armado a punto foráneo (precio por km recorrido)"
          ],
  
      "Guardias intramuros no armados(por evento)": [
          "Transporte de personal Armado o No Armado a punto foráneo (precio por km recorrido)",
           "24 x 24 Guardia Armado con Arma corta o larga  (Sueldo $9,000 Mensual)",
           "24 x 24 Guardia Armado con  2 Armas corta y larga (Sueldo $9,000 Mensual)",
           "12 X 12 Guardia Armado con Arma corta o larga  (Sueldo $9,000 Mensual)",
           "Guardia Armado con  2 Armas corta y larga (Sueldo $9,000 Mensual)",
           "12 X 12 Jefe de Turno 1 Arma corta (Sueldo $11,200 Mensual)",
           "12 X 12 Jefe de Servicio 1 Arma corta (Sueldo $12,800 Mensual)",
           "Transporte de personal Armado o No Armado a punto foráneo (precio por km recorrido)"
  
  
          ]    
    },
    "Custodias": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    },
  
    "Traslado de valores": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
  
    
    for (var x in inmueblesObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
  
  
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in inmueblesObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = inmueblesObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i]);
        console.log(chapterSel.options)
    
      }
    }
  }
  
  
  
      // "12 x 12 5 días a la semana (Sueldo $8,000 Mensual)",
      // "12 x 12 6 días a la semana (Sueldo $8,000 Mensual)",
      // "12 X 12 7 días a la semana (Sueldo $8,000 Mensual) Factor 1.4",
      // "24 X 24 (Sueldo $8,000 Mensual)",
      // "12 x 12 Jefe de Turno (Sueldo de $10,000)",
      // "24 x 24 Jefe de Turno (Sueldo de $10,000)",
      // "24 X 24 (Sueldo $8,000 Mensual)",
      // "12 X 12 Jefe de Servicio (Sueldo $12,500)",
      // "24 x 24  Jefe de Turno (Sueldo de $10,000)"