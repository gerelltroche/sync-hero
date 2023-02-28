export default function Card({children, onClick, indexLoc}) {
    return <div className='px-6 py-4 font-bold text-xl mb-2 border' onClick={() => onClick(indexLoc)} >
        {children}
    </div>
}