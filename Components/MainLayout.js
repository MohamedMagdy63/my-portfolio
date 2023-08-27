import Navbar from "./Navbar";

export default function MainLayout(props){
   return(
    <div className="layout">
        <Navbar/>
        <main>{props.children}</main>
    </div>
   )

}