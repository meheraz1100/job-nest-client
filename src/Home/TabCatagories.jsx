import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCatagories = ({ jobs }) => {
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Browse Job By Catagories</h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500" >Four Catagories avaiable for the time being. they are web development, graphic design, digital marketing. Browse them by clicking on the tabs below</p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>NetWorking</Tab>
            <Tab>Graphic Design</Tab>
          </TabList>
        </div>

        <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                jobs.filter(j => j.job_catagory === 'web_development').map(job => <JobCard job={job} key={job._id} />)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                jobs.filter(j => j.job_catagory === 'digital_marketing').map(job => <JobCard job={job} key={job._id} />)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                jobs.filter(j => j.job_catagory === 'networking').map(job => <JobCard job={job} key={job._id} />)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                jobs.filter(j => j.job_catagory === 'graphic_design').map(job => <JobCard job={job} key={job._id} />)
            }
            </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCatagories;
