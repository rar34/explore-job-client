import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import PropTypes from 'prop-types'


const JobCategory = ({ jobs }) => {
    // console.log(jobs)
    return (
        <div className='my-24'>
            <h2 className='my-10 text-center text-5xl font-semibold'>Popular Job Categories</h2>
            <p className='text-center mb-14 text-green-600 text-2xl'>{jobs.length} jobs live</p>
            <Tabs>
                <div className='font-bold text-center text-2xl'>
                    <TabList>
                        <Tab>All Jobs</Tab>
                        <Tab>Onsite Jobs</Tab>
                        <Tab>Remote Jobs</Tab>
                        <Tab>Hybrid Jobs</Tab>
                        <Tab>Part Time Jobs</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            jobs.filter(j => j.category === 'Onsite Job').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            jobs.filter(j => j.category === 'Remote Job').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            jobs.filter(j => j.category === 'Hybrid Job').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {
                            jobs.filter(j => j.category === 'Part Time Job').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobCategory;

JobCategory.propTypes = {
    jobs: PropTypes.array
}