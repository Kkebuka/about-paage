const histor = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');
const historyText = document.querySelector('.history-stat');
const visionText = document.querySelector('.vision-stat');
const goalsText = document.querySelector('.goals-stat');

visionText.style.display = 'none';
goalsText.style.display = 'none';
historyText.style.display ='block'
histor.addEventListener('click', function(){
    if(visionText.style.display ==='block' || goalsText.style.display ==='block'){
        visionText.style.display ='none'
        goalsText.style.display ='none'
        historyText.style.display ='block'
    }else{}
});

vision.addEventListener('click', function(){
    console.log(visionText);
    console.log(historyText)
    if(historyText.style.display ==='block' || goalsText.style.display ==='block' ){
        historyText.style.display ='none';
        goalsText.style.display ='none';
        visionText.style.display ='block';
    }else{}
});

goals.addEventListener('click', function(){
    if(visionText.style.display ==='block' || historyText.style.display ==='block'){
        visionText.style.display ='none'
        historyText.style.display ='none'
        goalsText.style.display ='block'
    }else{}
});