function calcularInteres() {
    var principal = parseFloat(document.getElementById('principal').value);
    var annualRate = parseFloat(document.getElementById('annualRate').value);
    var time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(time)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    var monthlyRate = annualRate / 12 / 100;

    var amount = principal * Math.pow((1 + monthlyRate), time);

    document.getElementById('resultado').innerHTML = "Monto final: " + amount.toFixed(2);

    var data = {
        principal: principal,
        annualRate: annualRate,
        time: time,
        amount: amount.toFixed(2)
    };

    localStorage.setItem('interesCompuestoData', JSON.stringify(data));
}

window.onload = function () {
    var storedData = localStorage.getItem('interesCompuestoData');
    if (storedData) {
        storedData = JSON.parse(storedData);
        document.getElementById('principal').value = storedData.principal;
        document.getElementById('annualRate').value = storedData.annualRate;
        document.getElementById('time').value = storedData.time;
        document.getElementById('resultado').innerHTML = "Monto final: " + storedData.amount;
    }
};
