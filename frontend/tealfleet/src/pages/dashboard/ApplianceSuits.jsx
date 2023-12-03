// React components
import * as React from "react";

// Chakra-UI components
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import AssetsStatusCard from "../../components/dashboard/AssetsStatusCard";
import AssetsTotalCard from "../../components/dashboard/AssetsTotalCard";
import AssetsSupportCard from "../../components/dashboard/AssetsSupportCard";
import AssetsListCard from "../../components/dashboard/AssetsListCard";

function ApplianceSuits() {
  const AssetsStatusCardData = [
    {
      title: "All appliance suits",
      total: 100,
      percent: 100,
    },
    {
      title: "Appliances with support",
      total: 76,
      percent: 76,
    },
    {
      title: "Appliances without support",
      total: 24,
      percent: 24,
    },
    {
      title: "Support expires in 3 months",
      total: 10,
      percent: 10,
    },
    {
      title: "Support expires in 6 months",
      total: 20,
      percent: 20,
    },
    {
      title: "Support expires in 12 months",
      total: 15,
      percent: 15,
    },
  ];

  const AssetsTotalCardData = [
    {
      vendor: "Cisco",
      total: 32,
      percent: 32,
    },
    {
      vendor: "Dell",
      total: 3,
      percent: 3,
    },
    {
      vendor: "VMware",
      total: 28,
      percent: 28,
    },
    {
      vendor: "Palo Alto",
      total: 37,
      percent: 37,
    },
  ];

  const AssetsSupportCardData = [
    {
      vendor: "Cisco",
      supported: 20,
      unsupported: 12,
    },
    {
      vendor: "Dell",
      supported: 2,
      unsupported: 1,
    },
    {
      vendor: "VMware",
      supported: 25,
      unsupported: 3,
    },
    {
      vendor: "Palo Alto",
      supported: 37,
      unsupported: 0,
    },
  ];

  const AssetsListCardData = [
    {
      no: "1",
      contract_id: "123",
      contract_no: "CON-TRACT-001231",
      contract_type: "SUPPORT",
      contractor_name: "MSP Pro Guys",
      contract_valid: "Yes",
      valid_from: "2023-02-012",
      valid_to: "2024-02-12"
    },
  ];

  return (
    <Box marginTop={{ base: "1em", sm: "1em", md: "0em"}}>
      <SimpleGrid
        spacing="1em"
        columns={{ base: "1", sm: "2", md: "3", lg: "3", xl: "4", "2xl": "6" }}
      >
        {AssetsStatusCardData.map((AssetsStatusCardData) => (
          <AssetsStatusCard
            AssetsStatusCardData={AssetsStatusCardData}
            key={AssetsStatusCardData.title}
          />
        ))}
      </SimpleGrid>

      <SimpleGrid
        marginTop="1em"
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "2", lg: "2" }}
      >
        <AssetsTotalCard AssetsTotalCardData={AssetsTotalCardData} />
        <AssetsSupportCard AssetsSupportCardData={AssetsSupportCardData} />
      </SimpleGrid>

      <SimpleGrid
        marginTop="1em"
        spacing="1em"
        columns={{ base: "1", sm: "1", md: "1", lg: "1" }}
      >
        <AssetsListCard AssetsListCardData={AssetsListCardData} />
      </SimpleGrid>
    </Box>
  );
}

export default ApplianceSuits;
