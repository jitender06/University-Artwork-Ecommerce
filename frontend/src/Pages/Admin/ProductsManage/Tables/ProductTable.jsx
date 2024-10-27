import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Input, Typography, Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import CreateEditProduct from "../Actions/CreateEditProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewProduct from "../Actions/ViewProduct";
import DeletProduct from "../Actions/DeletProduct";
import { Backdrop, CircularProgress } from "@mui/material";

const TABLE_HEAD = ["Title", "Description", "Status", "Price", "createdAt", "updatedAt", ""];

export function ProductTable() {
  const [TABLE_ROWS, setTABLE_ROWS] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const fetchProductData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/getproducts")
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
    <>
      <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={open}
          onClick={handleClose}
        >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Products list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all Products
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <CreateEditProduct maksad={"add"} fetchProductData={fetchProductData} />
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
                  ({ title, description, status, price, category, createdAt, updatedAt, productImage, _id }, index) => {
                    const isLast = index === TABLE_ROWS?.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={`http://localhost:8000/${productImage?.path}`} alt={title} size="sm" />
                            <div className="flex flex-col">
                              <Typography variant="small" color="blue-gray" className="font-normal">
                                {title?.charAt(0).toUpperCase() + title?.slice(1)}
                              </Typography>
                              <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                {category?.charAt(0).toUpperCase() + category?.slice(1)}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {description?.charAt(0).toUpperCase() + description?.slice(1, 22) + "..."}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={status === 'active' ? "Active" : "Inactive"}
                              color={status === 'active' ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            ₹{price}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {new Date(createdAt).toLocaleDateString()} {/* Format createdAt date */}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {new Date(updatedAt).toLocaleDateString()} {/* Format updatedAt date */}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <ViewProduct productData={{ title, description, price, status, _id, category, productImage }} />
                          <DeletProduct productData={{ title, description, price, status, _id, category, productImage }} fetchProductData={fetchProductData} />
                          <CreateEditProduct maksad="edit" productData={{ title, description, price, status, _id, category, productImage }} fetchProductData={fetchProductData} />
                        </td>
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
                        <CreateEditProduct maksad={"add"} />
                      </div>
                    </div>
                  </td>
                </tr>
              }
            </tbody>

          </table>
        </CardBody>
      </Card>
    </>
  );
}