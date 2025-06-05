function menu(){
    return new Promise((resolve)=>{
        function consoleLog(){
            console.log('menu');
        }
        resolve(consoleLog);
    });
}

function changePhotoGg(){
    return new Promise((resolve)=>{
        function toGo(){
            const imgBg=['public/imgBg/1.jpg','public/imgBg/2.jpg','public/imgBg/3.jpg','public/imgBg/4.jpg','public/imgBg/5.jpg','public/imgBg/6.jpg','public/imgBg/7.jpg','public/imgBg/8.jpg','public/imgBg/9.jpg',];
            let n=+0;
            setInterval(()=>{
                document.querySelector('body').style.cssText=`
                    background-image:url('${imgBg[n]}');
                    transition:all ease 1s;
                `;
                n++;
               if(n>=imgBg.length){
                n=0;
               }
            },3777);
            
        }
        resolve(toGo());
    });
}
async function main(){
    await menu();
    await changePhotoGg();
}
main();