import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, IconButton, Tooltip } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { Avatar } from "@mui/material";

const TABLE_HEAD = ["Member", "Role", "CreatedAt", "UpdatedAt"];

export function MembersTable() {
  const [TABLE_ROWS, setTABLE_ROWS] = useState()
  const data = JSON.parse(localStorage.getItem('data'));
  let token = data?.accessToken;
  const fetchProductData = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/user/getUser', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      console.log(data, "dataproduct5656")
      setTABLE_ROWS(data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-6">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {TABLE_ROWS?.length > 0 ?
              TABLE_ROWS?.map(
                ({ name, email, role, createdAt, updatedAt, _id }, index) => {
                  const isLast = index === TABLE_ROWS?.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  // Formatting dates using dayjs
                  const formattedCreatedAt = dayjs(createdAt).format('MMM DD, YYYY, h:mm A');
                  const formattedUpdatedAt = dayjs(updatedAt).format('MMM DD, YYYY, h:mm A');

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar alt={name} size="sm" className="bg-blue-500 text-white">
                            {name ? name.charAt(0).toUpperCase() : ''}
                          </Avatar>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name?.charAt(0).toUpperCase() + name.slice(1)}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={role?.charAt(0).toUpperCase() + role.slice(1)}
                            color={role === 'user' ? "green" : "indigo"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {formattedCreatedAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {formattedUpdatedAt}
                        </Typography>
                      </td>
                      {/* <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td> */}
                    </tr>
                  );
                }
              )
              :
              <tr>
                <td colspan="7">
                  <div className="flex item-center justify-center w-full mt-10 flex-col mx-auto text-center">
                    <p className="text-[#222] text-6xl font-bold">OOPS!</p>
                    <p className="text-[#222] text-4xl">No Data Found Yet!</p>
                    <div className="w-full mt-10 flex justify-center">
                      {/* <CreateEditProduct maksad={"add"} /> */}
                    </div>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}