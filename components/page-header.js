
class PageHeader { 
    constructor(headerElement){ 
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){ 
    //console.log(newAverage);   
    var averageBadge = this.headerElement.querySelector("span");
        averageBadge.textContent = newAverage;// 
    }
}