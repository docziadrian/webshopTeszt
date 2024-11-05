let minPrice = 1;
let maxPrice = 1000;



const ClearPage = () => {
    document.querySelector("#termekek").innerHTML = "";
}

let DisplayItems = (localTermekek) => {

    

    localTermekek.forEach(termek => {
        if(termek.ar > maxPrice || termek.ar < minPrice){
            return
        }
        const shortDescription = termek.leiras.substring(0, 25);
        document.querySelector("#termekek").innerHTML += `
                <div class="hover:ring-2 transition-all hover:ring-gray-200 w-full max-w-36 lg:max-w-[23ch] 2xl:max-w-[25ch] mx-auto ring-1 ring-gray-100">
                
                    <div class="rounded-sm ">
                        <div class="w-full ">
                            <img class="rounded-sm max-h-[270px] w-full " src="${termek.img[0]}" alt="${termek.nev}">
                        </div>

                        <div class="flex justify-between  ">
                            <p class=" text-gray-500">${termek.elado}</p>
                            <h1 class="bg-green-500 text-white px-1 font-semibold" id="price">${termek.ar}$</h1>
                        </div>
                        
                        <h1 id="title">${termek.nev}</h1>
                            
                        
                        <h1 class="pt-2" id="description">${shortDescription}...</h1>
                        <div class="flex flex-col px-2 py-1">
                        
                        
                        
                        <div class="flex text-center items-center gap-2">
                            <p class=" text-gray-400">2 eladás</p>
                        </div>
                        <p class="text-sm">⭐⭐⭐⭐⭐</p>
                        <div class="flex justify-start pt-2 space-x-1">
                            <button onClick="vasarlas(${localTermekek, termek.id})" class="text-sm bg-yellow-300 rounded-2xl py-1 p-3">Kosárba rakom</button>
                        </div>
                        <p class="text-sm pt-3">Szállítás Magyarországra</p>
                        <p class="text-sm font-bold">November 21-24</p>

                    </div>
                </div>
                `;
    })
}