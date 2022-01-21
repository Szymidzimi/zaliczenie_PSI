const userDataId = 'userDataId';
const buttonToSave = document.querySelector("#save");
const statusDiv = document.querySelector(".status");
let form = document.querySelector('.form');
let formElements = form.elements;

const getData = () => {
    let record = {
        [userDataId]: {}
    };
    for (const element of formElements) {
        if (element.name.length > 0) {
            record[userDataId][element.name] = element.value;
        }
    }
    return record;
};

const statusFunction = mgs => {
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
    if (localStorage.key(userDataId)) {
        const sData = JSON.parse(localStorage.getItem(userDataId));
        for (const element of formElements) {
            if (element.name in sData) {
                element.value = sData[element.name];
            }
        }
        const mgs = "Uzupełniono o zapisane dane!";
        statusFunction(mgs);
    }
};
buttonToSave.addEventListener('click', e => {
    e.preventDefault();
    record = getData();
    localStorage.setItem(userDataId, JSON.stringify(record[userDataId]));
    const mgs = "Dane z formularza zapisano!";
    statusFunction(mgs);
});

document.onload = completedForm();