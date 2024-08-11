//Factory function

/*function create(radius)
{
    return{
    radius,
   draw:function(){
   console.log('draw');
   }
    } ; 
}
const circle=create(1);


//Constructor function
function Circle(radius)
{
    this.radius=radius;
    this.draw=function()
    {
        console.log('draw');
    }
}
const another=new Circle(1); 



/* let person={
 name:"DD",
 age:21,
 interest:['Creating,teaching'],
 isALive:true,
 address:
 {
    city:"CHennai",
    State:"Tamil",
 },
 greeting:function()
 {
    let msg='My name is ${name}';
    console.log(msg);
 }
};

//console.log(person.name);
//console.log(person.address.address);

//console.log(person.greeting);*/


class Car{
    constructor(color,max_speed,acceleration,tyre_friction)
    {
        this.color=color;
        this.max_speed=max_speed;
        this.acceleration=acceleration;
        this.tyre_friction=tyre_friction;
        this.is_engine_started=false;
        this.current_speed=0;
    }
    start_engine()
    {
        this.start_engine=true;
    }
    stop_engine()
    {
        this.stop_engine=false;
        this.current_speed=0;
    }
    accelerate()
    {
        if(this.is_engine_started)
        {
            this.current_speed+=this.acceleration;
        
        if(this.current_speed>this.max_speed)
        {
            this.current_speed=this.max_speed;
        }
    }
    else{
        console.log("Please start the engine");
    }   
}
apply_brakes()
{
    if(this.is_engine_started)
    {
        this.current_speed-=this.tyre_friction;
    
    }
    else{
        console.log("Please start the engine");
    }
}

sound_horn()
{
    if(this.is_engine_started)
    {
    console.log("Honk honk");
    }
    else{
        console.log("Car has not started yet");
    }
}

}

class Truck extends Car{
  constructor(color,max_speed,acceleration,tyre_friction,max_cargo_weight)
  {
    super(color,max_speed,acceleration,tyre_friction);
    this.max_cargo_weight=max_cargo_weight;
    this.load=0;
    }
    load_cargo(cargo_weight)
    {
     if(!this.is_engine_started) {
        if(this.load+cargo_weight<=this.max_cargo_weight)
            {
                this.load+=this.cargo_weight;
            }  
            else{
                console.log("Cannot load cargo more than max limit: ${max_cargo_weight}");
            }
    }
    else{
        console.log("Cannot load cargo during motion");
    }
  }
  
  unload_cargo(cargo_weight)
  {
    if(!this.is_engine_started)
    {
        this.load-=cargo_weight;
        if(this.load<0)
        {
            this.load=0;
        }
    }
        else{
            console.log("Cannot unload cargo during motion");
        }
    
  }
  sound_horn()
  {
    if(this.is_engine_started)
    {
        console.log("Honk Honk");
    }
    else{
        console.log("Car has not started yet");
    }
  }
}

