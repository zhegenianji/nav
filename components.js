var Menu = Vue.component('Menu',
    {
        template:`<div class="box">
            <section>
                    <div class="left">
                        <router-view name="left"></router-view>
                    </div>
                    <div class="right">
                        <router-view name="right"></router-view>
                    </div>
            </section>
</div>`
});
var Left = Vue.component('Left',
    {
        data(){
          return {
              menu:[]
          }
        },
        created(){
            fetch("./left.txt").then(function (e) {
                return e.json();
            }).then((e)=>{
                this.menu = e;
            })
        },
        computed:{
            data(){
                var arr=[];
                for(let i in this.menu){
                    if(this.menu[i].pid==0){
                        arr.push(this.menu[i])
                    }else{
                        for(let j in arr){
                            if(arr[j].child){
                                if(arr[j].id==this.menu[i].pid){
                                    arr[j].child.push(this.menu[i])
                                }
                            }else{
                                 arr[j].child=[];
                                if(arr[j].id==this.menu[i].pid){
                                    arr[j].child.push(this.menu[i])
                                }
                            }
                        }
                    }
                }
                return arr;
            }
        },
            template:`
            <div>
                <ul v-for="item in data">
                    <li><router-link :to="'#'+item.id">{{item.title}}</router-link></li>
                    <li>
                        <ul>
                            <li v-for="item1 in item.child">
                            <router-link :to="'#'+item1.id">{{item1.title}}</router-link></li> 
                         </ul>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
            `
    }
);
var Right = Vue.component('right',
    {
        data(){
          return{
              data:'',
          }
        },
        mounted(){
            fetch("./Right.txt").then(function (e) {
                return e.text();
            }).then((e)=> {
                this.data=e;
            })
        },
        template:`
                <div class="markdown-body">
                <div v-html="data"></div>
                 
                </div>
              
            `,
        watch:{
            $route(){
                var num=this.$route.hash.slice(1);
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({number:document.querySelector('.right').scrollTop })
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .to({ number:document.querySelector('#a'+num).offsetTop }, 500)
                    .onUpdate(function () {
                        document.querySelector('.right').scrollTop = this.number.toFixed(0)
                    })
                    .start()
                animate()
            }
        }
    }
);
var Quick = Vue.component('quick',{
    template:`
    <div class="quick">
    niwnudbuybwubuwbudwubwu
</div>
    `
})
