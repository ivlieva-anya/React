export default function Money(){
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
    
}