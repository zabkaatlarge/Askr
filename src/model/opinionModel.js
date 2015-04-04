var express = require('express');
//http://stackoverflow.com/questions/11836050/searching-for-items-in-a-json-array-using-node-preferably-without-iteration
module.exports={
  
   getAllOpinions : function (){
            
            var result=database.database.opinion;
       
            return result;
    },
    getOpinonByOpinionId : function (id){
            
                            var result=this.getAllOpinions().filter(function(item){
                            return item.opinion_id===id;
                            });
        
                            return result;
    },
    saveOrUpdateOpinion : function(opinion_id,status,user){
                         var opinion= {
                                "opinion_id":opinion_id,
                                "status": status,
                                "user":user
                        };

                        if(opinion_id===0 || opinion_id===""){
                            opinion_id= "opid"+Date.now();
                            opinion.opinion_id=opinion_id;
                            database.database.opinion.push(opinion);
                           
                        }else{
                              
                            for(var i=0; i<database.database.opinion.length ; i++){
                                if(database.database.opinion[i].opinion_id===opinion_id){
                                    database.database.opinion[i]=opinion;
                                    break;
                                }
                            }
                        }
        
                         return opinion;  
                       
                     
                        
    }
    
    
};