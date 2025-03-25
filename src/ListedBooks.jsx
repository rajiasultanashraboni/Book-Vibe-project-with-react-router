
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
 

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">Listed Books</h1>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
        
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
