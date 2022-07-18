const encourageItems = require("./encourage.json");
const helpItems = require("./help.json");
const inspireItems = require("./inspire.json");

let globalId = 11;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ["A smile is your personal welcome mat","Believe in yourself and others will too.","Courtesy begins in the home.","Don’t just spend time. Invest it.","First think of what you want to do; then do what you have to do.","Fortune Not Found: Abort, Retry, Ignore?"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
    
        
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    
    getAllEncouragementItems: (req, res) => {
        res.status(200).send(encourageItems);
    },
    createNewEncouragementItem: (req, res) => {
        const {title} = req.body;
        let newEncouragement = {
          id: globalId,
          title,
        };
        encourageItems.push(newEncouragement);
        res.status(200).send(encourageItems);
        globalId++;
    },
    deleteEncouragementItem:(req,res) => {
        let {id} = req.params
        let index = encourageItems.findIndex(encourageItem => +encourageItem.id === +id)
        if(index === -1){
            res.status(400).send('Encouragement Item not found')
        } else {
            encourageItems.splice(index,1)
            res.status(200).send(encourageItems)
        }
      },
      editEncouragementItem: (req,res) => {
        let{id} =req.params
        const {title} = req.body
        let index = encourageItems.findIndex(encourageItem => encourageItem.id === +id)
        if(index === -1){
            res.status(400).send("Encouragement Item not found")
        } 
        else{
            encourageItems[index].title=title;
            res.status(200).send(encourageItems)
        }
    },

    getAllHelpItems: (req, res) => {
        res.status(200).send(helpItems);
    },
    createNewHelpItem: (req, res) => {
        const {title} = req.body;
        let newHelp = {
          id: globalId,
          title,
        };
        helpItems.push(newHelp);
        res.status(200).send(helpItems);
        globalId++;
    },
    deleteHelpItem:(req,res) => {
        let {id} = req.params
        let index = helpItems.findIndex(helpItem => +helpItem.id === +id)
        if(index === -1){
            res.status(400).send('Encouragement Item not found')
        } else {
            helpItems.splice(index,1)
            res.status(200).send(helpItems)
        }
      },
      editHelpItem: (req,res) => {
        let{id} =req.params
        const {title} = req.body
        let index = helpItems.findIndex(helpItem => helpItem.id === +id)
        if(index === -1){
            res.status(400).send("Encouragement Item not found")
        } 
        else{
            helpItems[index].title=title;
            res.status(200).send(helpItems)
        }
    },
    getAllInspirationItems: (req, res) => {
        res.status(200).send(inspireItems);
    },
    createNewInspirationItem: (req, res) => {
        const {title} = req.body;
        let newInspiration= {
          id: globalId,
          title,
        };
        inspireItems.push(newInspiration);
        res.status(200).send(inspireItems);
        globalId++;
    },
    deleteInspirationItem:(req,res) => {
        let {id} = req.params
        let index = inspireItems.findIndex(inspireItem => +inspireItem.id === +id)
        if(index === -1){
            res.status(400).send('Inspiration Item not found')
        } else {
            inspireItems.splice(index,1)
            res.status(200).send(inspireItems)
        }
      },
      editInspirationItem: (req,res) => {
        const {id} =req.params
        const {title}=req.body;
        let index = inspireItems.findIndex(inspireItem => inspireItem.id === +id)
        if(index === -1){
            res.status(400).send("inspiration Item not found")
        } 
        else{
            inspireItems[index].title=title;
            res.status(200).send(inspireItems)
        }
    }   
        

}