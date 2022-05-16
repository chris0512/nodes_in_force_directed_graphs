let width = 600;
let height = 600;

let nodes = [
  { color: "red", size: 5, },
  { color: "orange", size: 10 },
  { color: "yellow", size: 15 },
  { color: "green", size: 20 },
  { color: "blue", size: 25 },
  { color: "purple", size: 30 }
];

let svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height);

let nodeSelection = svg
                      .selectAll("circle")
                      .data(nodes)
                      .enter()
                      .append("circle")
                        .attr("r", d => d.size)
                        .attr("fill", d => d.color);

let simulation = d3.forceSimulation(nodes);

simulation.force('center', d3.forceCenter(width / 2, height / 2))
    .force('nodes', d3.forceManyBody())
    .on('tick', () => {
      nodeSelection.attr('cx', d => d.x)
                    .attr('cy', d => d.y);
    });
