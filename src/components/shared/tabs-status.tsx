import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 0 };
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
      <TabPanel value={0} sx={stylesTabPanel}>
        {trackedTab}
      </TabPanel>
      <TabPanel value={1} sx={stylesTabPanel}>
        {plannedTab}
      </TabPanel>
    </Tabs>
  );
};
