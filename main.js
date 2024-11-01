const checkbox = document.getElementById("checkbox");
const planBasico = document.getElementById("plan-básico");
const planEstandar = document.getElementById("plan-estándar");
const planPremium = document.getElementById("plan-premium");
checkbox.addEventListener("click",()=>{
    planBasico.textContent =planBasico.textContent ==="$60.000"? "$5.000" : "$60.000";
    planEstandar.textContent =planEstandar.textContent ==="$70.000"? "$6.000" : "$70.000";
    planPremium.textContent =planPremium.textContent ==="$80.000"? "$7.000" : "$80.000";
})