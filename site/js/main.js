function first(){
    return new Promise((resolve)=>{
        function f(){
            const first=document.createElement('script');
            first.innerHTML="hi";
            document.querySelector('body').append(first);
        }
        resolve(f());
    })
};//first()
function menu(){
    return new Promise((resolve)=>{
        function mOpen(){
            const openM=document.createElement('script');
            openM.src='site/js/menu.js';
            document.querySelector('body').append(openM);
        }
        resolve(mOpen());
    })
};//first()

function date(){
    return new Promise((resolve)=>{
        function d(){
            const openD=document.createElement('script');
            openD.src="site/js/date.js";
            document.querySelector('body').append(openD);
        }
        resolve(d());
    })
};//date();
async function main(){
    // await first();
    await menu();
    await date();
};//main();
main();