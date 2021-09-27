(function () {
    document.getElementById("save-button").addEventListener("click", function () { setValue() });
    document.getElementById("change-button").addEventListener("click", function () { changeGeneralValue() });
    document.getElementById("reset-button").addEventListener("click", function () { resetValues() });


    for (let i = 0; i < store.length; i++) {
        document.getElementById("skills").innerHTML += ` 
            <div class="grid">
                <label class='skill label' data-id="${i}">${store[i].key}</label>
                <input type="number" id="value-${i}" class="input skill-input" data-id="${i}" onchange="getNewValue(this, this.value)" disabled/>
                <p data-id="${i}">0</p>
            </div>
        `;

    };
    const skills = Object.values(document.getElementsByClassName("skill"));

    skills.forEach(skill => {
        skill.addEventListener("click", function (evt) {
            showSkill(evt);
        });
    });

})();

let generalValue, newValue;
const arrayValues = [];

const setValue = function () {
    const input = document.getElementById("heroe")

    const value = input.value ? input.value : 0;
    input.style.display = "block";

    toggleItem("save-button");
    toggleItem("change-button");
    toggleItem("points");
    toggleItem("heroe");

    const skills = Object.values(document.getElementsByClassName("skill-input"));

    skills.forEach(skill => {
        toggleInputEnabled(skill);
    });

    setGeneralValue(value);
};

const changeGeneralValue = function () {
    const input = document.getElementById("heroe")
    input.value = "";

    toggleItem("change-button");
    toggleItem("save-button");
    toggleItem("points");
    toggleItem("heroe");

    const skills = Object.values(document.getElementsByClassName("skill-input"));

    skills.forEach(skill => {
        toggleInputEnabled(skill);
    });

    setGeneralValue(0);
    resetValues();
}

const setGeneralValue = function (value) {
    generalValue = parseInt(value);

    setActualValue(generalValue);
};

const setActualValue = function (value) {
    document.getElementById("points").innerHTML = value;
}

const getNewValue = function (elem, value) {
    const index = elem.dataset.id;
    arrayValues[index] = parseInt(value);
    setNewValue(elem);
}

const setNewValue = function (elem) {
    let value = 0;

    arrayValues.forEach(val => {
        const verify = isNaN(val);
        if (!verify) {
            console.log("suma")
            value = value + val
        }
    });

    value = generalValue - value;
    if (value >= 0) {
        setActualValue(value);
    } else {
        alert("Haz excedido los puntos de héroe");
        elem.value = "";
    }
}

const resetValues = function () {
    const skills = Object.values(document.getElementsByClassName("skill-input"));

    skills.forEach(skill => {
        skill.value = "";
    });

    arrayValues.splice(0, arrayValues.length);
    setNewValue()
}

const showSkill = function (evt) {
    const skill = evt.currentTarget.innerHTML;
    const skillInfo = store.find(el => el.key === skill)
}

const toggleItem = function (elem) {
    const item = document.getElementById(elem);
    (item.style.display === "none") ? item.style.display = "block" : item.style.display = "none";
}

const toggleInputEnabled = function (input) {
    input.disabled = !input.disabled;
}

