function first(){
    return new Promise((resolve)=>{
        function f(){
            const first=document.createElement('script');
            first.innerHTML="hi";
            document.querySelector('body').append(first);
        }
        resolve(f());
    });
};//first()
function menu(){
    return new Promise((resolve)=>{
        function mOpen(){
            const openM=document.createElement('script');
            openM.src='site/js/menu.js';
            document.querySelector('body').append(openM);
            document.querySelector('nav').style.opacity=`1`;
        }
        setTimeout(()=>{
            resolve(mOpen());
        },1700);
    });
};//first()

function date(){
    return new Promise((resolve)=>{
        function d(){
            const openD=document.createElement('script');
            openD.src="site/js/date.js";
            document.querySelector('body').append(openD);
        }
        setTimeout(()=>{
            resolve(d());
        },1300);
    });
};//date();
function includeHTML(){
    return new Promise((resolve)=>{
        function include(){
            const incl=document.createElement('script');
            incl.src="site/js/includeHTML.js";
            document.querySelector('body').append(incl);
        }
        resolve(include());
    });
};//includeHTML()
function clicker(){
    return new Promise((resolve)=>{
        function cl(){
            const c=document.createElement('script');
            c.src="site/js/click.js";
            document.querySelector('body').append(c);
        }
        resolve(cl());
    });
};//clicker
async function main(){
    await includeHTML();
    // await first();
    await clicker();
    await menu();
    await date();
};//main();
main();