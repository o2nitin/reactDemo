import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Grid from './Grad';
import StateApp from './StateApp';
import TextInput from './TextInput';
import ChildParentInvoke from './intercomp/ChildParentInvoke';
import UsingRefs from './intercomp/UsingRefs';
import MyHoc from './MyHoc';
import ContextApp from './contextApi/ContextApp'
import CompLifeCycle from './lifecycle/CompLifeCycle'
import ErrorHandling from './lifecycle/ErrorHandling'
import RestDemo from './lifecycle/RestDemo';


export default  class Dashboard extends React.Component {    
    render() {
        return(
            
            <div>
                <Header title="React SPA Project"/>
                <h1 className="text-info text-centre">Main Dashboard</h1>
                <Grid/>
                <StateApp />
                <TextInput />
                <MyHoc />
                <ChildParentInvoke />
                <ContextApp />
                <UsingRefs />
                <ErrorHandling />

                <CompLifeCycle />
                <RestDemo />
                <Footer />
                
                </div>

        );
    }
}