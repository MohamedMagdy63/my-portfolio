import Navbar from "./Navbar";

export default function MainLayout(props){
   return(
    <>
        <Navbar/>
        {props.children}
    </>
   )

}