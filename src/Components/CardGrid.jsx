import Card from "./Card"
import React from "react"

export default function CardGrid({ cards }) {
    const [selectedCard, setSelectedCard] = React.useState(null)

    function selectCardHandler(index) {
        setSelectedCard(cards[index])
    }

    return <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 items-stretch mt-10 m-auto border border-gray-900">
        {selectedCard ? 
            <>
                <Card>
                    <h1>{selectedCard}</h1>
                </Card>
                <Card onClick={() => setSelectedCard(null)}>
                    <h1>Undo Selection</h1>
                </Card>
            </>
            :
            cards.map((card, index) => (
                <Card key={crypto.randomUUID()} indexLoc={index} onClick={selectCardHandler}>
                    <h1>{card}</h1>
                    {card.body?.length > 0 ? <p>{card.body}</p> : null}
                </Card>
            ))
        }
    </div>
}