const array = [
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1663853489900-3f24ea776dea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'ice-cream',
        description: 'gelato al pistacchio'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1721777436309-a5af4d4a4382?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'dog',
        description: 'cagnolino'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1722172118259-6a3a4044b2ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'sunrise',
        description: 'panorama con alba'
    }
]

let cardWrapper = document.createElement('div');
cardWrapper.className = "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3";
document.documentElement.append(cardWrapper);
array.forEach((item) => {
    createCard(item);
})

function createCard(data) {
    let card = document.createElement('div')
    card.innerHTML = `<div class="grid rounded-lg shadow-xl gap-3 justify-items-center">
            <h1 class="font-bold text-2xl">${data.title}</h1>
            <p>${data.description}</p>
            <img class="h-[171px]" src="${data.imageUrl}" alt="${data.title}">
        </div>`;
    cardWrapper.append(card);
}