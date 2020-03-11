const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#product-price');
const btnSave = document.querySelector('#btn-save');
const btnClear = document.querySelector('#btn-clear');
const productList = document.querySelector('#product-list');
const totalOutput = document.querySelector('#total');

let total = 0;

const createNewProduct = (name, price) => {
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-header');
    newProductItem.setAttribute('color','secondary');
    const textItem = document.createElement('h4');
    textItem.textContent = name + ': $ ' + price;
    newProductItem.appendChild(textItem);
    ionCard.appendChild(newProductItem);
    productList.appendChild(ionCard);
};

const clearInputs = () => {
    productName.value = '';
    productPrice.value = '';
};

const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Data';
    alert.subHeader = 'Please verify your inputs';
    alert.message = 'Incorrect Name or Price';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

const isEmpty = str => !str.trim().length;

btnSave.addEventListener('click', () => {
    const name = productName.value;
    const price = productPrice.value;

    if(isEmpty(name) || price <= 0 || isEmpty(price)){
        presentAlert();
        return;
    }

    createNewProduct(name, price);
    total += +price;
    totalOutput.textContent = total;
    clearInputs();
});

btnClear.addEventListener('click', clearInputs);