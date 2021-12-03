({
    getWords : function(count) {

        if (count>100)
        {
            return;
        }
            let words=[

                'Adult',
                'Age',
                'Amount',
                'Area',
                'Back',
                'Bed',
                'Blood',
                'Body',
                'Book',
                'Box',
                'Boy',
                'Bulb',
                'Bunch',
                'Busines',
                'Camera',
                'Chicken',
                'Child',
                'Chocolates',
                'City',
                'Clothes',
                'Colony',
                'Colors',
                'Company',
                'Computer',
                'Continent',
                'Council',
                'Country',
                'Course',
                'Cycle',
                'Dates',
                'Day',
                'Death',
                'Desk',
                'Door',
                'Egg',
                'Face',
                'Fact',
                'Factory',
                'Family',
                'Farm',
                'Farmer',
                'Father',
                'Fish',
                'Floor',
                'Flowers',
                'Food',
                'Fridge',
                'Future',
                'Game',
                'Garden',
                'Gas',
                'Glass',
                'Group',
                'Health',
                'Hill',
                'Hospital',
                'Idea',
                'Image',
                'Industry',
                'Island',
                'Jewelry',
                'Job',
                'Kitchen',
                'Land',
                'Law',
                'Leaves',
                'Leg',
                'Letter',
                'Life',
                'Magazine',
                'Market',
                'Metal',
                'Mirror',
                'Mobile',
                'Money',
                'Morning',
                'Mother',
                'Mountain',
                'Movie',
                'Name',
                'Nest',
                'News',
                'Ocean',
                'Oil',
                'Painter',
                'Park',
                'Party',
                'Pen',
                'Pen',
                'Pencil',
                'Person',
                'Picture',
                'Pillow',
                'Place',
                'Plant',
                'Pond',
                'Rain',
                'Rate',
                'Result',
                'Ring'
                        ];

        //randomize
        words=this.randomizeArray(words);
        return words.slice(0,count);
    },


    randomizeArray:function(arr)
    {
        const rand=arr;
        for (let i=rand.length-1;i>0;i--)
        {
            const j=Math.floor(Math.random()*i);
            const temp= rand[i];
            rand[i]=rand[j];
            rand[j]=temp;
        }
        return rand;

    }

    ,

    winword:function(arr){
        let constRandInd=Math.floor(Math.random()*arr.length);
        return arr[constRandInd];
    }
    ,

    disableBoard: function (component)
    {
        component.set ("v.boardDisabled",true);

    }
    ,
    enableBoard: function (component)
    {
        component.set ("v.boardDisabled",false);

    }
    ,
    resetBoard: function (component)
    {
        this.enableBoard(component);
        component.set("v.clickCount",0);
        component.set("v.Result","");
    }
    
    

    
})
