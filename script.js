function submitForm() {
  const checkboxes = document.getElementsByName('checkbox');
  let response = "";

  var places = ["kitchen","desks","toilet","servers","boss desk","cams","balcon"]
  var randomPlace = places[Math.floor(Math.random() * places.length)]
  

  const tasks = {
    "Imposter": ["mto9tl 7ad lin tkaml 5 fake tasks","7awl irb7 ma8ir mto9tl 7ad","second kill lezem to9tel chkoun w hawl to93ed ba7dha lkill 7ata lin we7d yji ya3mel report w 7otha fih","awl kill mta3k lazm ykoun chkoun amal emergency meeting","ki yabdew zouz ba7dha b3adhom emchi ba7dheom w 9oul eli fama wa7ed fehom jbed grafeuze w 5abeha fisa3","a5tar ayy wa7ed w 9oul rani ritou 5arej mel vent","9oul blasa 8alta mta3 koll kill ta3melha","mato9telch el security","awel mayoufa cooldown mta3 el kill loula lezmek ta3mel kill o5ra mahma tabda el situation eli enti feha","Alone tour7 kaml a3ml a9l contact m3a players","andkch 7a9 tnzl Z tour7 kaml emchi kan al jnébet wala btweli","kol mto9tl abed emchi o93d fl desk mta3k lin titna7a cool down","ay wa7d 9al esmk wchakik fik lazmk tkhdm 3 fake tasks","andkch 7a9 to9tl 7ad ila mtvoti alih fil meeting","make up a task and do it","ma3andek l7a9 to9tel ken ki dhaw ma9sous","jawb nés lkl blou8a mahich mawjouda game kamla","ma3andekch l7a9 testa3ml l vents"," 3andek l7a9 to9tl ken bl sekina (tal9aha fel vents)",`ma3andek l7a9 to9tel ken fel ${randomPlace}`,"play normal","a7ki blou8a mahich mawjouda game kamla","mandk 7a9 ta7ki kan bsout bagra","ala kol emergency meeting wala report lazmk tkhdm 3 tasks 9bal mto9tl chkoun","kaml kol jomla t9oulha b (ya bro)","a9n3 chkoun bili enti jawk bahi","al3b adi ama ki treporti body nés lkl twali tnédilhm 3ami","kol maysir meeting andk 7a9 kan t9oul klma brka","mandkch 7a9 to9tl awl wa7d ya3ml report"],
    "Crew": ["andkch 7a9 treporti wala ta3ml meeting","susi a9rb wa7d lil bureau mta3k","a9n3 labad bch ykharjo another crew","kol mtkaml task lazmk ta3ti compliment lawl abad trah","tour7 kaml lazmk tkthb","kol mtra 7aja sus 9oul ili jawha bahi","kan rit imposter 9tal 9odamk mandkch 7a9 t9oul alih ila fl last round","a5tar ayy wa7ed w 9oul rani ritou 5arej mel vent","a9n3 nés ili enti imposter bl actions mta3k m8ir mt9olilhm","play normal","mandkch 7a9 tkhdm akthr ml 3 tasks lin tl9a body","kol myji meeting 9oul ili amel meeting houwa imposter","speed run tasks mta3k m3andk 7a9 ta7ki kan ki tkamlhm lkl","a7ki blou8a mahich mawjouda game kamla","kol mtl9a body lazmk treportih ama mandkch l7a9 ta7ki lin youfa meeting"," make up a task and do it","ma3andek l7a9 tekhdem task ken ki yebda mfouma 7ad b7thak","kol maysir meeting andk 7a9 kan t9oul klma brka","dima ekthb wiin kont","kol mt9oula 7aja s7i7a zid kethba m3aha","jawb nés lkl blou8a mahich mawjouda game kamla","emchi tour7 kaml kén btweli","mandk 7a9 ta7ki kan bsout bagra","ala kol 3 tasks tkhdmhm lazmk ta3ml doura al map wtrj3 fin akhr task khdmto","al3b adi ama ki treporti body nés lkl twali tnédilhm 3ami ","kaml kol jomla t9oulha b (ya bro)","A3ml ili tnjm bch trab7 imposter ama ekhdm tasks mta3k"],
    "Security": ["ekhdm 4 tasks wmba3d mtnjm tkaml kan ki to9tl chkoun","7awel to9tel chkoun wa7dou fi terkina w mat5ali 7ad yfi9 bik","awel wa7ed trah mouch ya3mel fi task o9tlou","awl we7d bch tl9ah fl cams room objective mta3k enk to9tlo wmyfi9 bik tour7 lin toufa game","ki tl9a body o93d b7thaha wawl wa7d yji bch yreporti 9oul ili houwa imposter wkan votewh trb7 task mta3k","play normal ama andkch 7a9 tkaml tasks mta3k ila ki yb9aw 4 abad","andkch 7a9 treporti wala ta3ml meeting","ba3d kol mtkaml task emchi lchkoun nedilo wohrb wmtjawbouch lin youfa tour7","make up a task and do it","lezmk to9tel akther we7ed mahouch sus","mato9tl ken fl balcony","play normal","a7ki blou8a mahich mawjouda game kamla","emchi tour7 kaml kén btweli","mandk 7a9 ta7ki kan bsout bagra","play normal","play normal ama kan 9talt abed mahouch imposter lazmk ta3ml 5 laps al map ","al3b adi ama ki treporti body nés lkl twali tnédilhm 3ami","jawb nés lkl blou8a mahich mawjouda game kamla","emchi tour7 kaml kén btweli","kol maysir meeting andk 7a9 kan t9oul klma brka","kaml kol jomla t9oulha b (ya bro)"]
  };

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


  let task = "";
  if (tasks[response]) {
    task = tasks[response][Math.floor(Math.random() * tasks[response].length)];
  }

  window.location.href = "tasks.html?task=" + encodeURIComponent(task) + "&role=" + encodeURIComponent(response.toLowerCase());
}