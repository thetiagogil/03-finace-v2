import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", height: "100%", width: "100%" }}>
      <TabList
        disableUnderline
        sx={{
          p: 1,
          gap: 1,
          borderRadius: 16,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Tab disableIndicator>Tracked</Tab>
        <Tab disableIndicator>Planned</Tab>
      </TabList>
      <TabPanel value={0}>{trackedTab}</TabPanel>
      <TabPanel value={1}>{plannedTab}</TabPanel>
    </Tabs>
  );
};
