document.querySelector('#menu').addEventListener('click',()=>{
    console.log('click');
    openMenu();
});
const boxMenu={};
boxMenu
function openMenu(){
    // document.querySelector('#menu').classList.add('boxMenu');
    // document.querySelector('.boxMenu').style.cssText=`height:100vh;`;
    let oK=document.createElement('div');
    oK.classList.add('boxMenu');
    oK.innerHTML='<a href="#">About</a><a href="#">Services</a><a href="#">Upcomming</a><a href="tel:+9893619813">89893619813</a>';
    document.querySelector('body').prepend(oK);
    setTimeout(()=>{
        document.querySelector('.boxMenu').style.cssText=`
            font-size:30px;
            height:100vh;
            opacity:1;
        `;
        document.querySelectorAll('.boxMenu > a')[0].style.fontSize=`30px`;
        document.querySelectorAll('.boxMenu > a')[1].style.fontSize=`30px`;
        document.querySelectorAll('.boxMenu > a')[2].style.fontSize=`30px`;
        document.querySelectorAll('.boxMenu > a')[3].style.fontSize=`30px`;
    },1);
    document.querySelector('.boxMenu').addEventListener('click',()=>{
        document.querySelector('.boxMenu').style.cssText=`top:100%;font-size:0;height:0;transform:all 1s;opacity:0;`;
        setTimeout(()=>{
            document.querySelector('.boxMenu').remove();

        },444);
    });
};//openMenu();
