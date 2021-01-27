// login button form
const firstlogin = document.getElementById("login_submit");
firstlogin .addEventListener("click",function(){
    // console.log("logiin button click")
    document.getElementById("login_area").style.display="none";
    document.getElementById("transiton_area").style.display="block";
})
// transition area start
// const secondlogin = document.getElementById("deposit_btn");
// secondlogin.addEventListener("click",function(){
//     const depositeinpu =parseFloa(document.getElementById("deposit_inpu").value);

// const  currentdepo  = parseFloat(document.getElementById("curent_deposite").innerHTML);
// const totalbalance =parseFloat(document.getElementById("total_amount").innerHTML);
// console.log(totalbalance);
// })
const secondsub = document.getElementById("deposit_btn");
secondsub.addEventListener("click", function(){
    const depositinput = parseFloat(document.getElementById("deposit_inpu").value);
    const currentdepo = parseFloat(document.getElementById("curent_deposite").innerHTML);
    const totaldepo = parseFloat(document.getElementById("total_amount").innerHTML);
   
    document.getElementById("curent_deposite").innerHTML=currentdepo+depositinput;
    document.getElementById("total_amount").innerHTML=totaldepo+depositinput;
    document.getElementById("deposit_inpu").value="";

})
const thirdsubmit = document.getElementById("withdrow_btn");
thirdsubmit.addEventListener("click", function(){
    const widthinput =parseFloat(document.getElementById("withdraw_input").value);
    const widthbalance =parseFloat(document.getElementById("withdraw").innerHTML);
    const totalbalance = parseFloat(document.getElementById("total_amount").innerHTML);
    document.getElementById("withdraw").innerHTML=widthbalance+widthinput;
    document.getElementById("total_amount").innerHTML=totalbalance-widthinput;
    document.getElementById("withdraw_input").value="";
})