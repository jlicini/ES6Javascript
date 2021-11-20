function createBookShop(inventory){
    return{
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) =>
            total +book.price, 0
            )
        },
        priceForTitle (title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Eloquent JS', price: 15}
]

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

console.log("----")

function saveFile(url, data) {
    $.ajax({method: 'POST', url, data});
}

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data)

console.log("---")

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };