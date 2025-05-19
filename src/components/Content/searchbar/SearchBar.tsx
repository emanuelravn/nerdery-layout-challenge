import './searchbar.css'

export const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            <span className='search-square'> </span>
            <input type="text" name="searchBar" id="searchBar" className='search-bar' placeholder='Search'/>
        </div>
    )
}