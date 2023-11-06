const amountbox = document.getElementById('amount');
const interestbox = document.getElementById('intrstrt');
const periodbox = document.getElementById('period');

const lblinterest = document.getElementById('tinterest');
const lbltotamount = document.getElementById('tamount');
const lblmnthlypyment = document.getElementById('tmonthlypay');
const lblmnthintrst =document.getElementById('minterest');

function calculate(){
    let loanamount = parseFloat(amountbox.value);
    let interestRate = parseFloat(interestbox.value);
    let duration = parseFloat(periodbox.value);

    if(amountbox.value===''||interestbox.value===''||periodbox.value===''){
        alert("Please fill empty element");
    }else if(loanamount<0||interestRate<0||duration<0){
        alert("Value can't be minus")   
    }else{
        interestRate=interestRate/12;
        let monthlinterest = (loanamount * interestRate/100);
        let totalinterest = monthlinterest * duration;
        let totalamount =  totalinterest + loanamount;
        let monthlypayment = totalamount / duration;

        lblinterest.innerHTML = totalinterest.toFixed(2);
        lblmnthintrst.innerHTML = monthlinterest.toFixed(2);
        lbltotamount.innerHTML = totalamount.toFixed(2);
        lblmnthlypyment.innerHTML = monthlypayment.toFixed(2);
    }
}

function reset(){
    amountbox.value='';
    interestbox.value='';
    periodbox.value='';
    lblinterest.innerHTML='0.00';
    lbltotamount.innerHTML='0.00';
    lblmnthlypyment.innerHTML='0.00';
    lblmnthintrst.innerHTML='0.00';
}