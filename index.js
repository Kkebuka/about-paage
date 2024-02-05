const histor = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');

const historyLink = document.querySelector('.history1');
const visionLink = document.querySelector('.vision1');
const goalsLink = document.querySelector('.goals1');

const historyText = document.querySelector('.history-stat');
const visionText = document.querySelector('.vision-stat');
const goalsText = document.querySelector('.goals-stat');





vision.addEventListener('click', function(e){
   historyLink.style.backgroundColor = 'rgb(184, 209, 231)';
   goalsLink.style.backgroundColor = 'rgb(184, 209, 231)';
   historyText.classList.add('newstat-prop');
   goalsText.classList.add('newstat-prop');
   visionLink.style.backgroundColor = 'white';
   visionText.classList.remove('newstat-prop')
    e.preventDefault()
});
visionLink.addEventListener('mouseover', function(){
    if(visionText.classList.contains('newstat-prop')){
    visionLink.style.backgroundColor = 'rgb(217, 235, 250)';
    }
});
visionLink.addEventListener('mouseout', function(){
    if(visionText.classList.contains('newstat-prop')){
    visionLink.style.backgroundColor = 'rgb(184, 209, 231)';}
});



goals.addEventListener('click', function(e){
    historyLink.style.backgroundColor = 'rgb(184, 209, 231)';
    visionLink.style.backgroundColor = 'rgb(184, 209, 231)';
    historyText.classList.add('newstat-prop');
    visionText.classList.add('newstat-prop');
    goalsLink.style.backgroundColor = 'white';
    goalsText.classList.remove('newstat-prop');
    e.preventDefault()
});
goalsLink.addEventListener('mouseover', function(){
    if(goalsText.classList.contains('newstat-prop')){
    goalsLink.style.backgroundColor = 'rgb(217, 235, 250)';
    }
});
goalsLink.addEventListener('mouseout', function(){
    if(goalsText.classList.contains('newstat-prop')){
    goalsLink.style.backgroundColor = 'rgb(184, 209, 231)';}
});


histor.addEventListener('click', function(e){
    goalsLink.style.backgroundColor = 'rgb(184, 209, 231)';
    visionLink.style.backgroundColor = 'rgb(184, 209, 231)';
    goalsText.classList.add('newstat-prop');
    visionText.classList.add('newstat-prop');
    historyLink.style.backgroundColor = 'white';
    historyText.classList.remove('newstat-prop');
    e.preventDefault()

});
historyLink.addEventListener('mouseover', function(){
    if(historyText.classList.contains('newstat-prop')){
    historyLink.style.backgroundColor = 'rgb(217, 235, 250)';
    }
});
historyLink.addEventListener('mouseout', function(){
    if(historyText.classList.contains('newstat-prop')){
    historyLink.style.backgroundColor = 'rgb(184, 209, 231)';}
});