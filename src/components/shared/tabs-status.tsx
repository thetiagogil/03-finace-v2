import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 1 };
  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", height: "100%", width: "100%" }}>
      <TabList
        disableUnderline
        sx={{
          bgcolor: "neutral.50",
          borderTop: "1px solid",
          borderTopColor: "neutral.200",
          p: 1,
          gap: 1,
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
