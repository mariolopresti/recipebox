import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-component',
  imports: [],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.css',
})
export class RecipeComponent {

  recipies = [
    {
      nome: "Spaghetti alla Carbonara",
      ingredienti: ["Spaghetti", "Uova", "Guanciale", "Pecorino Romano", "Pepe"],
      tempoPreparazione: 20,
      difficolta: "Media",
      immagine: "https://cookidoo.it/recipes/recipe/it/r732007"
    },
    {
      nome: "Lasagne alla Bolognese",
      ingredienti: ["Pasta per lasagne", "Ragù", "Besciamella", "Parmigiano"],
      tempoPreparazione: 60,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
    },
    {
      nome: "Pizza Margherita",
      ingredienti: ["Farina", "Pomodoro", "Mozzarella", "Basilico", "Olio"],
      tempoPreparazione: 90,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
    },
    {
      nome: "Risotto ai Funghi",
      ingredienti: ["Riso", "Funghi", "Brodo", "Burro", "Parmigiano"],
      tempoPreparazione: 35,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2018/04/22/16/27/rice-3347680_1280.jpg"
    },
    {
      nome: "Insalata Caprese",
      ingredienti: ["Pomodori", "Mozzarella", "Basilico", "Olio", "Sale"],
      tempoPreparazione: 10,
      difficolta: "Facile",
      immagine: "https://cdn.pixabay.com/photo/2016/11/02/14/44/italy-1794363_1280.jpg"
    },
    {
      nome: "Pollo al Curry",
      ingredienti: ["Petto di pollo", "Curry", "Latte di cocco", "Cipolla", "Riso"],
      tempoPreparazione: 40,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2018/01/16/19/17/chicken-curry-3087718_1280.jpg"
    },
    {
      nome: "Hamburger Classico",
      ingredienti: ["Pane", "Carne macinata", "Lattuga", "Pomodoro", "Formaggio"],
      tempoPreparazione: 25,
      difficolta: "Facile",
      immagine: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg"
    },
    {
      nome: "Tiramisù",
      ingredienti: ["Mascarpone", "Savoiardi", "Caffè", "Uova", "Cacao"],
      tempoPreparazione: 30,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2017/01/20/15/06/tiramisu-1995536_1280.jpg"
    },
    {
      nome: "Pancake",
      ingredienti: ["Farina", "Uova", "Latte", "Zucchero", "Burro"],
      tempoPreparazione: 15,
      difficolta: "Facile",
      immagine: "https://cdn.pixabay.com/photo/2016/03/05/19/02/pancakes-1238246_1280.jpg"
    },
    {
      nome: "Sushi Rolls",
      ingredienti: ["Riso sushi", "Alga nori", "Salmone", "Avocado"],
      tempoPreparazione: 50,
      difficolta: "Difficile",
      immagine: "https://cdn.pixabay.com/photo/2017/05/07/08/56/sushi-2291632_1280.jpg"
    },
    {
      nome: "Paella",
      ingredienti: ["Riso", "Frutti di mare", "Pollo", "Zafferano", "Piselli"],
      tempoPreparazione: 60,
      difficolta: "Difficile",
      immagine: "https://cdn.pixabay.com/photo/2017/05/07/23/06/food-2291898_1280.jpg"
    },
    {
      nome: "Zuppa di Lenticchie",
      ingredienti: ["Lenticchie", "Carote", "Sedano", "Cipolla", "Brodo"],
      tempoPreparazione: 40,
      difficolta: "Facile",
      immagine: "https://cdn.pixabay.com/photo/2018/01/04/22/25/lentil-soup-3065770_1280.jpg"
    },
    {
      nome: "Frittata di Verdure",
      ingredienti: ["Uova", "Zucchine", "Peperoni", "Cipolla", "Parmigiano"],
      tempoPreparazione: 20,
      difficolta: "Facile",
      immagine: "https://cdn.pixabay.com/photo/2017/05/07/08/56/omelette-2291450_1280.jpg"
    },
    {
      nome: "Gnocchi al Pesto",
      ingredienti: ["Gnocchi", "Basilico", "Pinoli", "Parmigiano", "Olio"],
      tempoPreparazione: 25,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2019/10/15/12/55/gnocchi-4552466_1280.jpg"
    },
    {
      nome: "Cheesecake ai Frutti di Bosco",
      ingredienti: ["Biscotti", "Burro", "Formaggio cremoso", "Zucchero", "Frutti di bosco"],
      tempoPreparazione: 45,
      difficolta: "Media",
      immagine: "https://cdn.pixabay.com/photo/2018/06/18/16/05/cheesecake-3482749_1280.jpg"
    }
  ]
}
