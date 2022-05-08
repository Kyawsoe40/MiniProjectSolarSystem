





const massInput=document.getElementById('mass-input');
const planets=document.querySelector('#planets');
const button=document.querySelector('button');
const img=document.querySelector('.img');
const warning=document.querySelector('.warning');
const warningBox=document.querySelector('.warning-box');
const weightCircle=document.querySelector('.weight-circle');
button.addEventListener('click',e=>{
    let mass=massInput.value;
    mass=parseFloat(mass);
    if(mass){
        if(typeof mass!=='number'){
            img.style.display='none';
            warning.textContent='Mass Value must be a number';
            warningBox.style.display='inline-block'; 
            weightCircle.style.display='none';
        }else{
            const planet=planets.value;
            if(planet=='default'){
                img.style.display='none';
                warning.textContent='Please choose a planet';
                warningBox.style.display='inline-block'; 
                weightCircle.style.display='none';
            }
            else{
                let weight;
                switch(planet){
                    case 'Earth': weight=mass*9.8;
                                  break;
                    case 'Jupiter': weight=mass*23.1;
                                  break;
                    case 'Pluto': weight=mass*0.7;
                                  break;
                    case 'Mercury': weight=mass*3.7;
                                  break;
                    case 'Venus': weight=mass*8.9;
                                  break;
                    case 'Moon': weight=mass*1.6;
                                  break;
                    case 'Mars': weight=mass*3.7;
                                  break;
                    case 'Saturn': weight=mass*9;
                                  break;
                    case 'Uranus': weight=mass*8.7;
                                  break;
                    case 'Neptune': weight=mass*11;
                                  break;
                                  
                }
                const count=countDecimals(weight);
                if(count>=4){
                    weight=weight.toFixed(3);
                }
                let imgName=planet.toLowerCase();
                img.setAttribute('src',`assets/img/${imgName}.png`);
                img.style.display='block';
                weightCircle.textContent=weight+ ' N';
                weightCircle.style.display='inline-block';
                warning.textContent='The weight of the object on ';
                const planetName=document.createElement('span');
                planetName.textContent=planet;
                planetName.style.color='#222'
                warning.appendChild(planetName);
                warningBox.style.display='inline-block'; 
                massInput.value='';
                planets.value='default';
            }
            
        }
    }else{
        img.style.display='none';
        warning.textContent='Mass value is required';
        warningBox.style.display='inline-block'; 
        weightCircle.style.display='none';
    }
})
const countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}