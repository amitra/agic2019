//In widget.html , after line 28

<div class="AGICCustomCount" style="color:red;font-weight: 700;"></div>



//In item-list.js, line 1113

        // add between Line 1113 and line 1114, after the closing brace on 1113 and before  return maxResultCount; 

        //start - add in my custom count
        console.log(maxResultCount);
        var divPropCount = query(".AGICCustomCount")[0];
        domAttr.set(divPropCount, "innerHTML", "Total Number of Features Found : " + maxResultCount);   
        //end - add in my custom count