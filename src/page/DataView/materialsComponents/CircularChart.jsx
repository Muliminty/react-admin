import { Pie } from '@ant-design/plots';


function CircularChart() {

    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 5,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        // autoFit: true,
        // label: {
        //     type: 'inner',
        //     offset: '-50%',
        //     content: '{value}',
        //     style: {
        //         textAlign: 'center',
        //         fontSize: 14,
        //     },
        // },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        // statistic: {
        //     title: false,
        //     content: {
        //         style: {
        //             whiteSpace: 'pre-wrap',
        //             overflow: 'hidden',
        //             textOverflow: 'ellipsis',
        //         },
        //         content: 'AntV\nG2Plot',
        //     },
        // },
    };
    return <>

        <Pie {...config} />
    </>
}



export default CircularChart


