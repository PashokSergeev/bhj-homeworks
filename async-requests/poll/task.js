const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send(null);

const card = document.querySelector('.card');

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const answer = JSON.parse(xhr.responseText);
        const answerData = answer.data;

        //Код для смены вопроса если он повторяется
        if (answerData.title === localStorage.getItem('answerTitle')) {
            location.reload();
        }
        localStorage.setItem('answerTitle', answerData.title)

        card.insertAdjacentHTML('beforeend', `
        <div class="poll">
          <div class="poll__title" id="poll__title">
            ${answerData.title}
          </div>
          <div class="poll__answers poll__answers_active" id="poll__answers">
          </div>
        </div>
        `)
        const pollAnswers = document.getElementById('poll__answers')
        for (const ans of answerData.answers) {
            pollAnswers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
              ${ans}
            </button>
            `)
        }

        const pollAnswersButton = document.querySelectorAll('.poll__answer')
        pollAnswersButton.forEach((button) => {
            button.addEventListener('click', (e) => {
                alert('Спасибо, ваш голос засчитан!');
                const xhrPost = new XMLHttpRequest();
                xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrPost.send(`vote=${answer.id}&answer=${answerData.answers.indexOf(button.textContent.trim())}`);
                xhrPost.onreadystatechange = function () {
                    if (xhrPost.readyState === 4 && xhr.status === 200) {
                        const answer = JSON.parse(xhrPost.responseText).stat;
                        console.log(answer);
                        const sumVotes = answer.reduce(function (acc, curr) {
                            return acc + curr.votes;
                        }, 0)
                        pollAnswers.replaceChildren('');
                        for (const answerElement of answer) {
                            pollAnswers.insertAdjacentHTML('beforeend', `
                                <div class="poll__answer">
                                  ${answerElement.answer} : <b >${(answerElement.votes*100/sumVotes).toPrecision(2)}%</b>
                                </div>
                            `)
                        }
                    }
                }

            })
        })
    }
}
