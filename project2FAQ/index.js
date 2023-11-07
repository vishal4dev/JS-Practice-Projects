//variables

const content= document.getElementsByClassName('main-content');

//using for loop to access main-content
for(i=0;i<content.length;i++){
    content[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
};