import { ResponsiveLine } from '@nivo/line'
import { useEffect,useState } from 'react'

const theme = {
    "background": "#ffffff",
    "textColor": "#333333",
    "fontSize": 11,
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#333333"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": "#333333"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": "#333333"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "container": {
            "background": "#ffffff",
            "color": "#333333",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
};

export default function AppiPlot({title,plot,select}) 
{
    const [lines,setLines] = useState([]);

    useEffect(()=>{
        let _lines = [];
        for(const id of select || [])
        {
            let data = [];
    
            for(const [x,v] of Object.entries(plot || {}).filter(([k,v])=>!k.startsWith('_')))
                data.push({x:(new Date(parseInt(x))).toLocaleString().split(',')[1],y:v[id] || 0})
    
            _lines.push({
                id,
                data
            });
        }

        setLines(_lines);
    },[plot,select]);

    if(!lines.length)
        return ( <div style={{height:'100%',width:'100%'}}></div> );

    return (
        <div style={{height:'100%',width:'100%'}}>
            <ResponsiveLine
                theme={theme}
                data={lines}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={{
                    orient: 'top',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: title,
                    legendOffset: -32,
                    legendPosition: 'middle'
                }}
                axisRight={null}
                /*axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}*/
                /*axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}*/
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
};
