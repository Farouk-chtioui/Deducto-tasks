function submitForm() {
    const checkboxes = document.getElementsByName('checkbox');
    let response = "";
    let tasks_imposter=["mto9tl 7ad lin tkaml 5 fake tasks","7awl irb7 ma8ir mto9tl 7ad","o9tel chkoun w hawl to93ed ba7dha lkill hata lin wehd yji aml report w hotha fih","awl kill mta3k lazm ykoun chkoun amal emergency meeting","ki yabdew zouz ba7dha b3adhom emchi ba7dheom w 9oul eli fama wa7ed fehom jbed grafeuze w 5abeha fisa3","a5tar ayy wa7ed w 9oul rani ritou 5arej mel vent","9ouol blasa 8alta mta3 koll kill ta3melha","mato9telch el security","awel mayoufa cooldown mta3 el kill loula lezmek ta3mel kill o5ra mahma tabda el situation eli enti feha","Alone tour7 kaml a3ml a9l contact m3a players","andkch 7a9 tnzl Z tour7 kaml emchi kan al jnébet wala btweli","mandkch 7a9 tkthb","kol mto9tl abed emchi o93d fl desk mta3k lin titna7a cool down","ay wa7d 9al esmk wchakik fik lazmk tkhdm 3 fake tasks","andkch 7a9 to9tl 7ad ila mtvoti alih fil meeting"," act like you have task"];
    let tasks_crew=["susi a9rb wa7d lil bureau mta3k","a9n3 labad bch ykharjo another crew","kol mtkaml task lazmk ta3ti compliment lawl abad trah","tour7 kaml lazmk tkthb","9oul aks ili chofto","kan rit imposter 9tal 9odamk mandkch 7a9 t9oul alih ila fl last round","a9n3 nés ili enti imposter kan kharjouk vote trb7 task mta3k","play normal","mandkch 7a9 tkhdm akthr ml 3 tasks lin tl9a body","kol myji meeting 9oul ili amel meeting houwa imposter","speed run tasks mta3k wkan motet tkhsr wzid andkch 7a9 ta3ml meeting wala report","kol mtl9a body lazmk treportih ama mandkch l7a9 ta7ki lin youfa meeting"," act like you have task"];
    let tasks_security=["ekhdm 4 tasks wmba3d mtnjm tkaml kan ki to9tl chkoun","7awel to9tel chkoun wa7dou fi terkina w mat5ali 7ad yfi9 bik","awel wa7ed trah mouch ya3mel fi task o9tlou","awl we7d bch tl9ah fl cams room objective mta3k enk to9tlo wmyfi9 bik tour7 lin toufa game","ki tl9a body o93d b7thaha wawl wa7d yji bch yreporti 9oul ili houwa imposter wkan votewh trb7 task mta3k","play normal ama andkch 7a9 tkaml tasks mta3k ila ki yb9aw 4 abad","andkch 7a9 treporti wala ta3ml meeting","ba3d kol mtkaml task emchi lchkoun nedilo wohrb wmtjawbouch lin youfa tour7","act like you have task"];

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        switch (index + 1) {
          case 1:
            response = "Imposter";
            break;
          case 2:
            response = "Crew";
            break;
          case 3:
            response = "Security";
            break;
          default:
            break;
        }
      }
    });
  
    console.log("Response:", response);
  
  
    let task = "";
    if (response === "Imposter") {
      task = tasks_imposter[Math.floor(Math.random() * tasks_imposter.length)];
    } else if (response === "Crew") {
      task = tasks_crew[Math.floor(Math.random() * tasks_crew.length)];
    } else if (response === "Security") {
      task = tasks_security[Math.floor(Math.random() * tasks_security.length)];
    }
  
    // Redirect to another page
    // Redirect to another page with role as URL parameter
    window.location.href = "tasks.html?task=" + encodeURIComponent(task) + "&role=" + encodeURIComponent(response.toLowerCase());

  }
  