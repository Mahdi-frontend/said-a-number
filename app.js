let test = +prompt("enter a game(1=easy 2=meduim 3=hard)");

function easy(){
    let input1 = +prompt("enter a number")
    let random =Math.floor(Math.random()*10);
    while(input1!=random){
        let input1 = +prompt("enter a number");
        if(input1==random){
            console.log("thank for you");
            break
        }
    }
}
function meduim(){
    let input2 = +prompt("enter a number");
    let randomSecond = Math.floor(Math.random()*100)
    while(input2!=randomSecond){
        let input2 = +prompt("enter a number");
        if(input2==randomSecond){
            console.log("nice");
            break
        }
    }
}
function hard(){
    let input3 = +prompt("enter a number");
    let randomThird = Math.floor(Math.random()*1000);
    while(input3!=randomThird){
        let input3 = +prompt("enter a number");
        if(input3==randomThird){
            console.log("you are smart!!!");
            break
        }
    }
}

if(test ==1){
    easy()
}
else if(test==2){
    meduim()
}
else{
    hard()
}

