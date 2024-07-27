function calculateCarbonFootprint() {
    const electricity = document.getElementById('electricity').value;
    const gas = document.getElementById('gas').value;
    const water = document.getElementById('water').value;
    const flights = document.getElementById('flights').value;
    const car = document.getElementById('car').value;

    // Factores de emisión aproximados (en kg CO2e)
    const electricityEmissionFactor = 0.233; // kg CO2e por kWh
    const gasEmissionFactor = 2.039; // kg CO2e por m³
    const waterEmissionFactor = 0.001; // kg CO2e por litro
    const flightEmissionFactor = 115; // kg CO2e por vuelo (promedio)
    const carEmissionFactor = 0.192; // kg CO2e por km

    const annualElectricity = electricity * 12 * electricityEmissionFactor;
    const annualGas = gas * 12 * gasEmissionFactor;
    const annualWater = water * 12 * waterEmissionFactor;
    const annualFlights = flights * flightEmissionFactor;
    const annualCar = car * 12 * carEmissionFactor;

    const totalAnnualCarbonFootprint = (annualElectricity + annualGas + annualWater + annualFlights + annualCar).toFixed(2);

    document.getElementById('result').innerText = `Tu huella de carbono anual es de ${totalAnnualCarbonFootprint} kg CO2e.`;
}
