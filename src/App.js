import AdminApp from "./admin/adminapp";
import UserApp from "./user/userapp";

function App() {
  if ( localStorage.getItem("sellerid") == null ) //change adminid to sellerid as it is one application, multiple seller
  {
  return ( <UserApp/> );
  } 
  else{
    return ( <AdminApp/> );
  }
}

export default App;
