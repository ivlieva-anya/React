
export default function Employers(){


let employersNames = employers.filter(elem =>{
    return (elem.length > 0 && elem.length != '')
});
employersNames = employersNames.map(elem => elem.toLowerCase().trim());
}