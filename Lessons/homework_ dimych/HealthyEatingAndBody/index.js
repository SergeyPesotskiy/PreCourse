const recipes = {
	desert: {
		muffins: {
			images: ['muffinsImage1.png', 'muffinsImage2.png', 'muffinsImage3.png'],
			ingredientList: [
				'2 cups all-purpose flour',
				'3 teaspoons baking powder',
				'½ teaspoon salt',
				'¾ cup white sugar',
				'1 item egg',
				'1 cup milk'
			],
			preparationSteps: {
				step1: {
					stepDuration: '15-20 min',
					instructions: 'Preheat the oven to 400 degrees F (200 degrees C). Grease a 12-cup muffin tin or line cups with paper liners.',
					images: ['muffinsImageStep1.png'],
				},
				step2: {
					stepDuration: '5-10 min',
					instructions: 'Stir flour, baking powder, salt, and sugar together in a large bowl; make a well in the center.',
					images: ['muffinsImageStep2.png'],
				},
				step3: {
					stepDuration: '35-40 min',
					instructions: 'Beat egg with a fork in a small bowl or 2-cup measuring cup; whisk in milk and oil. Pour egg mixture all at once into flour mixture; mix quickly and lightly with a fork until just moistened. The batter will be lumpy. (Fold in additional ingredients if using). Spoon batter into the prepared muffin cups, filling each 3/4 full.',
					images: ['muffinsImageStep3.png'],
				},
				step4: {
					stepDuration: '25-35 min',
					instructions: 'Bake in the preheated oven until tops spring back when lightly pressed.',
					images: ['muffinsImageStep4.png'],
				}
			}
		},
		pancakes: {
			images: ['url_изображения', 'url_изображения', 'url_изображения'],
			ingredientList: [
				'1 cup all-purpose flour',
				'1 tablespoon white sugar',
				'2 teaspoons baking powder',
				'1 item egg, beaten',
				'1 cup milk',
				'2 tablespoons vegetable oil',
				'2 items bananas'
			],
			preparationSteps: {
				step1: {
					stepDuration: '10-15 min',
					instructions: 'Combine flour, white sugar, baking powder, and salt in a bowl. Mix together egg, milk, vegetable oil, and bananas in a second bowl.',
					images: ['url_изображения'],
				},
				step2: {
					stepDuration: '10-15 min',
					instructions: 'Stir flour mixture into banana mixture; batter will be slightly lumpy.',
					image: 'url_изображения'
				},
				step3: {
					stepDuration: '20 min',
					instructions: 'Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
					images: ['url_изображения'],
				},
				step4: {
					stepDuration: '3-5 min',
					instructions: 'Cook until pancakes are golden brown, 3 to 5 minutes per side. Serve hot.',
					images: ['url_изображения'],
				},
				step5: {
					stepDuration: '3-5 min',
					instructions: 'Serve hot and enjoy!',
					images: ['url_изображения'],
				}
			}
		}
	},
	soups: {
		misoSoup: {
			images: ['url_изображения', 'url_изображения', 'url_изображения'],
			ingredientList: [
				'4 cups water',
				'3 tablespoons miso paste',
				'1 package silken tofu',
				'2 items green onions'
			],
			preparationSteps: {
				step1: {
					stepDuration: '5-10 min',
					instructions: 'Pour water into a pot and bring to a boil. Add miso paste and whisk until dissolved. Reduce heat to low.',
					images: ['url_изображения'],
				},
				step2: {
					stepDuration: '5 min',
					instructions: 'Cut tofu into 1/2-inch cubes and add to the pot. Simmer for 5 minutes.',
					images: ['url_изображения'],
				},
				step3: {
					stepDuration: '5 min',
					instructions: 'Slice green onions and add to the pot. Cook for an additional 5 minutes.',
					images: ['url_изображения'],
				}
			}
		},
		italianWeddingSoup: {
			images: ['url_изображения', 'url_изображения', 'url_изображения'],
			ingredientList: [
				'500 gr extra-lean ground beef',
				'1 item egg, lightly beaten',
				'2 tablespoons dry bread crumbs',
				'1 tablespoon grated Parmesan cheese',
				'½ teaspoon dried basil',
				'½ teaspoon onion powder',
				'5 ¾ cups chicken broth',
				'2 cups thinly sliced escarole',
				'⅓ cup finely chopped carrot'
			],
			preparationSteps: {
				step1: {
					stepDuration: '10-15 min',
					instructions: 'Combine ground beef, egg, bread crumbs, Parmesan cheese, basil, and onion powder in a bowl. Mix well.',
					images: ['url_изображения'],
				},
				step2: {
					stepDuration: '10-15 min',
					instructions: 'Shape beef mixture into 3/4-inch balls.',
					images: ['url_изображения'],
				},
				step3: {
					stepDuration: '20 min',
					instructions: 'In a large pot, bring chicken broth to a boil. Add escarole, carrot, and meatballs. Simmer for 20 minutes until meatballs are cooked through.',
					images: ['url_изображения'],
				}
			}
		}
	}
};

const root = document.querySelector('#root');

// функция - Выводим текст любой по tagName <p>,<h1> ##############=================----------------------
function printTextAll(printText, tagName) {
	const tagLetter = document.createElement(tagName)
		tagLetter.innerText = printText;
			root.appendChild(tagLetter)
}
// функция - Выводим картинки ##############=================----------------------
function printImages(imagesAll) {
	const img= document.createElement('img');
		img.src = imagesAll;
			root.appendChild(img);
}
// функция - Выводим список ингредиентов ##############=================----------------------
function printIngredientListUlLi(listOfIngredients) {
	const ul = document.createElement('ul')
		for ( let ulLi of listOfIngredients ) {
			const li = document.createElement('li')
				li.innerText = ulLi;
				ul.appendChild(li);
	}
		root.appendChild(ul);
}

printTextAll('Recipes', 'h1');

// цикл - Выводим рецепты - recipes ##############=================----------------------

for (let recipesAll in recipes ) {

	printTextAll(recipesAll, 'h2');

	// цикл - Выводим порядок блюд - orderOfDishes ##############=================----------------------

		for (let orderDishes in recipes[recipesAll] ) {

			printTextAll(orderDishes, 'h3');

				// цикл - Выводим название еды содержимое - foodContent ##############=================----------------------
					for (let foodContent in recipes[recipesAll][orderDishes] ) {

						if (foodContent !== 'images' ) {

							printTextAll(foodContent, 'h4');
						}
							// сортируем название еды содержимое - foodContent
								switch (foodContent) {
									case 'images':
												let image = recipes[recipesAll][orderDishes][foodContent]
													// функция - Выводим картинки - images ##############=================----------------------
														for( let imagesAll of image) {
															printImages(imagesAll);//вызов функции вывод картинки
														}
										break;
									case 'ingredientList':
												let ingredientListUlLi = recipes[recipesAll][orderDishes][foodContent];
													// Выводим список ингредиентов ul/li - listOfIngredients ##############=================----------------------
															printIngredientListUlLi(ingredientListUlLi);
										break;
									case 'preparationSteps':
											// document.write('<p>', 'шаг готовим', '</p>');
												let preparationSteps = recipes[recipesAll][orderDishes][foodContent];

													for (let preStep in preparationSteps) {

														printTextAll(preStep, 'p');

															for (let stepAll in preparationSteps[preStep]) {

																switch (stepAll) {
																	case 'instructions':
																			printTextAll(preparationSteps[preStep][stepAll], 'p');
																		break;
																	case "stepDuration"	:
																			printTextAll( stepAll + ' - ' + preparationSteps[preStep][stepAll], 'p');
																		break;
																	case 'images':
																		let image = preparationSteps[preStep][stepAll];
																			for( let imagesAll of image) {
																				printImages(imagesAll);//вызов функции вывод картинки
																			}
																		break;
																	default:
																		printTextAll(preparationSteps[preStep][stepAll], 'p');
																}
															}
													}
										break;
									default:
										printTextAll('чЁто не то', 'h1');
						}

			}

		}

}


/*
recipies

	desert

		muffins

			image

			ingredientList

				2 cups all-purpose flour
				3 teaspoons baking powder
				½ teaspoon salt
				¾ cup white sugar
				1 item egg
				1 cup milk

			preparationSteps

				step1

					Step Duration - 15-20 min
					Preheat the oven to 400 degrees F (200 degrees C). Grease a 12-cup muffin tin or line cups with paper liners.

					image

				step2

					Step Duration - 5-10 min
					Stir flour, baking powder, salt, and sugar together in a large bowl; make a well in the center.

					image

				step3

					Step Duration - 35-40 min
					Beat egg with a fork in a small bowl or 2-cup measuring cup; whisk in milk and oil. Pour egg mixture all at once into flour mixture; mix quickly and lightly with a fork until just moistened. The batter will be lumpy. (Fold in additional ingredients if using). Spoon batter into the prepared muffin cups, filling each 3/4 full.

					image

				step4

					Step Duration - 25-35 min
					Bake in the preheated oven until tops spring back when lightly pressed.

		pancakes

			images

			ingredientList

				1 cup all-purpose flour
				1 tablespoon white sugar
				2 teaspoons baking powder
				1 item egg, beaten
				1 cup milk
				2 tablespoons vegetable oil
				2 items bananas

			preparationSteps

				step1

					Step Duration - 10-15 min
					Combine flour, white sugar, baking powder, and salt in a bowl. Mix together egg, milk, vegetable oil, and bananas in a second bowl.

					image

				step2

					Step Duration - 10-15 min
					Stir flour mixture into banana mixture; batter will be slightly lumpy.

					image

				step3

					Step Duration - 20 min
					Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.

					image

				step4

					Step Duration - 3-5 min
					Cook until pancakes are golden brown, 3 to 5 minutes per side. Serve hot.

					image

				step5

					Step Duration - 3-5 min
					Serve hot and enjoy!

					image

	soups

		misoSoup

			images

			ingredientList

				4 cups water
				3 tablespoons miso paste
				1 package silken tofu
				2 items green onions

			preparationSteps

				step1

					Step Duration - 5-10 min
					Pour grapeseed oil into an electric pressure cooker (such as Instant Pot). Add carrots, leeks, shiitake mushrooms, and onion; cook and stir on the Sauté setting until softened, about 5 minutes.

					image

				step2

					Step Duration - 25-30 min
					Season chicken thighs with salt and pepper; add to the pot. Pour in chicken broth. Seal and cook on the Soup setting for 7 minutes. Release pressure naturally for 10 minutes according to the manufacturer's instructions. Cover the vent with a dishtowel and release remaining pressure with the quick-release method.

					image

				step3

					Step Duration - 20-25 min
					Remove chicken thighs and shred with 2 forks on a cutting board; return to the pot and add miso paste, garlic, soy sauce, ginger, and Sriracha. Cook and stir on the Sauté setting until miso paste dissolves, about 5 minutes. Stir in cabbage and bok choy; cook until softened, about 5 minutes.

					image

		Italian Wedding Soup

			images

			ingredientList

				500 gr extra-lean ground beef
				1 item egg, lightly beaten
				2 tablespoons dry bread crumbs
				1 tablespoon grated Parmesan cheese
				½ teaspoon dried basil
				½ teaspoon onion powder
				5 ¾ cups chicken broth
				2 cups thinly sliced escarole
				⅓ cup finely chopped carrot

			preparationSteps

				step1

					Step Duration - 10-15 min
					Combine ground beef, egg, bread crumbs, Parmesan cheese, basil, and onion powder in a bowl.

					image

				step2

					Step Duration - 10-15 min
					Shape beef mixture into 3/4-inch balls and place on a parchment-lined tray.

					image

				step3

					Step Duration - 20 min
					Heat broth in a large pot over medium-high heat until boiling. Stir in escarole, orzo, carrot, and meatballs and return to boil. Reduce heat to medium and cook at slow boil, stirring frequently to prevent sticking, until pasta is tender yet firm to the bite, about 10 minutes.

					image
*/
