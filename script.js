var allEmployees = [];
var nextId = 1;

var rates = {
    USD: 24.5,
    EUR: 25.3
};

function processFirmaA() {
    for (var i = 0; i < data.bomboloExecutive.length; i++) {
        var emp = data.bomboloExecutive[i];
        
        if (!emp.name || !emp.salary) {
            console.error("Chyba: Chybejici data u zamestnance");
            continue;
        }

        var person = {
            id: nextId++,
            fullName: emp.name.first + " " + emp.name.last,
            totalSalary: emp.salary.fix + emp.salary.bonus,
            company: "Firma A",
            isActive: emp.status === "ACTIVE"
        };

        allEmployees.push(person);
        console.log("Zpracovan: " + person.fullName);
    }
}

function processFirmaB() {
    for (var i = 0; i < data.norwayLegion.length; i++) {
        var emp = data.norwayLegion[i];

        if (!emp.jmeno || !emp.plat) {
            console.error("Chyba: Neuplny zaznam ve Firme B");
            continue;
        }

        var platString = emp.plat;
        var jenCisla = "";
        for (var j = 0; j < platString.length; j++) {
            if (platString[j] >= "0" && platString[j] <= "9") {
                jenCisla += platString[j];
            }
        }

        var person = {
            id: nextId++,
            fullName: emp.jmeno,
            totalSalary: Number(jenCisla),
            company: "Firma B",
            isActive: emp.detaily.uvazek === "HPP"
        };

        allEmployees.push(person);
        console.log("Zpracovan: " + person.fullName);
    }
}

function processFirmaC() {
    for (var i = 0; i < data.apolloDiscounted.length; i++) {
        var emp = data.apolloDiscounted[i];

        if (!emp.profile || !emp.finance) {
            console.error("Chyba: Data u firmy C nejsou kompletni");
            continue;
        }

        var plat = emp.finance.amount;
        if (emp.finance.currency === "USD") {
            plat = plat * rates.USD;
        } else if (emp.finance.currency === "EUR") {
            plat = plat * rates.EUR;
        }

        var person = {
            id: nextId++,
            fullName: emp.profile.personal_data.full_name,
            totalSalary: plat,
            company: "Firma C",
            isActive: true
        };

        allEmployees.push(person);
        console.log("Zpracovan: " + person.fullName);
    }
}

processFirmaA();
processFirmaB();
processFirmaC();

console.log("--- TEST RUN ---");
if (allEmployees.length === 75) {
    console.log("Count OK");
} else {
    console.error("Count FAIL");
}