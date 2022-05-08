





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
    console.log(typeof mass);
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
                    case 'earth': weight=mass*9.8;
                                  break;
                    case 'jupiter': weight=mass*23.1;
                                  break;
                    case 'pluto': weight=mass*0.7;
                                  break;
                    case 'mercury': weight=mass*3.7;
                                  break;
                    case 'venus': weight=mass*8.9;
                                  break;
                    case 'moon': weight=mass*1.6;
                                  break;
                    case 'mars': weight=mass*3.7;
                                  break;
                    case 'saturn': weight=mass*9;
                                  break;
                    case 'uranus': weight=mass*8.7;
                                  break;
                    case 'neptune': weight=mass*11;
                                  break;
                                  
                }
                img.setAttribute('src',`assets/img/${planet}.png`);
                img.style.display='block';
                weightCircle.textContent=weight+ ' N';
                weightCircle.style.display='inline-block';
                warning.textContent='The weight of the object on ';
                const planetName=document.createElement('span');
                planetName.textContent=planet;
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