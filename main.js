// Ceník
/*
Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
*/

let elementPlan1 = document.getElementById('plan1')
let elementPlan2 = document.getElementById('plan2')
let elementPlan3 = document.getElementById('plan3')

const selectPlan = (planNumber) => {
    let target = planNumber.target
    if (String(target.id) === 'plan1') {
        elementPlan1.classList.add('plan--selected')
        elementPlan2.classList.remove('plan--selected')
        elementPlan3.classList.remove('plan--selected')
    } else if (String(target.id) === 'plan2') {
        elementPlan1.classList.remove('plan--selected')
        elementPlan2.classList.add('plan--selected')
        elementPlan3.classList.remove('plan--selected')
    } else if (String(target.id) === 'plan3') {
        elementPlan1.classList.remove('plan--selected')
        elementPlan2.classList.remove('plan--selected')
        elementPlan3.classList.add('plan--selected')
    }
}
