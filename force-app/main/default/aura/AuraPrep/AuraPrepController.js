({
    Done: function(component, event, helper) {
        let Combobox=component.find("gameMode");
        let NameOfMode=Combobox.get("v.value");

         
          const SelectedMode=component.get("v.SelectedMode")
          component.set("v.SelectedMode",NameOfMode);
          
          if(SelectedMode)
          {
            const boardComp=component.find("boardComp");
            boardComp.StartGame();
            
          }
    },

    
    FineWork: function(component, event, helper) {
        alert(' Done!');


  }


});
