


// document.getElementById('cash-out-btn-add-money').addEventListener('click', function (event) {
//     event.preventDefault();
//     const outMoney = document.getElementById('cash-out-amt').value;
//     const outPass = document.getElementById('cash-out-add-pass').value;
//     if (outPass === '1234') {
//         const prevAmount = document.getElementById('prev-amt').innerText;
//         const newOputAmount = parseFloat(outMoney);
//         const newPrevMoney = parseFloat(prevAmount);
//         const totalAmount=newPrevMoney-newOputAmount;
//        document.getElementById('prev-amt').innerText=totalAmount; 
//     }else{
//         alert('U cannot cashout money')
//     }
// })



document.getElementById('cash-out-btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addInputValue = getInputVlaue('cash-out-amt');
    const addInputPass = getInputVlaue('cash-out-add-pass');
    if (addInputPass === addInputValue) {
        const prevAmount = getInputVlaueInnerText('prev-amt');
        const newUpdateAmount = prevAmount - addInputValue;
        document.getElementById('prev-amt').innerText = newUpdateAmount;
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 Class="text-2xl font-bold">Cash Out</h4>
        <p>${addInputValue} withdraw. New balance ${newUpdateAmount}</p>
        `;
        document.getElementById('trans-out-form').appendChild(div);
    }

})


