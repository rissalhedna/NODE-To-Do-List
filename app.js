const express = require('express')
const bodyparser = require('body-parser')
const date = require(__dirname+"/date.js")


const items = ["Buy Food","Cook Food","Eat Food"]
const workItems =[]

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',function(req,res){
    
    let day = date.getDate()
    res.render('list',{listTitle:day, listItems:items})

    
})
app.get('/work',function(req,res){
    res.render('list',{listTitle:"Work",listItems:workItems})
})

app.post('/',function(req,res){
    item = req.body.newItem

    if(req.body.list === 'Work'){
        workItems.push(item)
        res.redirect('/work')
    }else{
        items.push(item)
        res.redirect('/')
    }
    
    
})
app.listen(3000,function(){
    console.log('Server up and running port 3000')
})