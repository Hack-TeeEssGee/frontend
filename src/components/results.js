import { ResponsiveBar } from "@nivo/bar";

const Results = (props) => {

    return (
        <ResponsiveBar
            data={props.data}
            layout={props.layout}
            keys={props.keys}
            indexBy="Hall"
            margin={{ top: 50, right: 130, bottom: 150, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "dark2" }}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "hall",
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "points",
                legendPosition: "middle",
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 3]] }}
            legends={[
                {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 5,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 1,
                    symbolSize: 20,
                itemTextColor: "#fff",
                effects: [
                    {
                    on: "hover",
                    style: {
                        itemOpacity: 1,
                    },
                    },
                ],
                },
            ]}
            animate={false}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}

export default Results;