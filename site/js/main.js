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
async function main(){
    // await first();
    await menu();
};//main();
main();