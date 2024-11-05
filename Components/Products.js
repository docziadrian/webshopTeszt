
let casualTermekek = [
    {
        nev: "Nike Air Max Plus",
        ar: 100,
        leiras: "Step outside your comfort zone and into bold style with the Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning as you explore new horizons. Featuring airy mesh, bold gradient colours and the wavy design lines of the original, they celebrate defiant style.",
        elado: "Nike",
        img: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80c5a970-04aa-4223-85fb-4b4ddd6fdfa7/NIKE+AIR+MAX+PLUS.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1daa7e6c-1e1a-4a48-9fbb-1253229ff1ec/NIKE+AIR+MAX+PLUS.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb98c09a-615c-4687-9796-64e639088162/NIKE+AIR+MAX+PLUS.png"],
        eredetiUrl: ""
    },
    {
        nev: "Nike Dunk Low",
        ar: 40,
        leiras: "Created for the hardwood, but taken to the streets, the '80s b-ball icon returns with a crisp upper and refreshing colour combos. Channelling vintage style back onto the streets, its padded, low-cut collar lets you take your game anywhere—in comfort.",
        elado: "Nike",
        img: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4114e49-2fe9-40a9-b20b-fd960432d780/W+NIKE+DUNK+LOW+NEXT+NATURE.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dc96955-3d78-4739-baa6-0aee13423a48/W+NIKE+DUNK+LOW+NEXT+NATURE.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5799667-2a3d-4461-8c09-817f8fdad377/W+NIKE+DUNK+LOW+NEXT+NATURE.png"]
    },
    {
        nev: "Nike Air Max Plus",
        ar: 50,
        leiras: "Early sunsets, late-night campfires—'tis the season to bring fresh energy to your Tuned Air experience. Enter this blazing edition of the Air Max Plus. Its high-temp colour palette melds gradient hues with glossy black accents for style that sizzles. Plus, a Max Air unit in the heel and forefoot bring legendary bounce, letting you take to the streets in comfort.",
        elado: "Nike",
        img: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2920903-31a8-4d09-8347-5688176c73b6/NIKE+AIR+MAX+PLUS.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ec198f9-3434-474e-ab71-1ff60fc6492f/NIKE+AIR+MAX+PLUS.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bb13dcd-297d-4253-b9a9-38b9a3f9b13d/NIKE+AIR+MAX+PLUS.png"]
    },
    {
        nev: "Hiker Casual",
        ar: 30,
        leiras: "Long lasting synthetic upper with comfortable inner lining and non-slip sole Absolute Bargain Highly Fashionable and an Ideal Present Suitable for Casual Wear / School Wear.",
        elado: "Landrover",
        img: ["https://media.deichmann.com/asset/deichmann/product-h6/p_mosaic_pd/--2148764_H3.jpg", "https://media.deichmann.com/asset/deichmann/product-h6/p_mosaic_pd/--2148764_H5.jpg", "https://media.deichmann.com/asset/deichmann/product-h6/p_mosaic_pd/--2148764_H4.jpg"]
    },
    {
        nev: "Enzin SL V2",
        ar: 50,
        leiras: "Get ready for big things with the fresh style and unparalleled comfort of our Enzin SL V2 trainers. These trainers offer a lot of performance and feature a lightweight, compression moulded EVA midsole and a SoftFoam dual density insole for comfort that feels like tailor-made for your feet.",
        elado: "Puma",
        img: ["https://media.deichmann.com/asset/deichmann/product-h6-p/p_mosaic_pd/--1714772_P2.jpg", "https://media.deichmann.com/asset/deichmann/product-h6-p/p_mosaic_pd/--1714772_P4.jpg", "https://media.deichmann.com/asset/deichmann/product-h6-p/p_mosaic_pd/--1714772_P3.jpg"]
    },
    {
        nev: "Enzin SL V2",
        ar: 50,
        leiras: "Get ready for big things with the fresh style and unparalleled comfort of our Enzin SL V2 trainers. These trainers offer a lot of performance and feature a lightweight, compression moulded EVA midsole and a SoftFoam dual density insole for comfort that feels like tailor-made for your feet.",
        elado: "Puma",
        img: ["https://media.deichmann.com/asset/deichmann/product-h6/p_mosaic_pd/--2240357_H3.jpg", "https://media.deichmann.com/asset/deichmann/product-h6-p/p_mosaic_pd/--1714772_P4.jpg", "https://media.deichmann.com/asset/deichmann/product-h6-p/p_mosaic_pd/--1714772_P3.jpg"]
    },
];

class Termek {
    constructor(id, nev, ar, leiras, elado, img){
        this.id = id;
        this.nev = nev;
        this.ar = ar;
        this.leiras = leiras;
        this.elado = elado;
        this.img = img;
    }

    kosarbaRakas() {
        const itemId = this.id;
        const existingItem = kosar.find(item => item.id === itemId); //true - false

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            kosar.push({
                id: itemId,
                quantity: 1
            });
        }
        
        localStorage.setItem("kosarbaRakottTermekek", JSON.stringify(kosar));
    }
}

let localCasualTermekek = []

let index = 0;
casualTermekek.forEach(termek => {
    let ujTermek = new Termek(index, termek.nev, termek.ar, termek.leiras, termek.elado, termek.img)
    localCasualTermekek.push(ujTermek)
    index++;
});

function vasarlas(id) {
    localCasualTermekek[id].kosarbaRakas();
    cartAmount = kosar.length;
    updateCartNumber();
    popUp(localCasualTermekek);
}

function filter(){
    minPrice = document.querySelector("#min").value;
    maxPrice = document.querySelector("#max").value;
    ClearPage();
    DisplayItems(localCasualTermekek);
}

DisplayItems(localCasualTermekek);