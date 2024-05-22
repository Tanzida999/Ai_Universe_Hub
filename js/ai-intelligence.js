const loadai = async () =>{
try{
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json();
    // console.log(data)
    const ais = data.data.tools;
    displayai(ais);
}
catch{
    console.log("Error loading data")
}
}

    const displayai = ais => {
        // 1.get the ai container 
        const aiContainer = document.getElementById('ai-container') 
        if(Array.isArray(ais)){
            ais.forEach(ai => {
                console.log(ai)
                // 2. create a div 
                const aiCard = document.createElement('div');
                aiCard.classList = `card  w-96 bg-gray-100 shadow-xl`;
                // 3.set innteHTML
                aiCard.innerHTML = `<figure><img src="${ai.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title font-bold">Features</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>`;
                // // // Appendchild
                aiContainer.appendChild(aiCard);

            
            
            
            });
            
        }
    }

loadai()