import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

interface Props {
  title: string;
}

export default function CategoryMasterUI({ title }: Props) {
  return (
    <div className="space-y-6 p-6 border rounded-2xl shadow-sm bg-white">
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          Manage category details
        </p>
      </div>

      {/* FORM UI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Category Name" />

        <Textarea placeholder="Description" />

        <div className="flex items-center gap-3">
          <Switch />
          <span className="text-sm">Active</span>
        </div>
        {/*TODO: check switch issue*/}

        <div className="md:col-span-3">
          <Button>Add Category</Button>
        </div>
      </div>

      {/* TABLE UI */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>Electronic accessories</TableCell>
            <TableCell>
              <span className="text-green-600 text-sm font-medium">
                Active
              </span>
            </TableCell>
            <TableCell className="text-right">
              <Switch defaultChecked />
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Charging Dock</TableCell>
            <TableCell>Docking devices</TableCell>
            <TableCell>
              <span className="text-gray-500 text-sm font-medium">
                Inactive
              </span>
            </TableCell>
            <TableCell className="text-right">
              <Switch />
            </TableCell>
          </TableRow>

          {/* Empty */}
          <TableRow>
            <TableCell colSpan={5} className="text-center text-muted-foreground">
              More data will appear here...
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}