function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname;
    this.Itemimage=Itemimage;
    this.Itemcolor= Itemcolor;
    this.Itemdamage=Itemdamage;
}

const sword = new items('Energy Sword','~','blue',50);
const cannon = new items('Fuel Rod Cannon','?','blue',60);
const icannon = new items('Incineration Cannon','&','yellow',10);


console.log(sword);


const master = {
    image:'masterchief.jpg',
    weigth:10,
    speed:100,
    sword:{
        damage:30
    },
    fcannon:{
        damage:50
    },
    icannon:{
        damage:70
    },
    points:200,
    die:function(){
        return 'Master Chief never dies \n But Arbiter Wins';
    }
}

const arbiter = {
    image:'arbiter.jpg',
    weigth:20,
    speed:80,
    sword:{
        damage:30
    },
    fcannon:{
        damage:50
    },
    icannon:{
        damage:70
    },
    points:200,
    die:function(){
        return 'Arbiter is Dead \n Master Chief Wins';
    }
}

let aswordAttackPoints = arbiter.sword.damage;
let mswordAttackPoints = master.sword.damage;
let afcannonAttackPoints = arbiter.fcannon.damage;
let mfcannonAttackPoints = master.fcannon.damage;
let aicannonAttackPoints = arbiter.icannon.damage;
let micannonAttackPoints = master.icannon.damage;

function aenergySword() {
    master.points = master.points-aswordAttackPoints;
    console.log('Master Chief is attacked .... points: '+master.points);
    if(master.points<=0)
    {
        document.getElementById('message').innerHTML=`${master.die()}`
        console.log(master.die());
    }
}    
function menergySword() {
    arbiter.points = arbiter.points-mswordAttackPoints;
    console.log('Arbiter is attacked .... points: '+arbiter.points);
    if(arbiter.points<=0)
    {
        document.getElementById('message').innerHTML=`${arbiter.die()}`
        console.log(arbiter.die());
    }
}
function afCannon() {
    master.points = master.points-afcannonAttackPoints;
    console.log('Master Chief is attacked .... points: '+master.points);
    if(master.points<=0)
    {
        document.getElementById('message').innerHTML=`${master.die()}`
        console.log(master.die());
    }
}    
function mfCannon() {
    arbiter.points = arbiter.points-mfcannonAttackPoints;
    console.log('Arbiter is attacked .... points: '+master.points);
    if(arbiter.points<=0)
    {
        document.getElementById('message').innerHTML=`${arbiter.die()}`
        console.log(arbiter.die());
    }
}    
function aiCannon() {
    master.points = master.points-aicannonAttackPoints;
    console.log('Master Chief is attacked .... points: '+master.points);
    if(master.points<=0)
    {
        document.getElementById('message').innerHTML=`${master.die()}`
        console.log(master.die());
    }
}  
function miCannon() {
    arbiter.points = arbiter.points-micannonAttackPoints;
    console.log('Arbiter is attacked .... points: '+arbiter.points);
    if(arbiter.points<=0)
    {
        document.getElementById('message').innerHTML=`${arbiter.die()}`
        console.log(arbiter.die());
    }  
}

//arbiterAttacks();
//arbiterAttacks();
