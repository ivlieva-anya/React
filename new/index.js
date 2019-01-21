const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(elem =>{
    return (elem.length > 0 && elem.length != '')
});
employersNames = employersNames.map(elem => elem.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
function calcCash(own=0,everyCash) {
    let total = own;
    everyCash.forEach(e => {
        total += +e;
    });
    return total;
}
let money = calcCash(null,sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = [...sponsors.eu,...sponsors.rus, 'unexpected sponsor'];
    console.log(We have a business. Owner: ${owner} , director: ${director}. Our budget: ${cash}. And our employers: ${emp});
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.);
}
makeBusiness(...['Sam', , money, employersNames]);