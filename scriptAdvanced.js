const rates = {
    USD: 24.5,
    EUR: 25.3
};

let currentId = 1;

const companyA = data.bomboloExecutive
    .filter(emp => emp.name && emp.salary)
    .map(emp => ({
        id: currentId++,
        fullName: `${emp.name.first} ${emp.name.last}`,
        totalSalary: emp.salary.fix + emp.salary.bonus,
        company: "Firma A",
        isActive: emp.status === "ACTIVE"
    }));

const companyB = data.norwayLegion
    .filter(emp => emp.jmeno && emp.plat)
    .map(emp => {
        const salaryValue = parseInt(emp.plat.replace(/\D/g, ''));
        return {
            id: currentId++,
            fullName: emp.jmeno,
            totalSalary: salaryValue,
            company: "Firma B",
            isActive: emp.detaily.uvazek === "HPP"
        };
    });

const companyC = data.apolloDiscounted
    .filter(emp => emp.profile && emp.finance)
    .map(emp => {
        const { amount, currency } = emp.finance;
        const rate = rates[currency] || 1;
        return {
            id: currentId++,
            fullName: emp.profile.personal_data.full_name,
            totalSalary: amount * rate,
            company: "Firma C",
            isActive: true
        };
    });

const allEmployees = [...companyA, ...companyB, ...companyC];

allEmployees.forEach(emp => console.log("Zpracovano: " + emp.fullName));

console.log("--- TEST RUN ---");
if (allEmployees.length === 75) {
    console.log("Count OK");
} else {
    console.error("Count FAIL");
}