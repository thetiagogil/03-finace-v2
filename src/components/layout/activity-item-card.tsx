import { Avatar, Stack, Typography } from "@mui/joy";
import { capFirstLetter } from "../../utils/typo";
import { txCategoriesArray } from "../arrays/tx-array";

type ActivityItemCardProps = {
  key: number;
  onClick: () => void;
  tx: { value: number; category: string; type: string };
};

export const ActivityItemCard = ({ key, onClick, tx }: ActivityItemCardProps) => {
  const category = txCategoriesArray.find(cat => cat.name === tx.category);
  const Icon = category ? category.icon : null;

  return (
    <Stack
      key={key}
      onClick={onClick}
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 2,
        px: 4,
        py: 2,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { bgcolor: "neutral.200" }
      }}
    >
      <Avatar
        variant="outlined"
        sx={{
          color: tx.type === "income" ? "#14508ccc" : "#501464cc",
          bgcolor: tx.type === "income" ? "#14508c33" : "#50146433"
        }}
      >
        {Icon && <Icon size={20} />}
      </Avatar>
      <Typography level="title-md">{capFirstLetter(tx.category)}</Typography>
      <Typography
        level="title-md"
        sx={{ display: "flex", alignItems: "center", color: tx.type === "income" ? "#14508ccc" : "#501464cc" }}
      >
        {tx.type === "income" ? "+" + tx.value : "-" + tx.value}
      </Typography>
    </Stack>
  );
};
