import { Injectable, signal } from '@angular/core';
import { Recipe } from '../interfaces/recipe';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchValue = signal('');
  selectedDifficulty = signal('Tutte');

  recipies = signal<Recipe[]>([
    {
      id: 1,
      nome: 'Spaghetti alla Carbonara',
      ingredienti: ['Spaghetti', 'Uova', 'Guanciale', 'Pecorino Romano', 'Pepe'],
      tempoPreparazione: 20,
      difficolta: 'Media',
      immagine:
        'https://www.mamablip.com/storage/Traditional-Spaghetti-alla-Carbonara_1131611747132.jpg',
      descrizione:
        'La carbonara è uno dei primi piatti più famosi della cucina romana. È preparata con spaghetti conditi con una crema di uova, pecorino romano e pepe nero, arricchiti dal guanciale croccante. Non prevede panna ed è amata per il suo sapore intenso e la sua cremosità naturale.',
      preparazione: 'Ingredienti per 2 persone: 200 g di spaghetti, 100 g di guanciale, 2 uova + 1 tuorlo, 50 g di pecorino romano, pepe nero. Cuoci la pasta in acqua salata. Rosola il guanciale a listarelle fino a renderlo croccante. In una ciotola sbatti uova, pecorino e pepe. Scola la pasta e mescolala con il guanciale, poi fuori dal fuoco aggiungi la crema di uova mescolando velocemente.'
    },

    {
      id: 2,
      nome: 'Lasagne alla Bolognese',
      ingredienti: ['Pasta per lasagne', 'Ragù', 'Besciamella', 'Parmigiano'],
      tempoPreparazione: 60,
      difficolta: 'Media',
      immagine:
        'https://www.sicucina.it/wp-content/uploads/2025/09/Lasagne-alla-Bolognese-Ricetta-Classica-Emblema-della-Tradizione-Italiana.jpg',
      descrizione:
        'Le lasagne alla bolognese sono un grande classico della cucina italiana. Sono composte da strati di pasta all’uovo alternati con ragù di carne, besciamella cremosa e parmigiano. Durante la cottura in forno si crea una crosticina dorata e saporita.',
      preparazione: 'Ingredienti per 4 persone: 250 g di sfoglie di lasagne, 500 g di ragù alla bolognese, 500 ml di besciamella, 80 g di parmigiano. In una teglia stendi besciamella, pasta, ragù e parmigiano. Ripeti gli strati fino a terminare gli ingredienti. Cuoci in forno a 180°C per circa 30 minuti.'
    },

    {
      id: 3,
      nome: 'Pizza Margherita',
      ingredienti: ['Farina', 'Pomodoro', 'Mozzarella', 'Basilico', 'Olio'],
      tempoPreparazione: 90,
      difficolta: 'Media',
      immagine:
        'https://assets-eu-01.kc-usercontent.com/6190ffc3-df26-019e-e092-120e0715df95/9c076f13-af22-410c-876d-7986dd243846/Pizza%20margherita.png?w=626&fm=webp&lossless=0&q=80',
      descrizione:
        'La pizza margherita è una delle pizze più famose al mondo. È caratterizzata da ingredienti semplici: pomodoro, mozzarella e basilico. I colori ricordano la bandiera italiana e rappresentano la tradizione della pizza napoletana.',
      preparazione: 'Ingredienti per 2 pizze: 500 g farina 00, 300 ml acqua, 3 g lievito, 10 g sale, 200 g mozzarella, 200 g pomodoro. Impasta farina, acqua e lievito, aggiungi sale e lascia lievitare 2 ore. Stendi l’impasto, aggiungi pomodoro e mozzarella e cuoci a 250°C per 10 minuti. Completa con basilico.'
    },

    {
      id: 4,
      nome: 'Risotto ai Funghi',
      ingredienti: ['Riso', 'Funghi', 'Brodo', 'Burro', 'Parmigiano'],
      tempoPreparazione: 35,
      difficolta: 'Media',
      immagine: 'https://www.ghiottogalfre.it/50-zoom_default/risotto-ai-funghi-porcini.jpg',
      descrizione:
        'Il risotto ai funghi è un piatto cremoso tipico della cucina del nord Italia. Il riso viene cotto lentamente con brodo caldo e funghi saltati. Alla fine viene mantecato con burro e parmigiano per ottenere una consistenza morbida.',
      preparazione: 'Ingredienti per 2 persone: 180 g riso arborio, 200 g funghi porcini, 1 l brodo, 30 g burro, 40 g parmigiano, 1/2 cipolla. Soffriggi la cipolla, aggiungi il riso e tostalo. Versa brodo poco alla volta mescolando. A metà cottura unisci i funghi. Manteca con burro e parmigiano.'
    },

    {
      id: 5,
      nome: 'Insalata Caprese',
      ingredienti: ['Pomodori', 'Mozzarella', 'Basilico', 'Olio', 'Sale'],
      tempoPreparazione: 10,
      difficolta: 'Facile',
      immagine:
        'https://www.tavolartegusto.it/wp/wp-content/uploads/2017/07/Insalata-Caprese-Ricetta-originale-Insalata-Caprese-pomodori-e-mozzarella-.jpg',
      descrizione:
        'La caprese è un piatto fresco e leggero tipico della cucina mediterranea. È preparato con pomodori maturi, mozzarella fresca e basilico. È ideale come antipasto o piatto estivo veloce.',
      preparazione: 'Ingredienti per 2 persone: 2 pomodori grandi, 200 g mozzarella, basilico fresco, olio extravergine e sale. Taglia pomodori e mozzarella a fette. Disponili alternandoli nel piatto. Condisci con olio, sale e basilico.'
    },

    {
      id: 6,
      nome: 'Pollo al Curry',
      ingredienti: ['Petto di pollo', 'Curry', 'Latte di cocco', 'Cipolla', 'Riso'],
      tempoPreparazione: 40,
      difficolta: 'Media',
      immagine:
        'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2015/11/pollo-al-curry/jcr:content/imagePreview.img10.jpg/1620744313759.jpg',
      descrizione:
        'Il pollo al curry è un piatto speziato tipico della cucina asiatica. Il pollo viene cotto con curry e latte di cocco creando una salsa cremosa e profumata. Di solito si serve con riso bianco.',
      preparazione: 'Ingredienti per 2 persone: 300 g petto di pollo, 1 cipolla, 200 ml latte di cocco, 1 cucchiaio curry, 200 g riso. Rosola la cipolla, aggiungi il pollo a cubetti e il curry. Versa il latte di cocco e cuoci 15 minuti. Servi con riso bollito.'
    },

    {
      id: 7,
      nome: 'Hamburger Classico',
      ingredienti: ['Pane', 'Carne macinata', 'Lattuga', 'Pomodoro', 'Formaggio'],
      tempoPreparazione: 25,
      difficolta: 'Facile',
      immagine:
        'https://images-tastehub.mdlzapps.cloud/images/017bedd0-06c9-4461-9eb1-8eb59b50e493.jpg',
      descrizione:
        'L’hamburger è uno dei panini più diffusi al mondo. Consiste in un disco di carne macinata cotto alla griglia e servito in un panino morbido con verdure e formaggio.',
      preparazione: 'Ingredienti per 2 hamburger: 300 g carne macinata, 2 panini, 2 fette formaggio, lattuga e pomodoro. Forma gli hamburger e cuocili in padella o piastra per 4-5 minuti per lato. Scalda il pane e farcisci con carne, formaggio e verdure.'
    },

    {
      id: 8,
      nome: 'Tiramisù',
      ingredienti: ['Mascarpone', 'Savoiardi', 'Caffè', 'Uova', 'Cacao'],
      tempoPreparazione: 30,
      difficolta: 'Media',
      immagine:
        'https://www.bunsenburnerbakery.com/wp-content/uploads/2016/06/easy-tiramisu-square-29-720x405.jpg',
      descrizione:
        'Il tiramisù è uno dei dolci italiani più conosciuti al mondo. È composto da strati di savoiardi imbevuti nel caffè e crema al mascarpone.',
      preparazione: 'Ingredienti: 250 g mascarpone, 200 g savoiardi, 2 uova, 80 g zucchero, 200 ml caffè, cacao amaro. Monta tuorli e zucchero, aggiungi mascarpone e albumi montati. Bagna i savoiardi nel caffè e alterna strati di crema. Spolvera cacao e lascia riposare in frigo.'
    },

    {
      id: 9,
      nome: 'Pancake',
      ingredienti: ['Farina', 'Uova', 'Latte', 'Zucchero', 'Burro'],
      tempoPreparazione: 15,
      difficolta: 'Facile',
      immagine:
        'https://www.giallozafferano.it/images/243-24387/Pancakes-allo-sciroppo-d-acero_650x433_wm.jpg',
      descrizione:
        'I pancake sono soffici frittelle tipiche della colazione americana. Vengono serviti con sciroppo d’acero, frutta o miele.',
      preparazione: 'Ingredienti: 150 g farina, 1 uovo, 200 ml latte, 30 g zucchero, 20 g burro. Mescola gli ingredienti per creare una pastella. Versa piccole quantità in padella imburrata e cuoci 2 minuti per lato.'
    },

    {
      id: 10,
      nome: 'Sushi Rolls',
      ingredienti: ['Riso sushi', 'Alga nori', 'Salmone', 'Avocado'],
      tempoPreparazione: 50,
      difficolta: 'Difficile',
      immagine:
        'https://images.immediate.co.uk/production/volatile/sites/30/2024/01/California-roll-a87199c.jpg',
      descrizione:
        'I sushi rolls sono rotoli di riso avvolti in alga nori tipici della cucina giapponese. Possono contenere pesce, verdure o avocado.',
      preparazione: 'Ingredienti: 200 g riso sushi, 3 fogli alga nori, 100 g salmone, 1 avocado. Cuoci il riso e condiscilo con aceto di riso. Stendilo sull’alga, aggiungi ripieno e arrotola con stuoia. Taglia in pezzi.'
    },

    {
      id: 11,
      nome: 'Paella',
      ingredienti: ['Riso', 'Frutti di mare', 'Pollo', 'Zafferano', 'Piselli'],
      tempoPreparazione: 60,
      difficolta: 'Difficile',
      immagine:
        'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2013/07/ricetta-paella-pesce/Paella%20di%20pesce_orizz.jpg',
      descrizione:
        'La paella è un piatto tipico spagnolo ricco di riso, carne e frutti di mare. È cucinata in una larga padella chiamata paellera.',
      preparazione: 'Ingredienti: 300 g riso, 200 g pollo, 200 g frutti di mare, 1 bustina zafferano, 700 ml brodo. Rosola il pollo, aggiungi riso e zafferano, versa il brodo e unisci frutti di mare e piselli. Cuoci finché il riso assorbe il liquido.'
    },

    {
      id: 12,
      nome: 'Zuppa di Lenticchie',
      ingredienti: ['Lenticchie', 'Carote', 'Sedano', 'Cipolla', 'Brodo'],
      tempoPreparazione: 40,
      difficolta: 'Facile',
      immagine: 'https://www.soniaperonaci.it/wp-content/uploads/2025/04/Zuppa-di-lenticchie-2.jpg',
      descrizione:
        'La zuppa di lenticchie è un piatto caldo e nutriente molto diffuso nella cucina mediterranea. È ricca di proteine vegetali.',
      preparazione: 'Ingredienti: 250 g lenticchie, 1 carota, 1 costa sedano, 1 cipolla, 700 ml brodo. Soffriggi le verdure tritate, aggiungi lenticchie e brodo e cuoci per circa 30 minuti.'
    },

    {
      id: 13,
      nome: 'Frittata di Verdure',
      ingredienti: ['Uova', 'Zucchine', 'Peperoni', 'Cipolla', 'Parmigiano'],
      tempoPreparazione: 20,
      difficolta: 'Facile',
      immagine:
        'https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2015/11/1312_frittata.jpg',
      descrizione:
        'La frittata di verdure è un piatto semplice e veloce, ideale per un pranzo leggero o una cena rapida.',
      preparazione: 'Ingredienti: 4 uova, 1 zucchina, 1/2 peperone, 30 g parmigiano, 1/4 cipolla. Salta le verdure in padella. Sbatti le uova con parmigiano e uniscile alle verdure. Cuoci 5-6 minuti per lato.'
    },

    {
      id: 14,
      nome: 'Gnocchi al Pesto',
      ingredienti: ['Gnocchi', 'Basilico', 'Pinoli', 'Parmigiano', 'Olio'],
      tempoPreparazione: 25,
      difficolta: 'Media',
      immagine:
        'https://qbcucina.com/cdn/shop/articles/img-1713808789633_a37501db-2cb5-404a-9bff-eed4f8c45977_1200x.png?v=1713810591',
      descrizione:
        'Gli gnocchi al pesto sono un primo piatto tipico ligure. Gli gnocchi di patate vengono conditi con pesto di basilico fresco.',
      preparazione: 'Ingredienti: 500 g gnocchi, 50 g basilico, 20 g pinoli, 40 g parmigiano, 80 ml olio. Frulla basilico, pinoli, parmigiano e olio per creare il pesto. Cuoci gli gnocchi finché salgono a galla e condiscili.'
    },

    {
      id: 15,
      nome: 'Cheesecake ai Frutti di Bosco',
      ingredienti: ['Biscotti', 'Burro', 'Formaggio cremoso', 'Zucchero', 'Frutti di bosco'],
      tempoPreparazione: 45,
      difficolta: 'Media',
      immagine:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ-eRmOj0iEwJhsfYfOEOgO3FxbQ0MHti-w&s',
      descrizione:
        'La cheesecake ai frutti di bosco è un dolce cremoso con base di biscotti e burro. È completata con una salsa di frutti di bosco.',
      preparazione: 'Ingredienti: 200 g biscotti secchi, 100 g burro fuso, 300 g formaggio cremoso, 100 g zucchero, 150 g frutti di bosco. Mescola biscotti tritati e burro e crea la base. Aggiungi crema di formaggio e zucchero. Decora con frutti di bosco e lascia in frigo.'
    }

  ]);

  setSearchValue(value: string): void {
    this.searchValue.set(value);
  }

  setDifficultyValue(value: string): void {
    console.log("set difficulty value: ", value);
    this.selectedDifficulty.set(value);
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipies().find((recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    // trasformo la stringa in array
    const ingredientiArray = (recipe.ingredienti || '').toString()
      .split(',')
      .map((i: string) => i.trim())
      .filter((i: string) => i.length > 0);

    const recipeToSave = {
      ...recipe,
      ingredienti: ingredientiArray, // qui diventa string[]
    };
    this.recipies.update((recipies) => [...recipies, recipeToSave]);

  }

  // constructor(private recipeService: RecipeService) { }

  filterDifficulty(level: string) {
    this.setDifficultyValue(level);
  }
}
