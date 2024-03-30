import { Outlet } from "react-router-dom";
import Entry from "../pages/Entry";
import "../../src/index.css";
import "../../src/App.css";
import SecretSpace from "../pages/SecretSpace";



export default function Root() {
    return (
        <>
            <div id="detail" className="">
              <Entry/>
            <SecretSpace/>

             
                <div className="">
                    
              
                <Outlet />

                </div>
               




            </div>
        </>
    );
}