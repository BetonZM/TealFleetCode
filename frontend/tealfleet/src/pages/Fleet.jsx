import * as React from "react";

import { API_ENDPOINT } from "../constants/apiEndpoint";

// Chakra-UI components
import { Box } from "@chakra-ui/react";

import FleetFilter from "../features/fleet/FleetFilter.jsx";

function Fleet() {
  return (
    <Box>
      <FleetFilter />
    </Box>
  );
}

export default Fleet;

export const FleetDataLoader = async ({ params, request }) => {
  let fItems;

  const url = new URL(request.url);
  const searchVendor = url.searchParams.get("vendor");
  const searchTenant = url.searchParams.get("tenant");
  const searchSwmodel = url.searchParams.get("swmodel");
  const searchHwmodel = url.searchParams.get("hwmodel");
  const searchSitename = url.searchParams.get("sitename");
  const searchOffset = url.searchParams.get("offset");

  // Construct the URL with search parameters
  const queryParams = new URLSearchParams({
    vendor: searchVendor,
    tenant: searchTenant,
    swmodel: searchSwmodel,
    hwmodel: searchHwmodel,
    sitename: searchSitename,
    offset: searchOffset,
  });

  const vItems = await fetch(`${API_ENDPOINT}/vendors/`, {
    method: "GET",
    credentials: "include",
  });

  const tItems = await fetch(`${API_ENDPOINT}/tenants/`, {
    method: "GET",
    credentials: "include",
  });

  const swItems = await fetch(
    `${API_ENDPOINT}/software/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const hwItems = await fetch(
    `${API_ENDPOINT}/hardware/catalogs/models/names`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const siteItems = await fetch(`${API_ENDPOINT}/sites/`, {
    method: "GET",
    credentials: "include",
  });

  fItems = await fetch(`${API_ENDPOINT}/assets/fleet/all/`, {
    method: "GET",
    credentials: "include",
  });

  const apiUrl = `${API_ENDPOINT}/assets/fleet/all/filter/?${queryParams.toString()}`;

  if (searchTenant || searchSwmodel || searchHwmodel || searchSitename || searchVendor || searchOffset) {
    fItems = await fetch(apiUrl, {
      method: "GET",
      credentials: "include",
    });
  }

  return {
    vItems: await vItems.json(),
    tItems: await tItems.json(),
    swItems: await swItems.json(),
    hwItems: await hwItems.json(),
    siteItems: await siteItems.json(),
    fItems: await fItems.json(),
  };
};
