import { Component } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-component',
  imports: [],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent {

  recipies: Recipe[] = [
    {
      id: 1,
      nome: 'Spaghetti alla Carbonara',
      ingredienti: ['Spaghetti', 'Uova', 'Guanciale', 'Pecorino Romano', 'Pepe'],
      tempoPreparazione: 20,
      difficolta: 'Media',
      immagine:
        'https://www.mamablip.com/storage/Traditional-Spaghetti-alla-Carbonara_1131611747132.jpg',
    },
    {
      id: 2,
      nome: 'Lasagne alla Bolognese',
      ingredienti: ['Pasta per lasagne', 'Ragù', 'Besciamella', 'Parmigiano'],
      tempoPreparazione: 60,
      difficolta: 'Media',
      immagine:
        'https://www.sicucina.it/wp-content/uploads/2025/09/Lasagne-alla-Bolognese-Ricetta-Classica-Emblema-della-Tradizione-Italiana.jpg',
    },
    {
      id: 3,
      nome: 'Pizza Margherita',
      ingredienti: ['Farina', 'Pomodoro', 'Mozzarella', 'Basilico', 'Olio'],
      tempoPreparazione: 90,
      difficolta: 'Media',
      immagine:
        'https://assets-eu-01.kc-usercontent.com/6190ffc3-df26-019e-e092-120e0715df95/9c076f13-af22-410c-876d-7986dd243846/Pizza%20margherita.png?w=626&fm=webp&lossless=0&q=80',
    },
    {
      id: 4,
      nome: 'Risotto ai Funghi',
      ingredienti: ['Riso', 'Funghi', 'Brodo', 'Burro', 'Parmigiano'],
      tempoPreparazione: 35,
      difficolta: 'Media',
      immagine: 'https://www.ghiottogalfre.it/50-zoom_default/risotto-ai-funghi-porcini.jpg',
    },
    {
      id: 5,
      nome: 'Insalata Caprese',
      ingredienti: ['Pomodori', 'Mozzarella', 'Basilico', 'Olio', 'Sale'],
      tempoPreparazione: 10,
      difficolta: 'Facile',
      immagine:
        'https://www.tavolartegusto.it/wp/wp-content/uploads/2017/07/Insalata-Caprese-Ricetta-originale-Insalata-Caprese-pomodori-e-mozzarella-.jpg',
    },
    {
      id: 6,
      nome: 'Pollo al Curry',
      ingredienti: ['Petto di pollo', 'Curry', 'Latte di cocco', 'Cipolla', 'Riso'],
      tempoPreparazione: 40,
      difficolta: 'Media',
      immagine:
        'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2015/11/pollo-al-curry/jcr:content/imagePreview.img10.jpg/1620744313759.jpg',
    },
    {
      id: 7,
      nome: 'Hamburger Classico',
      ingredienti: ['Pane', 'Carne macinata', 'Lattuga', 'Pomodoro', 'Formaggio'],
      tempoPreparazione: 25,
      difficolta: 'Facile',
      immagine:
        'https://images-tastehub.mdlzapps.cloud/images/017bedd0-06c9-4461-9eb1-8eb59b50e493.jpg',
    },
    {
      id: 8,
      nome: 'Tiramisù',
      ingredienti: ['Mascarpone', 'Savoiardi', 'Caffè', 'Uova', 'Cacao'],
      tempoPreparazione: 30,
      difficolta: 'Media',
      immagine:
        'https://www.bunsenburnerbakery.com/wp-content/uploads/2016/06/easy-tiramisu-square-29-720x405.jpg',
    },
    {
      id: 9,
      nome: 'Pancake',
      ingredienti: ['Farina', 'Uova', 'Latte', 'Zucchero', 'Burro'],
      tempoPreparazione: 15,
      difficolta: 'Facile',
      immagine:
        'https://www.giallozafferano.it/images/243-24387/Pancakes-allo-sciroppo-d-acero_650x433_wm.jpg',
    },
    {
      id: 10,
      nome: 'Sushi Rolls',
      ingredienti: ['Riso sushi', 'Alga nori', 'Salmone', 'Avocado'],
      tempoPreparazione: 50,
      difficolta: 'Difficile',
      immagine:
        'https://images.immediate.co.uk/production/volatile/sites/30/2024/01/California-roll-a87199c.jpg',
    },
    {
      id: 11,
      nome: 'Paella',
      ingredienti: ['Riso', 'Frutti di mare', 'Pollo', 'Zafferano', 'Piselli'],
      tempoPreparazione: 60,
      difficolta: 'Difficile',
      immagine:
        'https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2013/07/ricetta-paella-pesce/Paella%20di%20pesce_orizz.jpg',
    },
    {
      id: 12,
      nome: 'Zuppa di Lenticchie',
      ingredienti: ['Lenticchie', 'Carote', 'Sedano', 'Cipolla', 'Brodo'],
      tempoPreparazione: 40,
      difficolta: 'Facile',
      immagine: 'https://www.soniaperonaci.it/wp-content/uploads/2025/04/Zuppa-di-lenticchie-2.jpg',
    },
    {
      id: 13,
      nome: 'Frittata di Verdure',
      ingredienti: ['Uova', 'Zucchine', 'Peperoni', 'Cipolla', 'Parmigiano'],
      tempoPreparazione: 20,
      difficolta: 'Facile',
      immagine:
        'https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2015/11/1312_frittata.jpg?fit=1216%2C616&ssl=1',
    },
    {
      id: 14,
      nome: 'Gnocchi al Pesto',
      ingredienti: ['Gnocchi', 'Basilico', 'Pinoli', 'Parmigiano', 'Olio'],
      tempoPreparazione: 25,
      difficolta: 'Media',
      immagine:
        'https://qbcucina.com/cdn/shop/articles/img-1713808789633_a37501db-2cb5-404a-9bff-eed4f8c45977_1200x.png?v=1713810591',
    },
    {
      id: 15,
      nome: 'Cheesecake ai Frutti di Bosco',
      ingredienti: ['Biscotti', 'Burro', 'Formaggio cremoso', 'Zucchero', 'Frutti di bosco'],
      tempoPreparazione: 45,
      difficolta: 'Media',
      immagine:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ-eRmOj0iEwJhsfYfOEOgO3FxbQ0MHti-w&s',
    },
  ];
}
