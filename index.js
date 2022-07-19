const yesBtn = document.querySelector("#btn-yes");
const noBtn = document.querySelector("#btn-no");
const theModal = document.querySelector("#the-modal");

const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");

const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");

const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");

const d7 = document.querySelector("#d7");
const d8 = document.querySelector("#d8");

const d9 = document.querySelector("#d9");
const d10 = document.querySelector("#d10");

const d11 = document.querySelector("#d11");
const d12 = document.querySelector("#d12");

const d13 = document.querySelector("#d13");
const d14 = document.querySelector("#d14");

const d15 = document.querySelector("#d15");
const d16 = document.querySelector("#d16");

const d17 = document.querySelector("#d17");
const d18 = document.querySelector("#d18");

const d19 = document.querySelector("#d19");
const d20 = document.querySelector("#d20");


const d21 = document.querySelector("#d21");
const d22 = document.querySelector("#d22");

const d23 = document.querySelector("#d23");
const d24 = document.querySelector("#d24");

const d25 = document.querySelector("#d25");
const d26 = document.querySelector("#d26");

const d27 = document.querySelector("#d27");
const d28 = document.querySelector("#d28");

const d29 = document.querySelector("#d29");
const d30 = document.querySelector("#d30");

// let status = false;

 function hideIt(d){
     console.log("user clicked yes for : " + d.id)
     theModal.classList.add("hide-it")

     changeToGreen(d)
}

function changeToGreen(d){

    if(d.classList.contains("change-color-green")){
        d.classList.remove("change-color-green")
    }else{
        d.classList.add("change-color-green")
    }
}

function hideIt_2( b ){
    theModal.classList.add("hide-it")
    console.log("Running No: " + b)
    if(b.classList.contains("didnt-do-it")){
        b.classList.remove("didnt-do-it")
    }else{
        b.classList.add("didnt-do-it")
    }
}

function envokeModal( d ){
    // [...theDate].forEach( (date,index) => {
    //     console.log(date)
    console.log("Passed was: " + d.id)
    theModal.classList.remove("hide-it")


    // yesBtn.style.onclick = hideIt(d);

    //
    // // addEventListener("click", ()=>{hideIt(d)});
    // noBtn.style.onclick = hideIt_2(d);
    // // noBtn.addEventListener("click",()=>{hideIt_2(d)})

    yesBtn.onclick = ()=>{itsAyes(d)};

    noBtn.onclick = ()=>{
        itsAno(d)
    }

    //     console.log(theDate)
    }

    function itsAyes(d){
     hideIt(d);
    }
  function itsAno(d){
     hideIt_2(d);
    }

    d1.addEventListener("click",()=>{envokeModal(d1)})
    d2.addEventListener("click",()=>{envokeModal(d2)})
    d3.addEventListener("click",()=>{envokeModal(d3)})
    d4.addEventListener("click",()=>{envokeModal(d4)})
    d5.addEventListener("click",()=>{envokeModal(d5)})
    d6.addEventListener("click",()=>{envokeModal(d6)})
    d7.addEventListener("click",()=>{envokeModal(d7)})
    d8.addEventListener("click",()=>{envokeModal(d8)})
    d9.addEventListener("click",()=>{envokeModal(d9)})
    d10.addEventListener("click",()=>{envokeModal(d10)})




    d11.addEventListener("click",()=>{envokeModal(d11)})
    d12.addEventListener("click",()=>{envokeModal(d12)})
    d13.addEventListener("click",()=>{envokeModal(d13)})
    d14.addEventListener("click",()=>{envokeModal(d14)})
    d15.addEventListener("click",()=>{envokeModal(d15)})
    d16.addEventListener("click",()=>{envokeModal(d16)})
    d17.addEventListener("click",()=>{envokeModal(d17)})
    d18.addEventListener("click",()=>{envokeModal(d18)})
    d19.addEventListener("click",()=>{envokeModal(d19)})
    d20.addEventListener("click",()=>{envokeModal(d20)})



    d21.addEventListener("click",()=>{envokeModal(d21)})
    d22.addEventListener("click",()=>{envokeModal(d22)})
    d23.addEventListener("click",()=>{envokeModal(d23)})
    d24.addEventListener("click",()=>{envokeModal(d24)})
    d25.addEventListener("click",()=>{envokeModal(d25)})
    d26.addEventListener("click",()=>{envokeModal(d26)})
    d27.addEventListener("click",()=>{envokeModal(d27)})
    d28.addEventListener("click",()=>{envokeModal(d28)})
    d29.addEventListener("click",()=>{envokeModal(d29)})
    d30.addEventListener("click",()=>{envokeModal(d30)})




