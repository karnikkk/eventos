// import React,{useEffect} from 'react'
// //import { useNavigate } from "react-router-dom";
// import { useDispatch,useSelector } from 'react-redux'
// import { loadUser } from '../actions/userActions';


// const ProtectedRoute = () => {
    
//     const {isAuthenticated = false , loading ,user} = useSelector (state => state.auth)
//     const Navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if(!user){
//             dispatch(loadUser());
//         }
//     },[isAuthenticated,loading]);

//     if(loading) return <h1>loading...</h1>;

//     if(!loading && isAuthenticated){
        
//             return <Navigate to="/login"/>
//          }
    
// };

// export default ProtectedRoute
