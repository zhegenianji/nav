var router = new VueRouter({
    mode:"hash",
    routes:[
        {path:'/',component:Menu,
        children:[
            {path:'',components:{
                left:Left,
                right:Right
            }}
        ]},
        {path:"/quick",component:Quick}
    ]
});