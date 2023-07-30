let Ops = document.getElementById("output-screen");

function display(num){
    Ops.value += num;
}

function Calculate(){
    try{
        Ops.value = eval(Ops.value);
    }
    catch(err)
    {
        alert("Wrong Input");
    }
}

function Clear(){
    Ops.value = "";
}

function del(){
    Ops.value = Ops.value.slice(0,-1);
}

function log(){
    Ops.value = Math.log(Ops.value);
}

function pow(){
    Ops.value = Math.pow(Ops.value,2);
}

function pi(){
    Ops.value = 3.14;
}

function sqrt(){
    Ops.value = Math.sqrt(Ops.value);
}

function e(){
    Ops.value = 2.718;
}

