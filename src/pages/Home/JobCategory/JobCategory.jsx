import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const JobCategory = () => {
    return (
        <div className='my-24'>
            <h2 className='my-10 text-center text-5xl font-semibold'>Popular Job Categories</h2>
            <p className='text-center mb-14 text-2xl'>10 jobs live</p>
            <Tabs>
                <div className='font-bold text-center text-2xl text-gray-700'>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>On Site Jobs</Tab>
                        <Tab>Remote Jobs</Tab>
                        <Tab>Hybrid Jobs</Tab>
                        <Tab>Part Time Jobs</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content all jobs</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content onsite</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content remote</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content hybrid</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content part time</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;