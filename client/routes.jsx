import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from './App/App.jsx';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});

Deps.autorun(function(computation){
    if(Meteor.user()){
        FlowRouter.go('/');
        console.log("Login Oldu");
    }
    else if(!computation.firstRun){
        FlowRouter.go('/');
        console.log("LOGOUT Oldu");
    }
});