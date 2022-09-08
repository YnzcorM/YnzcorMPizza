
const pizzy = {
    pizza1 : {
        avatar: "img/kaprysna.jpg",
        nazwa : "kaprysna",
        skladniki: "Sos pomidorowy , Mozzarella, Szynka, Pieczarki",
        D:32,
        S:26,
        M:18,
        alergen: "gluten, laktoza",
    },
    pizza2 : {
        nazwa : "Salami",
        skladniki: "Sos pomidorowy , Mozzarella, Salami",
        D:31,
        S:25,
        M:17,
        alergen: "gluten, laktoza",
    },
    pizza3 : {
        nazwa : "Hawajska",
        skladniki: "Sos pomidorowy , Mozzarella, Szynka, Ananas",
        D:334,
        S:27,
        M:19,
        alergen: "gluten, laktoza",
    },
    pizza4 : {
        nazwa : "Myśliwska",
        skladniki: "Sos pomidorowy , Mozzarella, Oliwki, Salami, Pieczarki",
        D:34,
        S:28,
        M:18,
        alergen: "gluten, laktoza",
    },
    pizza5 : {
        nazwa : "Jalapeno",
        skladniki: "Sos pomidorowy , Mozzarella, Szynka, Jalapeno",
        D:32,
        S:24,
        M:16,
        alergen: "gluten, laktoza",
    }
};

const wstawianie = function(){
    
};
const tablica = [pizzy.pizza1,pizzy.pizza2,pizzy.pizza3,pizzy.pizza4];
for(let i=0;i<5;i++){
document.write('<div class="pizza"><div class="avatar">' );
document.write('<img class="imgpizza" src="'+tablica[i].avatar+'"></div>');
document.write('<div class="skladniki"><p>'+tablica[i].nazwa+'</p>'+tablica[i].skladniki+'</div>');
document.write('</div>');
}


