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
            const imgBg=['site/imgBg/1.jpg','site/imgBg/2.jpg','site/imgBg/3.jpg','site/imgBg/4.jpg','site/imgBg/5.jpg','site/imgBg/6.jpg','site/imgBg/7.jpg','site/imgBg/8.jpg','site/imgBg/9.jpg',];
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