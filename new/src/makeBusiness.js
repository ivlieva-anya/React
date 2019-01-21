export default class MakeBusiness {
    constructor(owner, director = 'Victor', cash, emp) {
        let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
    }    

}
    makeBusiness = new MakeBusiness(...['Sam', , money, employersNames]);

