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
// это сам
document.write('<h1>', 'Exercises', '</h1>');

for (let dayOfclasses in exercises) { // день занятий

    document.write('<div>');
    document.write('<h2>', dayOfclasses, '</h2>');

    for (let setOfexercises in exercises[dayOfclasses]) { // упражнение

        document.write('<div>');
        document.write('<h4>', setOfexercises, '</h4>');

        for (let anApproach in exercises[dayOfclasses][setOfexercises]) { // подход и повторить

            if (anApproach !== 'image') {

                document.write('<p>', exercises[dayOfclasses][setOfexercises][anApproach], '</p>');

            };

        };

        let images = exercises[dayOfclasses][setOfexercises].image;

        for (let i = 0; i < images.length; i++) {
            document.write('<img src="' + images[i] + '" alt="Image ' + (i + 1) + '">'); // картинки
        };
        document.write('</div>');
    };
    document.write('</div>');
}

// это гптчат, функции зажал

/*
const w = (t) => document.write(t);

w('<h1>Exercises</h1>');

for (let [dayOfClasses, sets] of Object.entries(exercises)) {
  w(`<div><h2>${dayOfClasses}</h2>`);

  for (let [setOfExercises, details] of Object.entries(sets)) {
    w(`<div><h4>${setOfExercises}</h4>`);
    Object.values(details).filter((key) => key !== 'image').forEach((approach) => w(`<p>${approach}</p>`));
    details.image.forEach((image, index) => w(`<img src="${image}" alt="Image ${index + 1}">`));
    w('</div>');
  }

  w('</div>');
}
*/
// это гптчат, функции
/*
function writeHeading(text) {
  document.write('<h1>' + text + '</h1>');
}

function writeDayOfClasses(dayOfClasses) {
  document.write('<div>');
  document.write('<h2>' + dayOfClasses + '</h2>');
}

function writeExercise(setOfExercises) {
  document.write('<div>');
  document.write('<h4>' + setOfExercises + '</h4>');
}

function writeApproach(approach) {
  if (approach !== 'image') {
    document.write('<p>' + approach + '</p>');
  }
}

function writeImages(images) {
  for (let i = 0; i < images.length; i++) {
    document.write(
      '<img src="' + images[i] + '" alt="Image ' + (i + 1) + '">'
    );
  }
}

writeHeading('Exercises');

for (let dayOfClasses in exercises) {
  writeDayOfClasses(dayOfClasses);

  for (let setOfExercises in exercises[dayOfClasses]) {
    writeExercise(setOfExercises);

    for (let anApproach in exercises[dayOfClasses][setOfExercises]) {
      writeApproach(exercises[dayOfClasses][setOfExercises][anApproach]);
    }

    let images = exercises[dayOfClasses][setOfExercises].image;
    writeImages(images);

    document.write('</div>');
  }

  document.write('</div>');
}
*/
