({
    doinit : function(component, event, helper) {

    let GameMode=component.get("v.mode");
    let Tiles;
  
    if(GameMode && GameMode==='Intermediate')
    {
        Tiles=6;

    }
    else if(GameMode && GameMode==='Master')
    {
        Tiles=4;

    }
    else
    {
        Tiles=3;
    }
    let BlockSize=12/Tiles;
    component.set("v.BlockSize",BlockSize);


    console.log("In it event has fired!");
    let words=helper.getWords(Tiles*Tiles);
    console.log(words);
    component.set("v.Words",words);
    let WinWord=helper.winword(words)
    component.set("v.WinWord",WinWord);
    console.log(WinWord);
    helper.resetBoard(component);
    } 
    ,
    renderit: function(event){
    console.log("Render event fired!");
    }
    ,
    BlockClickHandler: function(component,event,helper){
        const value=event.getParam("value");
        let clicks= component.get("v.clickCount")+1;

        if(value === component.get("v.WinWord"))
        {
            component.set("v.Result","YOU WIN! 🎈");
            helper.disableBoard(component);
        }
        else if(clicks===3)
        {
            component.set("v.Result","YOU LOSE");
            helper.disableBoard(component);
            
        }
        component.set("v.clickCount",clicks);

      

    }
    
    
})
