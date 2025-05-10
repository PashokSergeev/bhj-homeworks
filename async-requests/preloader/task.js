let xhr = new XMLHttpRequest();
xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

const items = document.getElementById("items");
const loader = document.querySelector(".loader");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const courses = JSON.parse(xhr.responseText).response['Valute'];

        for (const course of Object.values(courses)) {
            items.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">
                        ${course['CharCode']}
                    </div>
                    <div class="item__value">
                        ${course['Value']}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `)
        }

        loader.classList.remove('loader_active');

    }
}