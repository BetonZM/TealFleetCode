// React components
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Chakra-UI components
import { Flex, Text, HStack } from "@chakra-ui/react";

function HeaderSubNav({ link }) {
  const fetchData = async () => {
    const subname =
      link.split("/")[0] === "" ? link.split("/")[1] : link.split("/")[0];
    const data = await fetch(
      `http://localhost:3000/navigation/sub/names/${subname}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    return { subNavData: await data.json() };
  };

  const fetchSubNavItems = async () => {
    const items = await fetchData();
    return items.subNavData.data;
  };

  const [subNavItems, setSubNavItems] = useState([]);

  const fetchTenants = async () => {
    const data = await fetch(`http://localhost:3000/tenants`, {
      method: "GET",
      credentials: "include",
    });
    return { subNavData: await data.json() };
  };

  const fetchSubNavTenants = async () => {
    const items = await fetchTenants();
    return items.subNavData.data;
  };

  useEffect(() => {
    if (link == "dashboard") {
      fetchSubNavTenants().then((items) => {
        setSubNavItems(items);
      });
    } else {
      fetchSubNavItems().then((items) => {
        setSubNavItems(items);
      });
    }
  }, [link]);

  return (
    <Flex>
      <HStack
        spacing={{
          base: "0.3em",
          sm: "0.6em",
          md: "0.8em",
          lg: "1.0em",
          xl: "1.8em",
        }}
      >
        {subNavItems &&
          subNavItems.map &&
          subNavItems.map((subNavItems) => (
            <Text
              color="blackAlpha.700"
              fontSize={{ base: "sm", sm: "sm", md: "md" }}
              key={subNavItems.sub_nav_id || subNavItems.tenant_name}
              fontWeight={
                location.pathname === subNavItems.sub_nav_path
                  ? "bold"
                  : "normal"
              }
            >
              <NavLink to={subNavItems.sub_nav_path}>
                {subNavItems.tenant_name || subNavItems.sub_nav_item}
              </NavLink>
            </Text>
          ))}
      </HStack>
    </Flex>
  );
}

export default HeaderSubNav;
