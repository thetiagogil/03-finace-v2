import { Table } from "@mui/joy";
import { txHeadersArray } from "../arrays/tx-headers-array";
import { DataCard } from "../shared/data-card";

type ActivityableProps = {
  status: "tracked" | "planned" | undefined;
};

const mockTx = [
  { date: "2023-01-01", type: "Expense", category: "Food", value: 50, description: "Groceries", status: "tracked" },
  {
    date: "2023-01-02",
    type: "Income",
    category: "Salary",
    value: 1500,
    description: "Monthly Salary",
    status: "tracked"
  },
  {
    date: "2023-01-03",
    type: "Expense",
    category: "Entertainment",
    value: 200,
    description: "Concert Tickets",
    status: "planned"
  },
  {
    date: "2023-01-04",
    type: "Expense",
    category: "Utilities",
    value: 100,
    description: "Electric Bill",
    status: "tracked"
  },
  {
    date: "2023-01-05",
    type: "Income",
    category: "Freelance",
    value: 300,
    description: "Project Payment",
    status: "planned"
  }
];

export const ActivityTable = ({ status }: ActivityableProps) => {
  const filteredTx = mockTx.filter(transaction => transaction.status === status);

  return (
    <DataCard>
      <Table>
        <thead>
          <tr>
            {txHeadersArray.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredTx.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>{tx.type}</td>
              <td>{tx.category}</td>
              <td>{tx.value}€</td>
              <td>{tx.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DataCard>
  );
};
