function sub(){
    let inputele = document.createElement("div");
    let username = document.querySelector("#id2").value;
    let password = document.querySelector("#id1").value;
    let email = document.querySelector("#id3").value;

    inputele.innerHTML="Username= "+username+"  Password= " + password +"  Email= "+email;

    let inputs=document.querySelector("#inputs");

    inputs.appendChild(inputele, firstchild.inputs);

    username.value="";
    email.value="";
    password.value="";

    


}