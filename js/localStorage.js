const url = location.href;
const formIdentifier = `${url}form`;
const buttonToSave = document.querySelector("#save");
const statusDiv = document.querySelector(".status");
let form = document.querySelector('.form');
let formElements = form.elements;

const getData = () => {
    let record = {
        [formIdentifier]: {}
    };
    for (const element of formElements) {
        if (element.name.length > 0) {
            record[formIdentifier][element.name] = element.value;
        }
    }
    return record;
};

const displayAlert = mgs => {
    const el = document.createElement("span");
    el.classList.add('ok');
    el.textContent = mgs;
    statusDiv.appendChild(el);
    setTimeout(function () {
        statusDiv.removeChild(el);
    }, 1500);
};
//wprowadza zapamętane dane
const completedForm = () => {
    if (localStorage.key(formIdentifier)) {
        const sData = JSON.parse(localStorage.getItem(formIdentifier));
        for (const element of formElements) {
            if (element.name in sData) {
                element.value = sData[element.name];
            }
        }
        const mgs = "Uzupełniono o zapisane dane!";
        displayAlert(mgs);
    }
};
buttonToSave.addEventListener('click', e => {
    e.preventDefault();
    record = getData();
    localStorage.setItem(formIdentifier, JSON.stringify(record[formIdentifier]));
    const mgs = "Dane z formularza zapisano!";
    displayAlert(mgs);
});

document.onload = completedForm();