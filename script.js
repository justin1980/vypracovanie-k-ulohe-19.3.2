//nacitanie premenych z HTMl
let content = document.getElementById("areaText");
let findText = document.getElementById("searchWord");
let textResult = document.getElementById("textResult");
let encrypt = document.getElementById("encryption");
let encryptText = document.getElementById("encryptedText");

//funkcia na vypis informaci z textu 
function textFind(){

    //nacitanie value hodnot
    let contentText = content.value;
    let findTextValue = findText.value;
    let nonWhiteSpace = contentText.replace(/\s/g, "");

    //hladanie hladaneho slova z textarea
    let answer = contentText.indexOf(findTextValue);

    //premenne k cyklu a oddelenie slov z textu medzerou
    let slova = contentText.split(' ');
    let maximalnaDlzka = 0;
    let najdlhsieSlovo = '';

    //cyklus na najdenie najldsieho slova a vypis jeho poctu znakov
    for (let i = 0; i < slova.length; i++) {
        if (slova[i].length > maximalnaDlzka) {
        maximalnaDlzka = slova[i].length;
        najdlhsieSlovo = slova[i];
        }
    }

    //premenna na vyhladanie vsetkych cisiel v texte;
    let pocetCislic = contentText.replace(/[^0-9]/g,"").length;

    //zakladna odpoved
    let odpoved = "text obsahuje : " + contentText.length + " znakov </br>" + "text obsahuje : " + nonWhiteSpace.length + " znakov bez medzier </br>" + "najdlhšie slovo má " +  maximalnaDlzka + " písmen a je to slovo " + najdlhsieSlovo +"</br>text obsahuje " + pocetCislic + " cisiel";
    
    //rozhodovanie co napisat do odpovede
    if (contentText != ""){

        if (answer == -1){

            textResult.innerHTML = "hľadané slovo ," + findTextValue + ", nebolo nájdené </br>" + odpoved;

        }else if (findTextValue == "") {

            textResult.innerHTML = "nič ste nezadali do vyhľadávania </br>" + odpoved;

        } else {
            
            answer += 1;
            console.log(odpoved + "  hľadané slovo ," + findTextValue + ", sa začína na pozícií: " + answer);
            textResult.innerHTML ="hľadané slovo ," + findTextValue + ", sa začína na pozícií znakov: " + answer + "</br>" + odpoved;
            }
        
    }else{

    textResult.innerHTML = "nič ste nezadali do textového pola";

    }
}

    //nastavit vahladavacie pole na prazdnu hodnotu
    findTextReset()    

//funkcia na vynulovanie vyhladavacieho pola
function findTextReset(){
    findText.value = "";
}

//funkcia na vypisanie sifrovacieho textu a odsifrovanie
function encryption(){
    let obsahTextu = content.value;

    //replace viacerych znakov z textu
    let sifrovanie = obsahTextu
    .replace(/[Oo]/g, '0')
    .replace(/[Ii]/g, '1')
    .replace(/[Ee]/g, '3')
    .replace(/[Aa]/g, '4')
    .replace(/[Ss]/g, '5')
    .replace(/[Bb]/g, '8');
  

  console.log(sifrovanie);
  //nastavit sifrovaný text do textarea
  encryptText.innerHTML ="<p>" + sifrovanie; + "</p>"
}