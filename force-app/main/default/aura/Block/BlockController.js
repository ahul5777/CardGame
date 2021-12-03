({
    BlockClick : function(component, event, helper) {
        const open=component.get("v.open");
        if(open=== false)
        {
            component.set ("v.open", true);
           
            //fire
            let compEvent=component.getEvent("OnClick");
                          
            let label=component.get("v.label");
            compEvent.setParams({value:label });
            compEvent.fire();

        }
        

    }
})
