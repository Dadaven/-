Vue.filter('currency',function (val,unit) {<!--外部定义过滤器-->
    val=val||0;
unit=unit||'元';
    return val+unit;
});
Vue.directive('pin',function (el,binging) {<!--自定义属性-->
    var binned=binging.value;
    var position=binging.modifiers;
    var warning=binging.arg;
    if(binned){
        el.style.position='fixed';
        for(var key in position){
            if(position[key]){
                el.style[key]='20px';
            }
        }
        if(warning=='true'){
            el.style.background='yellow';
        }
    }
    else{
        el.style.position='static';
        el.style.background='#1db34f';
    }
});

var base={<!--公用代码整合-->
    methods:{
        show:function () {
            this.visible=true;
        },
        hide:function () {
            this.visible=false;
        },
        onclick:function () {
            this.visible=!this.visible;
        }
    },
    data:function () {
        return{
            visible:false,
        }
    }
};
Vue.component('tooltip',{
 template:'<div><span @mouseenter="show" @mouseleave="hide">tooltip</span><div v-if="visible">嘻嘻嘻</div></div>',
 mixins:[base],
});
Vue.component('popup',{
    template:'<div><div><button @click="onclick">点击弹出</button></div>' +
    '<div v-if="visible">哈哈哈哈哈哈哈哈</div></div>',<!--复合组件必须用div包装起来-->
    mixins:[base],<!--明确定义的内容会覆盖mixins-->
});

Vue.component('panel',{
template:
'<div class="m_panel">\n' +
'        <div class="m_title"><slot name="title">标题</slot></div>\n' +
'        <div class="m_content"><slot name="content">内容</slot></div>\n' +
'        <div class="m_foot"><slot name="foot">日期</slot></div>\n' +
'    </div>',
});



var app=new Vue({
    el:'#app',
    data:{<!--数据-->
     name:null,
        age:null,
        sex:'men',
        hobby:['sing'],
        fromselect:1,
        dest:[],
        price:10,
        foodList:[
            {
                name:'葱',
                price:20
            },
            {
                name:'姜',
                price:12
            },
            {
                name:'蒜',
                price:10
            }
        ],

        url:'http://baidu.com',
        img:'http://pic.iask.cn/fimg/5650299767_516.jpg',
        isActive:true,
        role:'admin',
        math:100,
        english:71,
        software:147,
        card1:{
        pinned:false,
        },
        card2:{
        pinned:false,
        },
    },
    methods:{<!--方法-->
    onClick:function () {
        console.log("点击了");
    },
        onEnter:function () {
            console.log("进入");
        },
        onLeave:function () {
            console.log("离开");
        },
        onSubmit:function (e) {
        e.preventDefault();
            console.log("提交");
        },

        onEnter1:function () {
            console.log("提交11");
        },

    },
    computed:{<!--计算-->
        sum:function () {
            return this.math+this.english+this.software;
        }
    },
    components:{<!--组件标签库-->
        alert:{
            template:'<button @click="on_alert_click">自定义组件</button>',
            props:['msg'],
            methods:{
                on_alert_click:function () {
                    alert(this.msg);}
            },
        },
        like:{
            template:'<button @click="allnumber">{{likcount}}</button>',
           data:function () {
               return{
                   likcount:10,
               }
           },
            methods:{
                allnumber:function () {
                    this.likcount++;
                }
            },
        },

    },

});
