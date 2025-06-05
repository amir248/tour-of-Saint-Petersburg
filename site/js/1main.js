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
function tawk(){
    return new Promise((resolve)=>{
        function newTawk(){
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/67f4cf8ec8dab5190d8eeb2c/1ioa4lhv2';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        }
        resolve(newTawk());
    })
}
async function main(){
    await menu();
    await changePhotoGg();
    await tawk();
}
main();