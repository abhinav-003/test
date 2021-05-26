import react from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent';
import ProfileComponent from './ProfileComponent';
import UserList from './UserList';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            <Header/>
               <Route exact path='/' component={RegisterComponent}/>
               <Route path ='/login' component={LoginComponent}/>
               <Route  path="/profile" component={ProfileComponent}/>
                <Route  path="/list" component={UserList}/>
               <Footer/>
            </BrowserRouter>
        </div>

    )
     
}
export default Routing;