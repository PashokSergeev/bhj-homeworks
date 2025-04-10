const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const hole1 = document.getElementById('hole1');
// hole1.onclick = () => {
//     if(hole1.classList.contains( 'hole_has-mole' )){
//         dead.textContent +=1;
//     }else{
//         lost.textContent += 1;
//     }
// }

for (let i = 1; i < 10; i++) {
    const hole = document.getElementById('hole'+i);
    hole.onclick = () => {
        if(hole.classList.contains( 'hole_has-mole' )){
            dead.textContent = parseInt(dead.textContent) + 1;
        }else{
            lost.textContent = parseInt(lost.textContent) + 1;
        }
    }
}
