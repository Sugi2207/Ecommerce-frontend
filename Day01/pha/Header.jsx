import './Header.css'
const Header=({cartCount})=>{
    return(
        
      <header className='header'> 
        <h5 className='logo'>Logo</h5>
        <div className='hi'>
          <h4>Products</h4>
          <h4>About</h4>
          <h4>cart:{cartCount}</h4>
        </div>
        </header> 
      
    )
}
export default Header