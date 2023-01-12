/*
//### Создать свой *Ресторан / Магазин / Футбольную команду* используя:
1. Переменные - let, const 
2. Типы данных - string, number, boolean, null, undefined 
3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже)
*/
const ernstKonstantin = {
    larstname: 'Ernst',
    firstname: 'Konstantine',
    middleName: 'Lvovich',
    dateOfBirth: new Date(1961, 1, 6)
}

const nazarovDmitriy = {
    larstname: 'Nazarov',
    firstname: 'Dmitriy',
    middleName: 'Yurievich',
    dateOfBirth: new Date(1957, 6, 4)
}

const nagievDmitriy = {
    larstname: 'Nagiev',
    firstname: 'Dmitriy',
    middleName: 'Vladimirovich',
    dateOfBirth: new Date(1967, 3, 4)
}

const bobroff = {
    larstname: 'Bobrov',
    firstname: 'Valeriy',
    middleName: 'Alekseevich',
    dateOfBirth: new Date(1997, 10, 14)
}

const naumoff = {
    larstname: 'Naumoov',
    firstname: 'ALeksander',
    middleName: 'Rostislavovich',
    dateOfBirth: new Date(2007, 09, 24),
}

const myRestaurant = {
    name: 'Yason and Alkonavts',
    openDate: new Date(2011, 2, 1),
    closeDate: undefined,
    numberOfSeats: 500,
    wardrobeIsAvailable: false,
    serviceStartsAtIn24HourFormat: '10:00',
    serviceEndsAtIn24HourFormat:   '03:00',
    cuisines: undefined,
    chef: undefined,
    owner: nagievDmitriy,
    waitersList: undefined
};

myRestaurant.closeDate = new Date(2021, 2, 2);
myRestaurant.cuisines = [bobroff, naumoff];
myRestaurant['chef'] = nazarovDmitriy;
myRestaurant.waitersList = [bobroff, naumoff];
myRestaurant.executiveDirector = ernstKonstantin; 
myRestaurant['actualAddress'] = 'Stroiteley street 3';
myRestaurant['formalAddress'] = 'Starokolpakskyi pereulok 15';
myRestaurant['cuisines'] = ['Europa', 'Caucasus', 'Asia', 'Italia'];

console.log(myRestaurant['chef'].larstname);
console.log(myRestaurant['actualAddress']);
console.log(myRestaurant['cuisines'][3]);

let messageYes = 'Wardrobe is available';
let messageNo = 'Wardrobe is not available';

if (myRestaurant['wardrobeIsAvailable']) 
    console.log(messageYes);
else    
    console.log(messageNo);       

/*
### Работа с объектами

Напишите код, выполнив задание из каждого пункта отдельной строкой:

1. Создайте пустой объект `vehicle`.
2. Добавьте свойство `brandName` со значением `BMW`(либо любая ваша любимая марка).
3. Добавьте свойство `model` со значением `X5`(либо любая ваша любимая модель).
4. Измените значение свойства `model` на `M1`.
5. Удалите свойство `model` из объекта.
*/
const vehicle = {};
vehicle['brandName'] = 'Toyota';
vehicle['model'] = 'Camry';
vehicle['model'] = 'Corolla';
delete vehicle.model;

console.log(vehicle);

/*
### Работа с перебором свойств в объектах

1. Создайте объект `salaries`, где ключом(свойстовом) является имя, a значением зарплата.
*/
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
};

/*
2. С помощью for .. in  просуммируйте все значения и выведите в консоли.
*/
let sumOfSalaries = 0;

for (name in salaries) {
    sumOfSalaries += salaries[name];
}

console.log('summa of salaries is equal to ' + sumOfSalaries);
