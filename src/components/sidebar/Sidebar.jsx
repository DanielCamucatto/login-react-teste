import image from "../../img/img1.jpg"

function Sidebar() {
    return(
      <div className= 'sidebar-container' >
       <div className="sidebar-container__img" style={{ backgroundImage: `url(${image})`}}>
       </div>
       <div className="sidebar-container__title">
        <h1 className="sidebar-container__title title--primary">Lorem ipsum condimentum</h1>
       </div>
      </div>
    )
}

export default Sidebar;