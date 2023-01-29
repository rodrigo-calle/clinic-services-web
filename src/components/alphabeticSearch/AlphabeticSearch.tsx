import './AlphabeticSearch.scss'

const AlphabeticSearch = () => {
    const AlphabetList: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]   
    return(
        <div className='alphabet-container-input'>            
            {AlphabetList.map((letter): any => {
                return (
                    <div className='letter-container'>
                        <p className='letter-container-text'>
                            {letter.toUpperCase()}                        
                        </p>                    
                    </div> 
                )                           
            })}           
        </div>
    )
}

export default AlphabeticSearch;