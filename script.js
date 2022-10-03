"use strict";
//Ex-1 install Nodejs and VsCode
//Ex-2
const personMsg = "Eric";
console.log(`"Hello ${personMsg}, would you like to learn some Python today?”`);

//Ex-3
const perName = "abu bakkar";
const lowerCase = perName.toLowerCase();
const upperCase = perName.toUpperCase();
const titleCase = perName
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(" ");
console.log(titleCase);
console.log(upperCase);
console.log(lowerCase);

//Ex-4
console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
);

//Ex-5
const authorName = "Albert Einstrin";
console.log(
  `${authorName} once said, “A person who never made a mistake never tried anything new.”`
);

//Ex-6
const strip = " \n\t Abu bakkar \n\t ";
console.log(strip);
console.log(strip.trim());

//Ex-7,8
console.log(5 + 3);
console.log(4 * 2);
console.log(64 / 8);
console.log(11 - 3);

//Ex-9
const favNumber = 10;
console.log(`My favourite number is ${favNumber}`);

//Ex-10
//Here is the program which will add to numbers
console.log(3 + 44);
//Here is the program which will sum all the elements of an array.
const arr = [34, 11, 44, 566, 13];
const redArr = arr.reduce((acc, sum) => acc + sum, 0);
console.log(redArr);

//Ex-11
const names = ["Arslan", "Amanat", "Zain"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Ex-12
names.forEach((name) => {
  console.log(`Hello ` + name + ` How are you?`);
});

//Ex-13
const transportationMode = ["MoterCycle", "Car", "Bus"];
const [Mode1, Mode2, Mode3] = transportationMode;
console.log(`“I would like to own a Honda ${Mode1}.”`);
console.log(`“I would like to own a ${Mode2} in future.”`);
console.log(`"I would like to travel by ${Mode3}"`);

//Ex-14
const peopleInvitedToDinner = ["Zain", "Arslan", "Amanat"];
peopleInvitedToDinner.forEach((n) => {
  console.log(`Hey ` + n + ` I would like to invite you to dinner`);
});

//Ex-15
console.log(peopleInvitedToDinner[1] + ` Will not come to dinner`);
peopleInvitedToDinner[1]='Ali';
peopleInvitedToDinner.forEach((n)=>{
    console.log(`Hey `+n+` I would like to invite you to dinner`)
})

//Ex-16
peopleInvitedToDinner.forEach((n)=>{
    console.log(`Hey `+n+` I have found a bigger dining table come to table 6`)
})
//At start of array
peopleInvitedToDinner.unshift('Nawaz');
//at middle of array
peopleInvitedToDinner.splice(2,0,'Hassan');
//at the end of array
peopleInvitedToDinner.push('Ashraf');
//printing message agian to all guessts
peopleInvitedToDinner.forEach((n)=>{
    console.log(`Hey `+n+` I would like to invite you to the dinner`)
});

//Ex-17
console.log(peopleInvitedToDinner)
console.log(`I can invite only two people for the dinner`);

//part-2
const removePeople=peopleInvitedToDinner.splice(2);
console.log(peopleInvitedToDinner);
console.log(removePeople);
removePeople.forEach((n)=>{
    console.log(`Hey `+n+` I cannot invite you to the dinner so sorry for that.`)
})
peopleInvitedToDinner.forEach((n)=>{
    console.log(`Hello `+n+` You are still invited to the dinner`)
});
peopleInvitedToDinner.splice(0);
console.log(peopleInvitedToDinner);

//Ex-18
const placesToVisit=['Makkah','Madina','Maldives','Portugal','Kashmir'];
console.log(placesToVisit);
const aplhaBeticalOrder=[...placesToVisit].sort();
console.log(aplhaBeticalOrder);
console.log(placesToVisit);
const reverseAlphabeticalOrder=aplhaBeticalOrder.sort().reverse();
console.log(reverseAlphabeticalOrder);
console.log(placesToVisit);
const reverseOrder=placesToVisit.reverse();
console.log(reverseOrder);
const originalOrder=reverseOrder.reverse();
console.log(originalOrder);
console.log(placesToVisit.sort())
console.log(placesToVisit.sort().reverse())

//Ex-19
console.log(`I would like to visit these `+placesToVisit.length+` places`);
console.log(`I have invited `+peopleInvitedToDinner.length+` to the dinner`);

//Ex-20
const mountains=['K-2','Nanga Parbat','Mount Everest'];
console.log(mountains);

//Ex-21
const obj={
    mountain1:'K-2',
    mountain2:'Nanga Parbat',
    mountain3:'Mount Everest'
};
console.log(Object.values(obj));

//Ex-22
const arrindex=[23,22,45,22,44,55];
console.log(arrindex[6])   //index Error
console.log(arrindex[6] || 'Item not found in array') //solve using short circuting 

//Ex-23
const name='Arslan';
console.log(name=='Arslan');  //true
console.log(name=='arslan');  //false
const number=+'23';
console.log(number==='23');  //false because === operator will check value+data type
console.log(number=='23')    //true because == operator will check only value not data type
const num1='23';
const num2=23;
console.log(typeof num1==typeof num2);   //false
console.log(typeof +num1==typeof num2);  //true
const name1='Ali';
const name2='Hassan';
console.log(name1.length==name2.length);  //false
const n1=34;
const n2=34;
console.log(n1==n2)   //true
const num3=3244427467296347296;
const num4=BigInt(37384728638924792);
console.log(typeof num3==typeof num4);  //false
console.log('x'=='x')  //true

//Ex-24
const str1='This is a string';
const str2='This is another string';
console.log(str1==str2)
const str3='string';
const str4='String';
console.log(str3==str4)
console.log(str3==str4.toLowerCase())
const n3=34;
const n4=38;
console.log(n3==n4);
console.log(n3>n4);
console.log(n3<n3);
console.log(n3>=n4);
console.log(n3<=n4);
console.log(n3!=n4);
const age=23;
if(age>=18){
    console.log(true)
}else{
    console.log(false)
};
const numArrr=[34,11,44,2,4,3];
console.log(numArrr.includes(44));  //true
console.log(numArrr.includes(56));  //false

//Ex-25
let alien_color='red';
if(alien_color=='green'){
    console.log('player earned 5 points for shooting alien')
}if(alien_color!=='green'){
    console.log('')
}

//Ex-26
if(alien_color==='green'){
    console.log('player earned 5 points for shooting alien ')
}else if(alien_color!=='green'){
    console.log('player earned 10 points for shooting alien')
}
alien_color='green';
if(alien_color==='green'){
    console.log('player earned 5 points for shooting alien ')
}else if(alien_color!=='green'){
    console.log('player earned 10 points for shooting alien')
}

//Ex-27
if(alien_color=='green'){
    console.log('player earned 5 points')
}else if(alien_color=='yellow'){
    console.log('player earned 10 points')
}else if(alien_color='red'){
    console.log('player earned 15 points')
};

//Ex-28
const Age=14;
if(Age<2){
    console.log('person is a baby')
}else if(Age>=2 && Age<4){
    console.log('person is a toddler')
}else if(Age>=4 && Age<13){
    console.log('person is a kid')
}else if(Age>=13 && Age<20){
    console.log('person is a teenager')
}else if(Age>=20 && Age<65){
    console.log('person is an adults')
}else if(Age>65){
    console.log('person is an elder')
}else{
    console.log('Enter Valid age')
}

//Ex-29
const fruits=['apple','banana','mango'];
if(fruits.includes('apple')){
    console.log('I eat one apple in a day')
}if((fruits.includes('banana'))){
    console.log('banana is my favourite fruit')
}if(fruits.includes('mango')){
    console.log('mango is my favourite fruit to eat in summer')
}if(fruits.includes('stawberry')){
    console.log('I like stawberry shake to drint')
}if(fruits.includes('cherry')){
    console.log('I dont like cherry')
}

//Ex-30
const usernames=['admin','eric','donald','smith','jonas'];
if(usernames.includes('admin')){
    console.log(`Hello admin, would you like to see a status report?`)
};
const[user1,user2,user3,user4,user5]=usernames;
const userArr=[,user2,user3,user4,user5];
if(usernames!=='admin'){
    userArr.forEach((n)=>{
        console.log(`Hello `+n+` Thanks for logging in`)
    })
};

//Ex-31 
usernames.splice(0)
if(usernames.length==0){
    console.log('we need to find some user')
}

//Ex-32
const current_user=['Ali','Hassan','Noman','Zain','Arslan'];
const new_users=['Ali','Qaiser','Zia','Razzaq','Talha'];
new_users.forEach((n)=>{
    if(n==current_user[0]){
        console.log(`Hello `+n+` user already exist you need to enter some other name`)
    }if(n!=current_user[0]){
        console.log(`Hello `+n+` you can use this name`)
    }
})

//Ex-33
const ordinalNumber=[1,2,3,4,5,6,7,8,9];
ordinalNumber.forEach((n)=>{
    if(n==1){
       console.log(`${n}st`)
    }else if(n==2){
        console.log(`${n}nd`)
    }else if(n==3){
        console.log(`${n}rd`)
    }else if(n>3){
        console.log(`${n}th`)
    }
})

//Ex-34
const pizzas=['chicken tandoori','chicken supreme','crown crust'];
for(let i=0; i<pizzas.length; i++){
    console.log(`I like `+pizzas[i]+` Pizza`)
}
console.log(`I really like crown crust pizza`);
console.log(`I dont like cheese crust pizaa`);
console.log(`I love chicken supreme pizaa`);

//Ex-35
const animals=['Dog','Cat','Horse'];
for(let i=0; i<animals.length; i++){
    if(i==2){
    console.log(animals[0]+` is a good animal`);
    console.log(animals[1]+` is a beautiful animal`);
    console.log(animals[2]+` is very useful animal`);
    }
};
console.log(...animals+` all belongs to same type of animals`)

//Ex-36+Ex-37
function make_shirt(size='large',message='I love javascript'){
   return console.log(size,message)
};
make_shirt('small','BlackCaps');
make_shirt('medium','Green Shrits');
make_shirt('large','Tiny');
make_shirt('large');
make_shirt('medium')

//Ex-38
function describe_city(cityName,country="Pakistan"){
    return console.log(cityName+` is located in `+country)
}
describe_city('Lahore','Pakistan');
describe_city('Islamabad');
describe_city('Mumbai','India');

//Ex-39
function city_country(city,country){
    return console.log(`"${city},${country}"`)
};
city_country('Lahore','Pakistan');
city_country('Islamabad','Pakistan');
city_country('London','Uk');

//Ex-40
function make_album(artist_name,album_title,number_of_tracks=0){
  return console.log({
    artist_name,
    album_title,
    number_of_tracks
  })
};
make_album('KK','Junoon')
make_album('Atif Aslam','Sukoon',7);
make_album('Bilal Saeed','Baari');

//Ex-41
const magicians=['mg-1','mg-2','mg-3'];
show_magicians.apply(this,magicians)
function show_magicians(){
    for(let i=0; i<magicians.length; i++){
        console.log(magicians[i])
    }
};
show_magicians();

//Ex-42
make_greet.apply(this,magicians)
function make_greet(){
    for(let i=0; i<magicians.length; i++){
        console.log(`Hello `+magicians[i]+` hops you are doing well`)
    }
};
// show_magicians=make_greet;
show_magicians();
console.log(`..........Excercise43..........`)

//Ex-43
const copyarr=[...magicians];
make_greet(copyarr);
show_magicians(copyarr)
show_magicians(magicians)

//Ex-44
const sandwichItems=['chicken','slice','chilli sauce'];
sandwich(sandwichItems)
function sandwich(param){
    for(let i=0; i<param.length; i++){
        if(i==1)
        console.log(`You have ordred a sandwich that includes `+`${param[0]} ${param[1]} ${param[2]}`)
    }
};
sandwich();

//Ex-45
function car(manufacturer,modelname,color='',milage=``){
    return console.log( {
        manufacturer,
        modelname,
        color,
        milage
    })
};
car('Tesla','T-6','Green');
car('Tesla','T-2');
car('Honda','Hv-2','','45Km/ltr');




