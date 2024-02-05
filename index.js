const histor = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');
const historyLink = document.querySelector('.history1');
const visionLink = document.querySelector('.vision1');
const goalsLink = document.querySelector('.goals1');
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
        historyLink.style.backgroundColor = 'white'
    }else{}
});

vision.addEventListener('click', function(){
    console.log(visionText);
    console.log(historyText)
    if(historyText.style.display ==='block' || goalsText.style.display ==='block' ){
        historyText.style.display ='none';
        goalsText.style.display ='none';
        visionText.style.display ='block';
        visionLink.style.backgroundColor = 'white'
    }else{}
});

goals.addEventListener('click', function(){
    if(visionText.style.display ==='block' || historyText.style.display ==='block'){
        visionText.style.display ='none'
        historyText.style.display ='none'
        goalsText.style.display ='block'
    }else{}
});