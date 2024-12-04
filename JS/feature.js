
// document.getElementById('feature-out-mny').addEventListener('click',function(){
//     document.getElementById('out-form').classList.remove('hidden');
//     document.getElementById('add-form').classList.add('hidden');
// })

// document.getElementById('feature-add-mny').addEventListener('click',function(){
//    document.getElementById('out-form').classList.add('hidden');
//    document.getElementById('add-form').classList.remove('hidden');
// })

function getInputVlaue(id) {
    const ConstGetInputVlaue = document.getElementById(id).value;
    const NewConstGetInputVlaue = parseFloat(ConstGetInputVlaue);
    return NewConstGetInputVlaue;
}
function getInputVlaueInnerText(id) {
    const ConstgetInputVlaueInnerText = document.getElementById(id).innerText;
    const NewConstGetInputVlaueInnerText = parseFloat(ConstgetInputVlaueInnerText);
    return NewConstGetInputVlaueInnerText;
}

function showSection(id) {

    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('out-form').classList.add('hidden');
    document.getElementById('trans-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}


document.getElementById('feature-add-mny').addEventListener('click', function () {
    showSection('add-form');
})
document.getElementById('feature-out-mny').addEventListener('click', function () {
    showSection('out-form');
})
document.getElementById('feature-transaction').addEventListener('click', function () {
    showSection('trans-form');
})