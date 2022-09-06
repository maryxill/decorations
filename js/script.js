document.getElementById('btnProduct').onclick = function() {
    calcCost();
}

function calcCost() {
    var sP = document.getElementById('selectProduct').value;
    var qP = document.getElementById('quanProduct').value;
    var total = sP * qP;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

    if (sP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        return;
    }
}