let timeCard = document.getElementById("timeCard1"); //+
let cafeCard = document.getElementById("cafeCard1"); //+
let cardHesabiBaglabtn1 = document.getElementById("cardHesabiBaglabtn1"); //+
let vaxtiGoster1 = document.getElementById("vaxtiGoster1"); //+
let odenecekQiymet1 = document.getElementById("odenecekQiymet1"); //+
let masa = document.getElementById("masa1"); //+

// Deyiskenleri dinamiklesdirmek













let amountHistory = document.getElementById("hesabButton");
let btnModalTime = document.getElementById("btnModalTime");
let btnModalCafe = document.getElementById("btnModalCafe");
let timeModalInput = document.getElementById("timeModalInput");
let btnLimitsiz = document.getElementById("noLimit");
let modalBtnSaveAddTime = document.getElementById("saveAddTime");
let tableHesab = document.getElementById("tableHesab");
let cardMonitoringTime, intervalTime, infoZaman, timeAddTotime = 0,
    qiymet, tarif, cafe, hesab = "",
    dinamikID;


// Cafe deyiskenler
let btnCay = document.getElementById("btnCay");
let btKofe = document.getElementById("btKofe");
let btnSin = document.getElementById("btnSin");
let btnPletka = document.getElementById("btnPletka");
let btnCipsi = document.getElementById("btnCipsi");
let btnCola = document.getElementById("btnCola");
let cafeInput = document.getElementById("cafeInput")
let cafeVerMebleg = document.getElementById("cafeVerMebleg1"); //+
let cafeVerilenSifaris = document.getElementById("cafeVerilenSifaris1"); //+
let hesabCafe = 0,
    gosterilenDeyerler = "",
    qiymetToqiymet = 0,
    hesabXkafe = "";

// limitsiz ucun
let limitsizQiymeti = 0,
    limitsizVaxti = 0,
    limitsizintervalQiymet, limitsizintervalVaxt,
    hesabL = "";

// Cafe hesabi
function kafeHesb(cafeHasbi, val) {

    qiymetToqiymet = Number(qiymetToqiymet) + Number(cafeHasbi) * cafeInput.value;
    hesabXkafe = qiymetToqiymet;
    cafeVerMebleg.innerText = "";

    if (qiymetToqiymet == 0.6) {
        cafeVerMebleg.innerText = qiymetToqiymet + "0 qəpik";
    } else {
        cafeVerMebleg.innerText = qiymetToqiymet + " azn"
    }





    if (cafeInput.value == 1) {


        if (gosterilenDeyerler == 0) {
            gosterilenDeyerler = gosterilenDeyerler + val
        } else {
            gosterilenDeyerler = gosterilenDeyerler + " , " + val
        }


    } else {
        if (gosterilenDeyerler == 0) {
            gosterilenDeyerler = gosterilenDeyerler + val
        } else {
            gosterilenDeyerler = gosterilenDeyerler + " , " + cafeInput.value + "x" + val
        }
    }

    cafeVerilenSifaris.innerText = gosterilenDeyerler
}




timeCard.addEventListener("click", function() {
    btnModalTime.click()
});
cafeCard.addEventListener("click", function() {
    btnModalCafe.click()
});
amountHistory.addEventListener("click", function() {
    $('#classModal').modal('show')
});

function addTime(vaxt) {
    timeModalInput.value = vaxt;
}

modalBtnSaveAddTime.addEventListener("click", saveModalTime);
// Standart vaxt acma
function saveModalTime() {

    vaxtiGoster1.innerHTML = "Loading..."
    tarif = "Standart"
    timeAddTotime = timeAddTotime + Number(timeModalInput.value)
    hesab = timeAddTotime / 100
    if (timeAddTotime >= 100) {
        odenecekQiymet1.innerText = timeAddTotime / 100 + " azn"
    }
    if (timeAddTotime <= 99) {
        odenecekQiymet1.innerText = "0." + timeAddTotime + " qepig"
    }
    infoZaman = new Date()
    cardMonitoringTime = timeAddTotime * 60
    intervalTime = setInterval(function() {
        cardMonitoringTime--;
        if (cardMonitoringTime > 60) {
            vaxtiGoster1.innerHTML = Math.floor(cardMonitoringTime / 60) + " dəqiqə";
        }
        if (cardMonitoringTime < 60) {
            vaxtiGoster1.innerHTML = cardMonitoringTime + " san";
        }
        if (cardMonitoringTime == 0) {
            clearInterval(intervalTime);
            vaxtiGoster1.innerHTML = "Vaxt bitdi"
            infoZaman = new Date()
        }
    }, 1000)
    timeModalInput.value = "";
}
// Limitsiz button limitsizQiymeti=0,limitsizVaxti=0
// limitsizintervalQiymet,limitsizintervalVaxt;

function limitsizVaxt() {
    vaxtiGoster1.innerHTML = "0 dəqiqə"
    tarif = "Limitsiz"
    limitsizintervalVaxt = setInterval(function() {
        limitsizVaxti++;
    }, 1000)
    limitsizintervalQiymet = setInterval(function() {
        limitsizQiymeti++;
    }, 60000)



    vaxtiGoster1.innerHTML = Math.floor(limitsizVaxti / 60) + " dəqiqə"

    if (limitsizQiymeti < 100) {
        odenecekQiymet1.innerText = limitsizQiymeti + " qəpik"
        hesabL = limitsizQiymeti;
    } else {
        odenecekQiymet1.innerText = Math.floor(limitsizQiymeti / 100) + " azn"
        hesabL = Math.floor(limitsizQiymeti / 100);
    }
    timeModalInput.value = "";
}


// Yaddasa vazma - Tabela yazma - Son
cardHesabiBaglabtn1.addEventListener("click", fnHesabiBagla)

let i = 0;

function fnHesabiBagla(e) {
    clearInterval(intervalTime);
    clearInterval(limitsizintervalVaxt);
    clearInterval(limitsizintervalQiymet);;
    // add  \/
    const tbody = document.querySelector("tbody")
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);

    // add /\

    document.querySelectorAll("td")[i].innerHTML = masa.innerHTML;
    i = i + 1;
    document.querySelectorAll("td")[i].innerHTML = tarif;
    i = i + 1;
    document.querySelectorAll("td")[i].innerHTML = gosterilenDeyerler;
    i = i + 1;
    document.querySelectorAll("td")[i].innerHTML = infoZaman;
    i = i + 1;
    document.querySelectorAll("td")[i].innerHTML = hesab + hesabXkafe + hesabL + " azn";
    i = i + 1;
    odenecekQiymet1.innerText = "Verilecek mebleg"
    vaxtiGoster1.innerHTML = "";
    cafeVerilenSifaris.innerText = "Verilen sifarisler";
    cafeVerMebleg.innerText = "Verilecek mebleg"
    amountHistory.style.borderColor = "#7FFF00";
    amountHistory.style.color = "#7FFF00";
    amountHistory.style.textDecoration = "underline"
    amountHistory.style.font = "bold  tahoma"
    e.preventDefault();
}