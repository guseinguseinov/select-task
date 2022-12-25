const select = document.getElementById('names');
const table = document.querySelector('.table-body');

data = [
    {
        name: "Nermin",
        lastName: "Huseynzade",
        email: "superEmail@gmail.com",
        age: 20
    },
    {
        name: "Azad",
        lastName: "Shahveledov",
        email: "superEmail@gmail.com",
        age: 20
    },
    {
        name: "Osman",
        lastName: "Abdullazade",
        email: "superEmail@gmail.com",
        age: 20
    },
];

const showData = (data) => {
    table.innerHTML = '';
    data.forEach((d) => {
        table.innerHTML += `
            <tr>
                <td>${d.name}</td>
                <td>${d.lastName}</td>
                <td>${d.email}</td>
                <td>${d.age}</td>
            </tr>
        `
    });
}


select.addEventListener('change', event => {
    const selectValue = event.target.value;
    if (selectValue != "All") {
        const newData = data.filter((obj) => obj.name == event.target.value);
        showData(newData)
    }
    else {
        showData(data);
    }
});

showData(data);