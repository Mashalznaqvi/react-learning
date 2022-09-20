import { PieChart } from 'react-minimal-pie-chart';

const index = props => {
    const { Data } = props;
    return (
        <>
            <PieChart
                // your data
                data={Data}
                // width and height of the view box
                viewBoxSize={[400, 400]}
            />
        </>
    );
};

export default index;
