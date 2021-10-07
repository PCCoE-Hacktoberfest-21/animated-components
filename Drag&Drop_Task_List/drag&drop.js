let cards = document.querySelectorAll('.card');
let lists = document.querySelectorAll('.list');


cards.forEach((card)=>{
    registerEventsOnCard(card);
});

lists.forEach((list)=>{
    list.addEventListener('dragover', (e)=>{
        e.preventDefault();
        let draggingCard = document.querySelector('.dragging');
        let cardAfterDraggingCard = getCardAfterDraggingCard(list, e.clientY);
        if(cardAfterDraggingCard){
            
                cardAfterDraggingCard.parentNode.insertBefore(draggingCard, cardAfterDraggingCard);
        } else{
            list.appendChild(draggingCard);
        }
        
    });
});

function getCardAfterDraggingCard(list, yDraggingCard){

    let listCards = [...list.querySelectorAll('.card:not(.dragging)')];

    return listCards.reduce((closestCard, nextCard)=>{
        let nextCardRect = nextCard.getBoundingClientRect();
        let offset = yDraggingCard - nextCardRect.top - nextCardRect.height /2;

        if(offset < 0 && offset > closestCard.offset){
            return {offset, element: nextCard}
        } else{
            return closestCard;
        }
    
    }, {offset: Number.NEGATIVE_INFINITY}).element;

}





function registerEventsOnCard(card){
    card.addEventListener('dragstart', (e)=>{
        card.classList.add('dragging');
    });
    


    card.addEventListener('dragend', (e)=>{
        card.classList.remove('dragging');
    });
    
}
