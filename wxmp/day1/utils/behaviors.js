
module.exports = Behavior({
    data:{
        sharedText: getUserInfo() 
    },
    onLoad:function(){
        this.getUserInfo() ;
    },
    methods:{
        sharedMethod:function(){
            console.log("hello world") ;
        } ,
        getUserInfo: function(){
            console.log("cc") ;
            setTimeout( ()=>{
                this.data.sharedText = 'Rainy' ;
            }, 3000)
        }
    }
})

function getUserInfo() {
    // setTimeout( ()=>{
    //     return 'cc'
    // }, 3000)
    return 'cc'
}