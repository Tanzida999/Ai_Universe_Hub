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
                aiCard.classList = `card  bg-gray-100 p-4 shadow-xl`;
                // 3.set innteHTML
                aiCard.innerHTML = `<figure><img src="${ai.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title font-bold">Features</h2>
                  <ul class ="list-disc pl-6"> ${ai.features.map(feature => `<li>${feature}</li>`).join('')}
                  </ul>
                  <h2 class ="font-bold">${ai.name}</h2>
                  <p class="text-left justify-items-end justify-end">${ai.published_in}</p>
                  <div class="card-actions justify-end">
                  <button class="btn bg-transparent border-none flex items-center">

                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L14.586 11H4a1 1 0 0 1 0-2h10.586L10.293 6.707a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
                      </svg>
                  </button>
              </div>
              
                </div>`;
                // // // Appendchild
                aiContainer.appendChild(aiCard);

            
            
            
            });
            
        }
    }

loadai()