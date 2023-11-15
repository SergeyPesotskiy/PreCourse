let exercises = {
    monday: {
        deadLift: {
            image: ['mondaydeadLiftimage1.png', 'mondaydeadLiftimage2.png', 'mondaydeadLiftimage3.png'],
            first: 'First approach with 50 kg x 10 repetitions',
            second: 'Second approach with 40 kg x 15 repetitions',
            third: 'Third approach with 35 kg x 12 repetitions',
            fourth: 'Fourth approach with 35 kg x 12 repetitions'
        },
        pullChinUps: {
            image: ['mondaypullChinUpsimage1.png', 'mondaypullChinUpsimage2.png', 'mondaypullChinUpsimage3.png'],
            first: 'First approach 10 repetitions',
            second: 'Second approach 15 repetitions',
            third: 'Third approach 12 repetitions',
            fourth: 'Fourth approach 12 repetitions'
        }
    },
    tuesday: {
        barbellSquats: {
            image: ['tuesdaybarbellSquatsimage1.png', 'tuesdaybarbellSquatsimage2.png', 'tuesdaybarbellSquatsimage3.png'],
            first: 'First approach with 50 kg x 10 repetitions',
            second: 'Second approach with 40 kg x 15 repetitions',
            third: 'Third approach with 35 kg x 12 repetitions',
            fourth: 'Fourth approach with 35 kg x 12 repetitions'
        },
        dumbbellLunges: {
            image: ['tuesdaydumbbellLungesimage1.png', 'tuesdaydumbbellLungesimage2.png', 'tuesdaydumbbellLungesimage3.png'],
            first: 'First approach 8 kg x 10 repetitions',
            second: 'Second approach 8 kg x 15 repetitions',
            third: 'Third approach 7 kg x 12 repetitions',
            fourth: 'Fourth approach 5 kg x 12 repetitions'
        }
    }
};

const root = document.querySelector('#root');

// Заголовок <h1>Exercises</h1> функция

function writeHeading(text) {
    const h1 = document.createElement('h1');
    h1.innerText = text;
    root.appendChild(h1);
}

// текст день занятий <div><h2></h2></div> функция

function writeDayOfclasses(dayOfclasses) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');

    h2.textContent = dayOfclasses;

    div.appendChild(h2);
    root.appendChild(div);
}

//текст день занятий <div><h4>Упражнение</h4></div> функция

function writesetOfexercises(setOfexercises) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');

    h4.textContent = setOfexercises;

    div.appendChild(h4);
    root.appendChild(div);
}

// текст подход и повтор <p>подход и повтор</p> функция

function writeanApproach(textanApproach) {
    const p = document.createElement('p');

    p.innerText = textanApproach;

    root.appendChild(p);
}

//рисуем картинки после текста подход и повтор <p>подход и повтор</p> функция

function writeImages(images) {
        const div = document.createElement('div');

    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');

        img.src = images[i];
        img.alt = 'Image ' + (i + 1);

        div.appendChild(img);
    }
    root.appendChild(div);
}

// Заголовок <h1>Exercises</h1> вызов функции

writeHeading('Exercises');

for (let dayOfclasses in exercises) {// текст день занятий

    //текст день занятий <div><h2>День</h2></div> вызов функции

    writeDayOfclasses(dayOfclasses);

    for (let setOfexercises in exercises[dayOfclasses]) {// текст упражнение

        //текст упражнение <div><h4>Упражнение</h4></div> вызов функции

        writesetOfexercises(setOfexercises);

        for (let anApproach in exercises[dayOfclasses][setOfexercises]) {// текст подход и повтор

            if (anApproach !== 'image') {// если не картинка выводим текст подход и повтор

            // текст подход и повтор вызов функции

            writeanApproach(exercises[dayOfclasses][setOfexercises][anApproach]);

            };

        };

        let images = exercises[dayOfclasses][setOfexercises].image;

        //рисуем картинки после текста подход и повтор <p>подход и повтор</p> вызов функция

        writeImages(images);

    };

}
