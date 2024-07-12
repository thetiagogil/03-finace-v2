import { Button, Input, Modal, ModalClose, ModalDialog, Option, Select, Textarea, Typography } from "@mui/joy";
import { useState } from "react";
import { useCreateTx } from "../../api/useTxApi";
import { capFirstLetter } from "../../utils/typo";
import { txCategoriesArray, txTypesArray } from "../arrays/tx-array";
import { Flex } from "../shared/flex";

type AddTxModalProps = {
  open: boolean;
  onClose: () => void;
  userId: string;
  status: "tracked" | "planned";
};

export const AddTxModal = ({ open, onClose, userId, status }: AddTxModalProps) => {
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    date: "",
    value: 0,
    description: ""
  });

  const { createTx, loading } = useCreateTx();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSaveChanges = async () => {
    await createTx({ ...formData, user_id: userId, status });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ width: 500 }}>
        <ModalClose />
        <Flex x>
          <Typography>Create an activity</Typography>
        </Flex>
        <Flex y gap={2} fullwidth>
          <Flex gap={2}>
            <Select
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={(_e: any, newValue: any) =>
                setFormData(prevFormData => ({
                  ...prevFormData,
                  type: newValue
                }))
              }
              sx={{ width: 250 }}
            >
              {txTypesArray.map((type, index) => (
                <Option key={index} value={type}>
                  {capFirstLetter(type)}
                </Option>
              ))}
            </Select>
            <Select
              name="type"
              placeholder="Category"
              value={formData.category}
              onChange={(_e: any, newValue: any) =>
                setFormData(prevFormData => ({
                  ...prevFormData,
                  category: newValue
                }))
              }
              sx={{ width: "100%" }}
            >
              {txCategoriesArray.sort().map((cat, index) => (
                <Option key={index} value={cat}>
                  {capFirstLetter(cat)}
                </Option>
              ))}
            </Select>
          </Flex>
          <Flex gap={2}>
            <Input
              name="date"
              type="date"
              placeholder="YYYY-MM-DD"
              value={formData.date}
              onChange={handleChange}
              sx={{ width: 250 }}
            />
            <Input
              name="value"
              type="number"
              placeholder="Value"
              value={formData.value}
              onChange={handleChange}
              fullWidth
            />
          </Flex>
          <Flex>
            <Textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              minRows={2}
              sx={{ width: "100%" }}
            />
          </Flex>
        </Flex>
        <Flex x gap={1}>
          <Button onClick={handleSaveChanges} loading={loading}>
            Save
          </Button>
        </Flex>
      </ModalDialog>
    </Modal>
  );
};
