// U86364709

function main(){
    // d3 code goes here

    const container = d3.select('#container'); // container in html body to store data point divs
    const myData = []; // empty space
    for (let i = 0; i<5; i++){
        myData.push(i)
    }
    
    container.select('body')
        .select('div')
        .data(myData)
        .enter()
        .append('rect')

        .on("mouseover", function(){
            d3.select(this)
            .style("background-color", "firebrick")
            .style("border", "2px solid green")
        })
        .on("mouseout", function(){
            d3.select(this)
            .style("background-color", "green")
            .style("border", "2px solid firebrick")
        })

}